const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        image: { type: String, required: true },
        category: { type: String },
        cloudinary_id: { type: String }, // ✅ store public_id for deletion
        featured: { type: Boolean, default: false },
        author: { type: String, default: "Im Foods" },
        badge: { type: String }, // e.g. "New", "Best Seller", "Limited"
        metaTitle: { type: String }, // SEO meta title
        metaDescription: { type: String }, // SEO meta description
        keywords: { type: [String] }, // SEO keywords

        // Add blog content
        content: { type: String, required: true }, // Markdown or plain text
    },
    { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
