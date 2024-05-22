import React from 'react';

interface UploadButtonProps {
  onClick: () => void;
  label: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      {label}
    </button>
  );
};

export default UploadButton;