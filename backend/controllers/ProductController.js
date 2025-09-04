require("dotenv").config();
const Product = require("../models/ProductModel");


exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.getSingleProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.addProduct = async (req, res) => {
    const { name, price, originalPrice, image, description, category, rating, reviews, badge, inStock } = req.body;

    if (
        !name ||
        !price ||
        !originalPrice ||
        !image ||
        !description ||
        !category ||
        !rating ||
        !reviews ||
        !badge ||
        !inStock
    ) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const product = new Product({
            name,
            price,
            originalPrice,
            image,
            description,
            category,
            rating,
            reviews,
            badge,
            inStock
        });

        await product.save();
        res.status(200).json({ message: "Product Added Successfully", product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product Deleted Successfully", product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, originalPrice, image, description, category, rating, reviews, badge, inStock } = req.body;

    try {
        const product = await Product.findByIdAndUpdate(id, {
            name,
            price,
            originalPrice,
            image,
            description,
            category,
            rating,
            reviews,
            badge,
            inStock
        });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated Successfully", product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};
