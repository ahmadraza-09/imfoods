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

  const [preview, setPreview] = useState(null);
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
        keywords: blog.keywords?.join(",") || "",
        image: null,
      });
      setPreview(blog.image || null);
    }
  }, [blog]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleKeywordsChange = (e) => {
    const value = e.target.value.replace(/\s+/g, ""); // remove spaces
    setFormData({ ...formData, keywords: value });
  };

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
    <div className="fixed inset-0 z-52 flex items-center justify-center p-4 bg-black/30 backdrop-blur-xs">
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
            <label className="block text-sm font-medium mb-2">
              Title * (max 60 chars)
            </label>
            <input
              type="text"
              maxLength={60}
              placeholder="Enter blog title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border p-2 rounded"
              required
            />
            <p className="text-xs text-gray-500">
              {formData.title.length}/60 characters
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description (max 160 chars)
            </label>
            <textarea
              placeholder="Short description"
              maxLength={160}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
            <p className="text-xs text-gray-500">
              {formData.description.length}/160 characters
            </p>
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
              onChange={handleImageChange}
              className="w-full border p-2 rounded"
            />
            {preview && (
              <div className="mt-2">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded border"
                />
              </div>
            )}
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
            <label className="block text-sm font-medium mb-2">
              Meta Title (max 60 chars)
            </label>
            <input
              type="text"
              maxLength={60}
              placeholder="Meta title for SEO"
              value={formData.metaTitle}
              onChange={(e) =>
                setFormData({ ...formData, metaTitle: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
            <p className="text-xs text-gray-500">
              {formData.metaTitle.length}/60 characters
            </p>
          </div>

          {/* Meta Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Meta Description (max 160 chars)
            </label>
            <input
              type="text"
              maxLength={160}
              placeholder="Meta description for SEO"
              value={formData.metaDescription}
              onChange={(e) =>
                setFormData({ ...formData, metaDescription: e.target.value })
              }
              className="w-full border p-2 rounded"
            />
            <p className="text-xs text-gray-500">
              {formData.metaDescription.length}/160 characters
            </p>
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Keywords (comma separated, no spaces)
            </label>
            <input
              type="text"
              placeholder="e.g.,food,spices,organic"
              value={formData.keywords}
              onChange={handleKeywordsChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 rounded text-white flex items-center gap-2 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800"
              }`}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>{" "}
                  {blog ? "Updating..." : "Publishing..."}
                </div>
              ) : blog ? (
                "Update"
              ) : (
                "Publish"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogModal;
