import React, { ChangeEvent } from 'react';

interface FileInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
  return (
    <input
      type="file"
      multiple
      onChange={onChange}
      className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
    />
  );
};

export default FileInput;