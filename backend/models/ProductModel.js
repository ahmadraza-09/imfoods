const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        originalPrice: { type: Number }, // discount ke liye
        image: { type: String, required: true },
        description: { type: String },
        category: { type: String },
        rating: { type: Number, default: 4.5 },
        reviews: { type: Number, default: 0 },
        badge: { type: String }, // e.g. "New", "Best Seller", "Limited"
        inStock: { type: Boolean, default: true },
    },
    { timestamps: true } // createdAt, updatedAt
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
