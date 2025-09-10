const Product = require("../models/ProductModel");
const Activity = require("../models/ActivityModel");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

// Get All Products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Get Single Product
exports.getSingleProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Add Product
exports.addProduct = async (req, res) => {
    try {
        const { name, description, category, badge, inStock } = req.body;

        if (!name || !description || !category || !req.file) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Upload to Cloudinary
        const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
            folder: "products",
        });

        // Remove local file after upload
        fs.unlinkSync(req.file.path);

        const product = new Product({
            name,
            image: uploadedImage.secure_url,
            cloudinary_id: uploadedImage.public_id,
            description,
            category,
            badge,
            inStock,
        });

        await product.save();

        await Activity.create({
            type: "product",
            message: `New product "${product.name}" added`,
        });

        res.status(200).json({ message: "Product Added Successfully", product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        if (product.cloudinary_id) {
            await cloudinary.uploader.destroy(product.cloudinary_id);
        }

        await product.deleteOne();
        res.status(200).json({ message: "Product Deleted Successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Update Product
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, category, badge, inStock } = req.body;

        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        if (req.file) {
            if (product.cloudinary_id) {
                await cloudinary.uploader.destroy(product.cloudinary_id);
            }
            const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
                folder: "products",
            });
            fs.unlinkSync(req.file.path);
            product.image = uploadedImage.secure_url;
            product.cloudinary_id = uploadedImage.public_id;
        }

        product.name = name || product.name;
        product.description = description || product.description;
        product.category = category || product.category;
        product.badge = badge || product.badge;
        product.inStock = inStock !== undefined ? inStock : product.inStock;

        await product.save();

        res.status(200).json({ message: "Product updated Successfully", product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};
