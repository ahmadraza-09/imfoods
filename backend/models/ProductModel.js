const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String },
        category: { type: String },
        badge: { type: String }, // e.g. "New", "Best Seller", "Limited"
        inStock: { type: Boolean, default: true },
    },
    { timestamps: true } // createdAt, updatedAt
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
