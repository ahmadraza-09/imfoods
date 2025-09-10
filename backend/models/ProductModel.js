const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        cloudinary_id: { type: String }, // ✅ store public_id for deletion
        description: { type: String },
        category: { type: String },
        badge: { type: String },
        inStock: { type: Boolean, default: true },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
