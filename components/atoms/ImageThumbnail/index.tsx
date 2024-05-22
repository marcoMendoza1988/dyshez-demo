import Image from 'next/image';
import React from 'react';

interface ImageThumbnailProps {
  imageUrl: string;
  onClick: () => void;
}

const ImageThumbnail: React.FC<ImageThumbnailProps> = ({ imageUrl, onClick }) => {
  
  return (
    <Image
      width={100}
      height={100}
      src={imageUrl}
      alt="Thumbnail"
      onClick={onClick}
      className="cursor-pointer w-32 h-32 object-cover rounded"
    />
  );
};

export default ImageThumbnail;
