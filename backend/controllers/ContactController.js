require("dotenv").config();
const Contact = require("../models/ContactModel");


exports.getAllContacts = async (req, res) => {
    try {
        const contact = await Contact.find();
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.getSingleContact = async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json(contact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.addContact = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (
        !name ||
        !email ||
        !phone ||
        !subject ||
        !message
    ) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const contact = new Contact({
            name,
            email,
            phone,
            subject,
            message
        });

        await contact.save();
        res.status(200).json({ message: "Contact Added Successfully", contact });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.deleteContacgt = async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await Contact.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json({ message: "Contact Deleted Successfully", contact });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.updateContact = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, subject, message } = req.body;

    try {
        const contact = await Contact.findByIdAndUpdate(id, {
            name,
            email,
            phone,
            subject,
            message
        });
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json({ message: "Contact updated Successfully", contact });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};
