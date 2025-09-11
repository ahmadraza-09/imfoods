import React, { useState, useEffect } from "react";
import { Search, Edit, Trash2, Shield, User } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";

const UsersManager = () => {
  const [admin, setAdmin] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    loadAdmin();
  }, []);

  const loadAdmin = async () => {
    try {
      const res = await axios.get("http://localhost:8000/auth/getalladmin");
      if (res.data && res.data.length > 0) {
        setAdmin(res.data[0]);
      }
    } catch (err) {
      toast.error("Failed to load admin details");
      console.error(err);
    }
  };

  const openModal = () => {
    setFormData({
      name: admin.name,
      email: admin.email,
      phone: admin.phone,
    });
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };

      const res = await axios.put(
        `http://localhost:8000/auth/updateadmin/${admin._id}`,
        payload
      );

      setAdmin(res.data.admin);
      toast.success(res.data.message);
      setIsModalOpen(false);
      loadAdmin();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to update admin");
    }
  };

  const filteredAdmin =
    admin && admin.name.toLowerCase().includes(searchTerm.toLowerCase())
      ? [admin]
      : [];

  const getRoleColor = (role) =>
    role === "admin"
      ? "bg-purple-100 text-purple-600"
      : "bg-blue-100 text-blue-600";

  const getRoleIcon = (role) =>
    role === "admin" ? <Shield size={16} /> : <User size={16} />;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Users Management
          </h3>
          <p className="text-gray-600">Manage system administrators</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {admin ? 1 : 0}
              </p>
            </div>
            <User className="h-8 w-8 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Administrators</p>
              <p className="text-2xl font-bold text-purple-600">
                {admin ? 1 : 0}
              </p>
            </div>
            <Shield className="h-8 w-8 text-purple-400" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Regular Users</p>
              <p className="text-2xl font-bold text-blue-600">0</p>
            </div>
            <User className="h-8 w-8 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search admin..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Admin Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {filteredAdmin.length === 0 ? (
          <div className="p-12 text-center">
            <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No admin found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    User
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Email
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Phone
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Role
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Joined
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAdmin.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {user.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            ID: {user._id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{user.email}</td>
                    <td className="py-4 px-6 text-gray-600">{user.phone}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center space-x-1 px-3 py-1 text-sm rounded-full ${getRoleColor(
                          user.role
                        )}`}
                      >
                        {getRoleIcon(user.role)}
                        <span className="capitalize">{user.role}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <button
                          onClick={openModal}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => alert("Cannot delete admin")}
                          className="p-2 rounded-lg text-gray-400 cursor-not-allowed"
                          disabled
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Update Admin Details</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full border p-2 rounded"
              />
              <div className="flex justify-end space-x-2 mt-2">
                <button
                  className="px-4 py-2 bg-gray-200 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-green-700 text-white rounded"
                  onClick={handleUpdate}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersManager;
