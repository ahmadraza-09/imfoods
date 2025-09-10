import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  LayoutGrid,
  List,
} from "lucide-react";
import { toast } from "react-hot-toast";
import ProductModal from "./ProductModal";

const ProductsManager = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/product/getallproducts"
      );
      setProducts((res.data || []).map((p) => ({ ...p, id: p._id })));
    } catch (error) {
      toast.error("Failed to fetch product listings.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (productData) => {
    try {
      const formData = new FormData();
      formData.append("name", productData.name);
      formData.append("description", productData.description);
      formData.append("category", productData.category);
      formData.append("badge", productData.badge);
      formData.append("inStock", productData.inStock);
      if (productData.image) {
        formData.append("image", productData.image); // file object
      }

      if (editingProduct) {
        await axios.put(
          `http://localhost:8000/product/updateproduct/${editingProduct.id}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        toast.success("Product updated successfully!");
      } else {
        await axios.post("http://localhost:8000/product/addproduct", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Product added successfully!");
      }

      fetchProducts();
    } catch (error) {
      toast.error("Failed to save product.");
    } finally {
      setIsModalOpen(false);
      setEditingProduct(null);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(
          `http://localhost:8000/product/deleteproduct/${productId}`
        );
        setProducts(products.filter((p) => p.id !== productId));
        toast.success("Product deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete product.");
      }
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !categoryFilter || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(products.map((p) => p.category))];

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const created = new Date(dateString);
    const secondsAgo = Math.floor((now - created) / 1000);
    if (secondsAgo < 60) return "just now";
    if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} minute's ago`;
    if (secondsAgo < 86400)
      return `${Math.floor(secondsAgo / 3600)} hour's ago`;
    if (secondsAgo < 172800) return "1 day ago";
    if (secondsAgo < 604800)
      return `${Math.floor(secondsAgo / 86400)} day's ago`;
    if (secondsAgo < 1209600) return "1 week ago";
    if (secondsAgo < 2419200)
      return `${Math.floor(secondsAgo / 604800)} week's ago`;
    if (secondsAgo < 4838400) return "1 month ago";
    return `${Math.floor(secondsAgo / 2592000)} month's ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Products Management
          </h3>
          <p className="text-gray-600">Manage your product inventory</p>
        </div>
        <button
          onClick={() => {
            setEditingProduct(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Add Product</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={category + index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <Filter
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
          </div>
          <div className="flex border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 cursor-pointer ${
                viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-600"
              } rounded-l-lg`}
            >
              <LayoutGrid />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 cursor-pointer ${
                viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-600"
              } rounded-r-lg`}
            >
              <List />
            </button>
          </div>
        </div>
      </div>

      {/* Products Display */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {loading ? (
          <div className="p-12 text-center text-gray-500">Loading...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-500 text-lg">No products found</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Your First Product
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-800 truncate">
                      {product.name}
                    </h4>
                    {product.badge && (
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        product.inStock
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4 justify-between">
                    <span></span>
                    <span className="text-sm">
                      {formatTimeAgo(product.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Product
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Category
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Stock
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Actions
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Added
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div>
                          <div className="font-medium text-gray-800">
                            {product.name}
                          </div>
                          {product.badge && (
                            <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-full mt-1">
                              {product.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {product.category}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          product.inStock
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(product)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {formatTimeAgo(product.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {isModalOpen && (
        <ProductModal
          product={editingProduct}
          onSave={handleSave}
          onClose={() => {
            setIsModalOpen(false);
            setEditingProduct(null);
          }}
        />
      )}
    </div>
  );
};

export default ProductsManager;
