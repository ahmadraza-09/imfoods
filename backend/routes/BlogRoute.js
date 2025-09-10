const express = require("express");
const router = express.Router();
const blogController = require("../controllers/BlogController");

router.get("/getallblogs", blogController.getAllBlogs);
router.get("/getsingleblog/:id", blogController.getSingleBlog);
router.post("/addblog", blogController.addBlog);
router.delete("/deleteblog/:id", blogController.deleteBlog);
router.put("/updateblog/:id", blogController.updateBlog);
router.get("/getblogbytitle", blogController.getBlogByTitle);

module.exports = router;