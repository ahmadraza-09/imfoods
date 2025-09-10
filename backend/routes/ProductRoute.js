const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
const upload = require("../config/multer");

router.get("/getallproducts", productController.getAllProducts);
router.get("/getsingleproduct/:id", productController.getSingleProduct);
router.post("/addproduct", upload.single("image"), productController.addProduct);
router.delete("/deleteproduct/:id", productController.deleteProduct);
router.put("/updateproduct/:id", upload.single("image"), productController.updateProduct);

module.exports = router;
