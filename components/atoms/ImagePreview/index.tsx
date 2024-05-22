// components/atoms/ImagePreview.tsx
import React from 'react';

interface ImagePreviewProps {
  imageUrl: string;
  onClose: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-y-0 right-0 bg-white shadow-lg w-1/3 flex flex-col items-center">
      <div className="relative w-full h-full p-4 flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-300 text-black px-4 py-2 rounded"
        >
          Close
        </button>
        <img src={imageUrl} alt="Preview" className="max-w-full max-h-full mt-8" />
      </div>
    </div>
  );
};

export default ImagePreview;
