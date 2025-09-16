const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/ProductRoute");
const blogRoute = require("./routes/BlogRoute");
const contactRoute = require("./routes/ContactRoute");
const authRoute = require("./routes/AuthRoute");
const activityRoute = require("./routes/ActivityRoute");
const cors = require('cors');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;
const DATABASE = process.env.DATABASE || "mongodb://127.0.0.1:27017/imfoods";

mongoose
    .connect(DATABASE)
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch((err) => {
        console.error("Database Connection Error:", err);
    });

app.use("/product", productRoute);
app.use("/blog", blogRoute);
app.use("/contact", contactRoute);
app.use("/auth", authRoute);
app.use("/activity", activityRoute);

app.get("/", (req, res) => {
    res.json("Welcome to the Imfoods API");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});