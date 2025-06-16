import React from 'react';

const ImageModal = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
         onClick={onClose}>
      <div className="relative max-w-4xl w-full mx-4" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>
        <div className="bg-white rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto object-contain max-h-[80vh]"
          />
          <div className="p-4 bg-white">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 