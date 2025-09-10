import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const BlogModal = ({ blog, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    category: "",
    featured: false,
    author: "Im Foods",
    badge: "",
    metaTitle: "",
    metaDescription: "",
    keywords: [],
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || "",
        description: blog.description || "",
        content: blog.content || "",
        image: blog.image || "",
        category: blog.category || "",
        author: blog.author || "Im Foods",
        badge: blog.badge || "",
        metaTitle: blog.metaTitle || "",
        metaDescription: blog.metaDescription || "",
        keywords: blog.keywords || [],
      });
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-lg relative">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold">
            {blog ? "Edit Blog" : "Add Blog"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <input
            type="text"
            placeholder="Title *"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full border p-2 rounded"
          />

          <textarea
            placeholder="Content *"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="w-full border p-2 rounded min-h-[200px]"
            required
          />

          <input
            type="url"
            placeholder="Featured Image URL *"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Author"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Badge"
            value={formData.badge}
            onChange={(e) =>
              setFormData({ ...formData, badge: e.target.value })
            }
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Meta Title"
            value={formData.metaTitle}
            onChange={(e) =>
              setFormData({ ...formData, metaTitle: e.target.value })
            }
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Meta Description"
            value={formData.metaDescription}
            onChange={(e) =>
              setFormData({ ...formData, metaDescription: e.target.value })
            }
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Keywords (comma separated)"
            value={formData.keywords.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                keywords: e.target.value.split(",").map((k) => k.trim()),
              })
            }
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {blog ? "Update Blog" : "Publish Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogModal;
