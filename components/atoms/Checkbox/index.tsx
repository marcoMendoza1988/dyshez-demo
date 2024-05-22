import React from 'react';

interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange }) => {
  return (
    <label className="flex flex-row items-center space-x-2 cursor-pointer">
      <input className="peer hidden" id={id} name={name} type="checkbox" checked={checked} onChange={onChange} />
      <div className="relative h-5 w-5 border-2 border-blue-gray-200 rounded-md transition-all peer-checked:border-pink-500 peer-checked:bg-pink-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 m-auto h-3.5 w-3.5 text-white transition-opacity peer-checked:opacity-100"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </label>
  );
};

export default Checkbox;
