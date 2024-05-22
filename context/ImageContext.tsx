'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface ImageContextType {
  images: string[];
  refreshImages: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = async () => {
    const { data, error } = await supabase.storage.from('pictures').list('uploads');
    if (error) {
      console.error('Error fetching images:', error.message);
      return;
    }

    const imageUrls = data.map(file => {
      const { publicUrl } = supabase.storage.from('pictures').getPublicUrl(`uploads/${file.name}`).data;
      return publicUrl;
    });

    setImages(imageUrls);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <ImageContext.Provider value={{ images, refreshImages: fetchImages }}>
      {children}
    </ImageContext.Provider>
  );
};
