import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import { X } from "lucide-react";

const BlogModal = ({ blog, onSave, onClose }) => {
  const editorRef = useRef(null);
  const editorHolderRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    author: "Im Foods",
    badge: "",
    metaTitle: "",
    metaDescription: "",
    keywords: [],
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        description: blog.description,
        image: blog.image,
        category: blog.category,
        author: blog.author || "Im Foods",
        badge: blog.badge || "",
        metaTitle: blog.metaTitle || "",
        metaDescription: blog.metaDescription || "",
        keywords: blog.keywords || [],
      });
    }
  }, [blog]);

  useEffect(() => {
    if (editorHolderRef.current && !editorRef.current) {
      editorRef.current = new EditorJS({
        holder: editorHolderRef.current,
        autofocus: true,
        data: blog?.content ? JSON.parse(blog.content) : {},
        tools: {
          header: Header,
          list: List,
          image: ImageTool,
        },
      });
    }

    return () => {
      if (
        editorRef.current &&
        typeof editorRef.current.destroy === "function"
      ) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [blog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editorRef.current) return;

    try {
      const content = await editorRef.current.save();
      onSave({ ...formData, content: JSON.stringify(content) });
    } catch (err) {
      console.error("Editor.js save error:", err);
    }
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

          {/* Editor.js */}
          <div
            ref={editorHolderRef}
            className="border rounded p-2 min-h-[300px] mt-2"
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
