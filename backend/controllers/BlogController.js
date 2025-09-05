require("dotenv").config();
const Blog = require("../models/BlogModel");


exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.getSingleBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.addBlog = async (req, res) => {
    const { title, image, description, category, author, badge } = req.body;

    if (
        !title ||
        !image ||
        !description ||
        !category ||
        !author ||
        !badge

    ) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const blog = new Blog({
            title,
            image,
            description,
            category,
            author,
            badge
        });

        await blog.save();
        res.status(200).json({ message: "Blog Added Successfully", blog });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.deleteBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ message: "Blog Deleted Successfully", blog });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, image, description, category, author, badge } = req.body;

    try {
        const blog = await Blog.findByIdAndUpdate(id, {
            title,
            image,
            description,
            category,
            author,
            badge
        });
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ message: "Blog updated Successfully", Blog });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};
