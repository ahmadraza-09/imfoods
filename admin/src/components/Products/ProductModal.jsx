import React, { useState, useEffect } from "react";
import { X, RotateCw } from "lucide-react";

const ProductModal = ({ product, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
    badge: "",
    inStock: true,
  });
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // ✅ Loading state added

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        image: product.image || "",
        description: product.description,
        category: product.category,
        badge: product.badge || "",
        inStock: product.inStock,
      });
      setPreview(product.image || "");
    }
  }, [product]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.image) newErrors.image = "Product image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setFormData((prev) => ({ ...prev, image: file }));
    if (errors.image) setErrors((prev) => ({ ...prev, image: "" }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true); // ✅ start loader
      await onSave(formData); // backend call
      setLoading(false); // ✅ stop loader after save
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-800">
            {product ? "Edit Product" : "Add New Product"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter product name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g., Dairy, Household"
            />
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter product description"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image *
            </label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image}</p>
            )}
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-2 w-32 h-32 object-cover rounded"
              />
            )}
          </div>

          {/* Badge & InStock */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Badge
              </label>
              <input
                type="text"
                name="badge"
                value={formData.badge}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., New, Best Seller"
              />
            </div>
            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                name="inStock"
                checked={formData.inStock}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                In Stock
              </span>
            </div>
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
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {product ? "Updating..." : "Saving..."}
                </>
              ) : product ? (
                "Update Product"
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
