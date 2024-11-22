// components/CertificationModal.js
import React, { useState } from "react";
import Image from "next/image"; // Import Image from Next.js

const CertificationModal = ({ isOpen, onClose, certifications }) => {
  const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image

  if (!isOpen) return null;

  const handleTitleClick = (imagePath) => {
    setSelectedImage(imagePath); // Set the selected image path when a title is clicked
  };

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
            <div 
              key={index} 
              onClick={() => handleTitleClick(certification.imagePath)} // Handle click to set image
              className="block p-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700 transition-colors w-full text-center cursor-pointer"
            >
              <h3 className="text-lg font-semibold">{certification.title}</h3>
            </div>
          ))}
        </div>

        {/* Display the selected image only when an image is selected */}
        {selectedImage && (
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-white mb-2">Certificado:</h4>
            <Image 
              src={selectedImage} 
              alt="Certificado" 
              width={500} 
              height={150} 
              className="rounded" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationModal;