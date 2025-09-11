import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  Search,
  Filter,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  // Fetch contacts from backend
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/contact/getallcontacts"
      );
      setContacts(res.data);
    } catch (error) {
      toast.error("Failed to fetch contact listings.");
    } finally {
      setLoading(false);
    }
  };

  // Update status in backend
  const updateContactStatus = async (contactId, newStatus) => {
    try {
      await axios.put(
        `http://localhost:8000/contact/updatecontact/${contactId}`,
        {
          status: newStatus,
        }
      );

      const updatedContacts = contacts.map((contact) =>
        contact._id === contactId
          ? {
              ...contact,
              status: newStatus,
              updatedAt: new Date().toISOString(),
            }
          : contact
      );
      setContacts(updatedContacts);

      if (selectedContact && selectedContact._id === contactId) {
        setSelectedContact({ ...selectedContact, status: newStatus });
      }

      toast.success("Contact status updated!");
    } catch (error) {
      toast.error("Failed to update status.");
    }
  };

  // Delete contact in backend
  const deleteContact = async (contactId) => {
    try {
      await axios.delete(
        `http://localhost:8000/contact/deletecontact/${contactId}`
      );

      const updatedContacts = contacts.filter(
        (contact) => contact._id !== contactId
      );
      setContacts(updatedContacts);

      if (selectedContact && selectedContact._id === contactId) {
        setSelectedContact(null);
      }

      toast.success("Contact deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete contact.");
    }
  };

  // Filters
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = !statusFilter || contact.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Status UI
  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-600";
      case "responded":
        return "bg-yellow-100 text-yellow-600";
      case "resolved":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "new":
        return <Clock size={16} />;
      case "responded":
        return <MessageSquare size={16} />;
      case "resolved":
        return <CheckCircle size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  // Status counts
  const statusCounts = {
    new: contacts.filter((c) => c.status === "new").length,
    responded: contacts.filter((c) => c.status === "responded").length,
    resolved: contacts.filter((c) => c.status === "resolved").length,
    total: contacts.length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Contact Queries
          </h3>
          <p className="text-gray-600">
            Manage customer inquiries and feedback
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Queries</p>
              <p className="text-2xl font-bold text-gray-900">
                {statusCounts.total}
              </p>
            </div>
            <MessageSquare className="h-8 w-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">New</p>
              <p className="text-2xl font-bold text-blue-600">
                {statusCounts.new}
              </p>
            </div>
            <Clock className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Responded</p>
              <p className="text-2xl font-bold text-yellow-600">
                {statusCounts.responded}
              </p>
            </div>
            <MessageSquare className="h-8 w-8 text-yellow-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Resolved</p>
              <p className="text-2xl font-bold text-green-600">
                {statusCounts.resolved}
              </p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
        </div>
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
              placeholder="Search queries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">All Status</option>
              <option value="new">New</option>
              <option value="responded">Responded</option>
              <option value="resolved">Resolved</option>
            </select>
            <Filter
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
          </div>
        </div>
      </div>

      {/* Contact List & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b">
            <h4 className="font-semibold text-gray-800">
              Queries ({filteredContacts.length})
            </h4>
          </div>
          <div className="max-h-[600px] overflow-y-auto">
            {filteredContacts.length === 0 ? (
              <div className="p-8 text-center">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No contact queries found</p>
              </div>
            ) : (
              <div className="space-y-1">
                {filteredContacts.map((contact) => (
                  <div
                    key={contact._id}
                    onClick={() => setSelectedContact(contact)}
                    className={`p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      selectedContact?._id === contact._id
                        ? "bg-blue-50 border-blue-200"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-medium text-gray-800 truncate">
                        {contact.name}
                      </h5>
                      <div
                        className={`flex items-center space-x-1 px-2 py-1 text-xs rounded-full ${getStatusColor(
                          contact.status
                        )}`}
                      >
                        {getStatusIcon(contact.status)}
                        <span className="capitalize">{contact.status}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 truncate">
                      {contact.subject}
                    </p>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                      {contact.message}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{contact.email}</span>
                      <span>
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {selectedContact ? (
            <>
              <div className="p-6 border-b">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-semibold text-gray-800">
                    Contact Details
                  </h4>
                  <div
                    className={`flex items-center space-x-1 px-3 py-1 text-sm rounded-full ${getStatusColor(
                      selectedContact.status
                    )}`}
                  >
                    {getStatusIcon(selectedContact.status)}
                    <span className="capitalize">{selectedContact.status}</span>
                  </div>
                </div>
                <div className="flex space-x-2 mb-4">
                  <button
                    onClick={() =>
                      updateContactStatus(selectedContact._id, "new")
                    }
                    className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                      selectedContact.status === "new"
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                    }`}
                  >
                    New
                  </button>
                  <button
                    onClick={() =>
                      updateContactStatus(selectedContact._id, "responded")
                    }
                    className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                      selectedContact.status === "responded"
                        ? "bg-yellow-600 text-white"
                        : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                    }`}
                  >
                    Responded
                  </button>
                  <button
                    onClick={() =>
                      updateContactStatus(selectedContact._id, "resolved")
                    }
                    className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                      selectedContact.status === "resolved"
                        ? "bg-green-600 text-white"
                        : "bg-green-100 text-green-600 hover:bg-green-200"
                    }`}
                  >
                    Resolved
                  </button>
                  <button
                    onClick={() => deleteContact(selectedContact._id)}
                    className="px-3 py-1 text-sm rounded-lg transition-colors bg-red-100 text-red-600 hover:bg-red-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Name
                    </label>
                    <p className="text-gray-800">{selectedContact.name}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Email
                      </label>
                      <div className="flex items-center space-x-2">
                        <Mail size={16} className="text-gray-400" />
                        <a
                          href={`mailto:${selectedContact.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {selectedContact.email}
                        </a>
                      </div>
                    </div>
                    {selectedContact.phone && (
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Phone
                        </label>
                        <div className="flex items-center space-x-2">
                          <Phone size={16} className="text-gray-400" />
                          <a
                            href={`tel:${selectedContact.phone}`}
                            className="text-blue-600 hover:underline"
                          >
                            {selectedContact.phone}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Subject
                    </label>
                    <p className="text-gray-800 font-medium">
                      {selectedContact.subject}
                    </p>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <label className="text-sm font-medium text-gray-600 mb-2 block">
                    Message
                  </label>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-800 whitespace-pre-wrap">
                      {selectedContact.message}
                    </p>
                  </div>
                </div>
                <div className="border-t pt-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <label className="font-medium">Created</label>
                    <p>
                      {new Date(selectedContact.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <label className="font-medium">Last Updated</label>
                    <p>
                      {new Date(selectedContact.updatedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="p-12 text-center">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Select a query to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactManager;
