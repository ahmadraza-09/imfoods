const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number, required: true },
        subject: { type: String },
        message: { type: String },
        status: { type: String, enum: ["new", "responded", "resolved"], default: "new" },
    },
    { timestamps: true } // createdAt, updatedAt
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
