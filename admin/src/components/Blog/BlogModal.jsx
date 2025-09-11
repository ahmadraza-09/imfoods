import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const BlogModal = ({ blog, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    author: "Im Foods",
    badge: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || "",
        description: blog.description || "",
        content: blog.content || "",
        category: blog.category || "",
        author: blog.author || "Im Foods",
        badge: blog.badge || "",
        metaTitle: blog.metaTitle || "",
        metaDescription: blog.metaDescription || "",
        keywords: blog.keywords?.join(", ") || "",
        image: null,
      });
    }
  }, [blog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null && formData[key] !== "") {
          data.append(key, formData[key]);
        }
      });

      await onSave(data);
    } catch (err) {
      console.error("Error saving blog:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-lg relative">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold">
            {blog ? "Edit Blog" : "Add Blog"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-gray-900"
            disabled={loading}
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Title *</label>
            <input
              type="text"
              placeholder="Enter blog title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              placeholder="Short description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium mb-2">Content *</label>
            <textarea
              placeholder="Write blog content..."
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="w-full border p-2 rounded min-h-[200px]"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-2">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-2">Category *</label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full border p-2 rounded"
              required
            >
              <option value="">-- Select Category --</option>
              <option value="Spice">Spice</option>
              <option value="Oil">Oil</option>
              <option value="Household">Household</option>
              <option value="Pulse">Pulse</option>
              <option value="Fruit">Fruit</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Tea">Tea</option>
              <option value="Coffee">Coffee</option>
              <option value="Grain">Grain</option>
              <option value="Dairy">Dairy</option>
            </select>
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium mb-2">Author</label>
            <input
              type="text"
              placeholder="Author name"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Badge */}
          <div>
            <label className="block text-sm font-medium mb-2">Badge</label>
            <input
              type="text"
              placeholder="Badge text"
              value={formData.badge}
              onChange={(e) =>
                setFormData({ ...formData, badge: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Meta Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Meta Title</label>
            <input
              type="text"
              placeholder="Meta title for SEO"
              value={formData.metaTitle}
              onChange={(e) =>
                setFormData({ ...formData, metaTitle: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Meta Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Meta Description
            </label>
            <input
              type="text"
              placeholder="Meta description for SEO"
              value={formData.metaDescription}
              onChange={(e) =>
                setFormData({ ...formData, metaDescription: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Keywords (comma separated)
            </label>
            <input
              type="text"
              placeholder="e.g., food, spices, organic"
              value={formData.keywords}
              onChange={(e) =>
                setFormData({ ...formData, keywords: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 rounded text-white flex items-center gap-2 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-700 hover:bg-blue-800"
            }`}
          >
            {loading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {loading ? "Saving..." : blog ? "Update Blog" : "Publish Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogModal;
