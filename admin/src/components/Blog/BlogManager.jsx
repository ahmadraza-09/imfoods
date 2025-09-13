import React, { useState, useEffect } from "react";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import BlogModal from "./BlogModal";
import ConfirmModal from "../Modal/ConfirmModal";
import axios from "axios";
import toast from "react-hot-toast";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ✅ Fetch all blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/blog/getallblogs");
      setBlogs(
        (res.data || []).map((p) => ({
          ...p,
          id: p._id || p.id, // normalize ID
        }))
      );
    } catch (error) {
      toast.error("Failed to fetch blog listings.");
      console.error("Failed to fetch blog listings.:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add or Update Blog
  const handleSave = async (blogData) => {
    try {
      if (editingBlog) {
        // Update blog
        await axios.put(
          `http://localhost:8000/blog/updateblog/${editingBlog.id}`,
          blogData
        );
        toast.success("Blog updated successfully!");
      } else {
        // Add blog
        await axios.post("http://localhost:8000/blog/addblog", blogData);
        toast.success("Blog added successfully!");
      }
      fetchBlogs(); // refresh list
    } catch (error) {
      toast.error("Failed to save blog.");
      console.error("Failed to save blog.", error);
    } finally {
      setIsModalOpen(false);
      setEditingBlog(null);
    }
  };

  // ✅ Delete Blog
  const confirmDelete = (blogId) => {
    setSelectedBlogId(blogId);
    setConfirmOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedBlogId) return;
    try {
      setDeletingId(selectedBlogId); // start loading
      await axios.delete(
        `http://localhost:8000/blog/deleteblog/${selectedBlogId}`
      );
      toast.success("Blog deleted successfully!");
      fetchBlogs(); // refresh list
    } catch (error) {
      toast.error("Failed to delete blog.");
      console.error("Failed to delete blog.", error);
    } finally {
      setDeletingId(null); // stop loading
      setConfirmOpen(false);
      setSelectedBlogId(null);
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || blog.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(blogs.map((b) => b.category))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Blog Management
          </h3>
          <p className="text-gray-600">Create and manage your blog posts</p>
        </div>
        <button
          onClick={() => {
            setEditingBlog(null);
            setIsModalOpen(true);
          }}
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Add Blog Post</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="relative">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {loading ? (
          <p className="p-6 text-center text-gray-500">Loading blogs...</p>
        ) : filteredBlogs.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-500 text-lg">No blog posts found</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors"
            >
              Write Your First Post
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-10 bg-gray-100">
                  <img
                    src={blog.image || "https://via.placeholder.com/400"}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-800 line-clamp-2">
                      {blog.title}
                    </h4>
                    {blog.badge && (
                      <span className="bg-purple-100 text-purple-600 px-2 py-1 text-xs rounded-full ml-2 flex-shrink-0">
                        {blog.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {blog.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>By {blog.author}</span>
                    <span>{blog.category}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>
                      Created: {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                    <span>
                      Updated: {new Date(blog.updatedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        setEditingBlog(blog) || setIsModalOpen(true)
                      }
                      className="flex-1 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Edit size={16} />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => confirmDelete(blog.id)}
                      disabled={deletingId === blog.id}
                      className={`p-2 rounded-lg transition-colors ${
                        deletingId === blog.id
                          ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                          : "text-red-600 hover:bg-red-50"
                      }`}
                    >
                      {deletingId === blog.id ? (
                        <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Trash2 size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Blog Modal */}
      {isModalOpen && (
        <BlogModal
          blog={editingBlog}
          onSave={handleSave}
          onClose={() => {
            setIsModalOpen(false);
            setEditingBlog(null);
          }}
        />
      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={confirmOpen}
        title="Confirm Deletion"
        message="Are you sure you want to delete this blog post? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => {
          setConfirmOpen(false);
          setSelectedBlogId(null);
        }}
      />
    </div>
  );
};

export default BlogManager;
