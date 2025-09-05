const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number },
        subject: { type: String },
        message: { type: String },
    },
    { timestamps: true } // createdAt, updatedAt
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
