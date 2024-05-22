'use client'
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import ImageThumbnail from '@/components/atoms/ImageThumbnail';
import ImagePreview from '@/components/atoms/ImagePreview';
import { toast } from 'react-toastify';

interface ImageFile {
  name: string;
  url: string;
}

type SetIsUploadedProps = {
  setIsUploaded: any;
  isUploaded: boolean;
}

const ImageGallery: React.FC<SetIsUploadedProps> = ({setIsUploaded, isUploaded}) => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetchImages();
  }, []);
  useEffect(() => {
    if(isUploaded){
      fetchImages();
      setIsUploaded(false)
    }

  }, [isUploaded]);

  const fetchImages = async () => {
    const { data, error } = await supabase.storage.from('pictures').list('uploads', {
      limit: 100,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' },
    });

    if (error) {
      console.error('Error fetching images:', error.message);
    } else {
      
      const imageFiles = data.map((file: any) => {
        const { data: { publicUrl } } = supabase.storage.from('pictures').getPublicUrl(`uploads/${file.name}`);
          return ({
          name: file.name,
          url: publicUrl,
        })
      });

      setImages(imageFiles);
    }
  };

  console.log(images)

  const handleDelete = async (imageName: string) => {
    const { error } = await supabase.storage.from('pictures').remove([`uploads/${imageName}`]);

    if (error) {
      console.error('Error deleting image:', error.message);
      toast.error('Error deleting image');
    } else {
      toast.success('Image deleted successfully');
      fetchImages(); 
    }
  };

  return (
    <div className="flex">
      <div className="grid grid-cols-4 gap-4 flex-grow">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <ImageThumbnail
              imageUrl={image.url}
              onClick={() => setSelectedImage(image.url)}
            />
            <button
              className="w-[fit-content] h-[fit-content] m-[auto] p-[8px] absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100"
              onClick={() => handleDelete(image.name)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M8.69238 8.46153C9.24467 8.46153 9.69238 8.90925 9.69238 9.46153V15.6154C9.69238 16.1677 9.24467 16.6154 8.69238 16.6154C8.1401 16.6154 7.69238 16.1677 7.69238 15.6154V9.46153C7.69238 8.90925 8.1401 8.46153 8.69238 8.46153Z" fill="#FFFFFF"/>
                <path d="M14.3076 9.46153C14.3076 8.90925 13.8599 8.46153 13.3076 8.46153C12.7553 8.46153 12.3076 8.90925 12.3076 9.46153V15.6154C12.3076 16.1677 12.7553 16.6154 13.3076 16.6154C13.8599 16.6154 14.3076 16.1677 14.3076 15.6154V9.46153Z" fill="#FFFFFF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.69227 0.769226C8.01903 0.769226 7.37336 1.03667 6.89731 1.51272C6.42125 1.98878 6.15381 2.63445 6.15381 3.30769V3.84615H1C0.447715 3.84615 0 4.29386 0 4.84615C0 5.39843 0.447715 5.84615 1 5.84615H3.07715V18.6923C3.07715 19.3655 3.34459 20.0112 3.82065 20.4873C4.2967 20.9633 4.94237 21.2308 5.61561 21.2308H16.3848C17.0581 21.2308 17.7038 20.9633 18.1798 20.4873C18.6559 20.0112 18.9233 19.3655 18.9233 18.6923V5.84615H21C21.5523 5.84615 22 5.39843 22 4.84615C22 4.29386 21.5523 3.84615 21 3.84615H15.8461V3.30769C15.8461 2.63445 15.5787 1.98878 15.1026 1.51272C14.6266 1.03667 13.9809 0.769226 13.3077 0.769226H8.69227ZM13.8461 3.84615V3.30769C13.8461 3.16488 13.7894 3.02792 13.6884 2.92694C13.5874 2.82596 13.4505 2.76923 13.3077 2.76923H8.69227C8.54946 2.76923 8.4125 2.82596 8.31152 2.92694C8.21054 3.02792 8.15381 3.16488 8.15381 3.30769V3.84615H13.8461ZM5.07715 5.84615V18.6923C5.07715 18.8351 5.13388 18.9721 5.23486 19.0731C5.33584 19.174 5.4728 19.2308 5.61561 19.2308H16.3848C16.5276 19.2308 16.6646 19.174 16.7656 19.0731C16.8666 18.9721 16.9233 18.8351 16.9233 18.6923V5.84615H5.07715Z" fill="#FFFFFF"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="ml-4">
        {selectedImage && <ImagePreview imageUrl={selectedImage} onClose={() => setSelectedImage(null)}/>}
      </div>
    </div>
  );
};

export default ImageGallery;
