require("dotenv").config();
const Blog = require("../models/BlogModel");
const Activity = require("../models/ActivityModel");
const cloudinary = require("../config/cloudinary");

// Get All Blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Get Single Blog
exports.getSingleBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Add Blog
exports.addBlog = async (req, res) => {
    const {
        title,
        description,
        category,
        author,
        badge,
        content,
        metaTitle,
        metaDescription,
        keywords,
    } = req.body;

    if (
        !title ||
        !description ||
        !category ||
        !author ||
        !badge ||
        !content ||
        !metaTitle ||
        !metaDescription ||
        !keywords
    ) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        // Upload to Cloudinary
        const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
            folder: "blogs",
        });

        const blog = new Blog({
            title,
            image: uploadedImage.secure_url,
            cloudinary_id: uploadedImage.public_id,
            description,
            category,
            author,
            badge,
            content,
            metaTitle,
            metaDescription,
            keywords: keywords.split(",").map((k) => k.trim()),
        });

        await blog.save();

        await Activity.create({
            type: "blog",
            message: `New blog "${blog.title}" published`,
        });

        res.status(200).json({ message: "Blog Added Successfully", blog });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Update Blog
exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    const {
        title,
        description,
        category,
        author,
        badge,
        content,
        metaTitle,
        metaDescription,
        keywords,
    } = req.body;

    try {
        const blog = await Blog.findById(id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        // If new image uploaded, replace on Cloudinary
        if (req.file) {
            if (blog.cloudinary_id) {
                await cloudinary.uploader.destroy(blog.cloudinary_id);
            }
            const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
                folder: "blogs",
            });
            blog.image = uploadedImage.secure_url;
            blog.cloudinary_id = uploadedImage.public_id;
        }

        blog.title = title || blog.title;
        blog.description = description || blog.description;
        blog.category = category || blog.category;
        blog.author = author || blog.author;
        blog.badge = badge || blog.badge;
        blog.content = content || blog.content;
        blog.metaTitle = metaTitle || blog.metaTitle;
        blog.metaDescription = metaDescription || blog.metaDescription;
        blog.keywords =
            (keywords && keywords.split(",").map((k) => k.trim())) || blog.keywords;

        await blog.save();

        await Activity.create({
            type: "blog",
            message: `Blog "${blog.title}" updated`,
        });

        res.status(200).json({ message: "Blog updated Successfully", blog });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Delete Blog
exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Safely remove from Cloudinary
        if (blog.cloudinary_id) {
            try {
                await cloudinary.uploader.destroy(blog.cloudinary_id);
            } catch (cloudErr) {
                console.error("Cloudinary delete error:", cloudErr.message);
            }
        }

        await Blog.findByIdAndDelete(id);

        res.status(200).json({ message: "Blog Deleted Successfully" });
    } catch (error) {
        console.error("Delete Blog Error:", error.message);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


// Get Blog By Title
exports.getBlogByTitle = async (req, res) => {
    const { title } = req.query;
    try {
        if (!title) {
            return res.status(400).json({ status: 400, message: "Title is required" });
        }
        const regex = new RegExp(`^${title.replace(/-/g, " ")}$`, "i");
        const blog = await Blog.findOne({ title: regex });
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
