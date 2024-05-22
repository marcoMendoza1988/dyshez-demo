import React from 'react';

interface ImageThumbnailProps {
  imageUrl: string;
  onClick: () => void;
}

const ImageThumbnail: React.FC<ImageThumbnailProps> = ({ imageUrl, onClick }) => {
  
  return (
    <img
      src={imageUrl}
      alt="Thumbnail"
      onClick={onClick}
      className="cursor-pointer w-32 h-32 object-cover rounded"
    />
  );
};

export default ImageThumbnail;
