const express = require("express");
const router = express.Router();
const blogController = require("../controllers/BlogController");
const upload = require("../config/multer");

router.get("/getallblogs", blogController.getAllBlogs);
router.get("/getsingleblog/:id", blogController.getSingleBlog);
router.post("/addblog", upload.single("image"), blogController.addBlog);
router.delete("/deleteblog/:id", blogController.deleteBlog);
router.put("/updateblog/:id", upload.single("image"), blogController.updateBlog);
router.get("/getblogbytitle", blogController.getBlogByTitle);

module.exports = router;
