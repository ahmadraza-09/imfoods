const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        image: { type: String, required: true },
        category: { type: String },
        author: { type: String, default: "Im Foods" },
        badge: { type: String }, // e.g. "New", "Best Seller", "Limited"

        // Add blog content
        content: { type: String, required: true }, // Markdown or plain text
    },
    { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
