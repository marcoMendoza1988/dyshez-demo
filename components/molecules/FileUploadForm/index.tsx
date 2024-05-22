'use client'
import React, { useState, ChangeEvent, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

type SetIsUploadedProps = {
  setIsUploaded: any;
}

const FileUploadForm: React.FC<SetIsUploadedProps> = ({setIsUploaded}) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  useEffect(() => {
    if(files){
        handleUpload();
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  },[files]);

  const handleUpload = async () => {
    if (!files) return;

    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const { data, error } = await supabase.storage
          .from('pictures') 
          .upload(`uploads/${file.name}`, file, {
            cacheControl: '3600',
            upsert: false
          });
  
        if (error) {
          console.error('Error uploading file:', error.message);
        } else {
          setIsUploaded(true)
          console.log('File uploaded successfully:', data);
        }
      }
    } catch (error) {
      console.error('Error uploading file:', JSON.stringify(error));
    }

    setFiles(null);
    setUploading(false);
  };

  return (
    <div className="space-y-4 w-[fit-content]">
      <label htmlFor="file-upload" className="relative cursor-pointer">
        <div className="w-32 h-32 bg-[#fff] border-2 rounded-md flex justify-center items-center">{uploading ? '...' : '+'}</div>
      </label>
      <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} multiple />
    </div>
  );
};

export default FileUploadForm;
