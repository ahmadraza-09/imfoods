require("dotenv").config();
const Product = require("../models/ProductModel");
const Activity = require("../models/ActivityModel");


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
    const { name, image, description, category, badge, inStock } = req.body;

    if (
        !name ||
        !image ||
        !description ||
        !category ||
        !badge ||
        !inStock
    ) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const product = new Product({
            name,
            image,
            description,
            category,
            badge,
            inStock
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
    const { name, image, description, category, badge, inStock } = req.body;

    try {
        const product = await Product.findByIdAndUpdate(id, {
            name,
            image,
            description,
            category,
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
