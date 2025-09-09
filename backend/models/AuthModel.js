const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
});

const adminRegisterSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        phone: { type: Number, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true });

const Admin = mongoose.model("admin", adminSchema);
const Register = mongoose.model("admins", adminRegisterSchema);

module.exports = { Admin, Register };