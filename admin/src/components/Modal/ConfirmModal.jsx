import React, { useState } from "react";
import { X } from "lucide-react";

const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm(); // wait for delete API
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs bg-opacity-40 flex items-center justify-center z-52">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 relative">
        {/* Close button */}
        <button
          onClick={onCancel}
          disabled={loading}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 disabled:opacity-50"
        >
          <X size={20} />
        </button>

        {/* Title & message */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>

        {/* Actions */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            disabled={loading}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Confirm"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
