require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin, Register } = require("../models/AuthModel");
const JWT_SECRET = process.env.JWT_SECRET;

exports.getAllAdmin = async (req, res) => {
    try {
        const admin = await Admin.find().select("-password");
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.getSingleAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        const admin = await Admin.findById(id).select("-password");
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.status(200).json(admin);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.deleteAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        const admin = await Admin.findByIdAndDelete(id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.status(200).json({ message: "Admin Deleted Successfully", admin });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    try {
        const admin = await Admin.findByIdAndUpdate(id, {
            name,
            email,
            phone
        });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.status(200).json({ message: "Admin updated Successfully", admin });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.register = async (req, res) => {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const isPhone = await Admin.findOne({ phone });
        const isEmail = await Admin.findOne({ email });

        if (isPhone) {
            return res.status(409).json({ message: "Phone Number already exists" });
        } else if (isEmail) {
            return res.status(409).json({ message: "Email already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const admin = new Register({
            name,
            email,
            phone,
            password: hashPassword,
        });

        await admin.save();
        res.status(201).json({ message: "Registered successfully", admin });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Register.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error });
    }
};
