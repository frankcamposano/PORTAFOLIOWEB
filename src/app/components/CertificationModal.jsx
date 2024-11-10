// components/CertificationModal.js
import React from "react";

const CertificationModal = ({ isOpen, onClose, certifications }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Certificaciones</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            &times; 
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          {certifications.map((certification, index) => (
            <a
              key={index}
              href={certification.filePath} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block p-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700 transition-colors w-full text-center"
            >
              {certification.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;