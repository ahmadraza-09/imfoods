const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

router.get("/getallproducts", productController.getAllProducts);
router.get("/getsingleproduct/:id", productController.getSingleProduct);
router.post("/addproduct", productController.addProduct);
router.delete("/deleteproduct/:id", productController.deleteProduct);
router.put("/updateproduct/:id", productController.updateProduct);


module.exports = router;