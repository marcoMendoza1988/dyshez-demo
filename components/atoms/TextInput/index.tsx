import React from 'react';

interface TextInputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  icon: React.ReactNode;
  iconEnd?: React.ReactNode;
  onIconEndHandler?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ 
    id, 
    name, 
    type, 
    value,
    onIconEndHandler, 
    onChange, 
    onBlur, 
    placeholder, 
    icon,
    iconEnd 
}) => {

    return (
        <div className='relative'>
            <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                <div className="flex items-center justify-center rounded-tl rounded-bl z-10 text-gray-600 text-lg h-full w-full">
                    {icon}
                </div>
            </div>
            <input 
                style={{
                    border: '2px solid rgba(231, 231, 233, 0.85)',
                    borderRadius: '108px'
                }}
                className="rounded-2xl text-[14px] relative w-full placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-[14px] pr-[20px] pl-[35px]" 
                id={id} 
                name={name} 
                type={type} 
                placeholder={placeholder}
                value={value} 
                onChange={onChange} 
                onBlur={onBlur} 
            />
            {iconEnd && onIconEndHandler && (
                <div className="absolute flex border border-transparent right-0 top-0 h-full w-10">
                <button 
                    type='button' 
                    onClick={onIconEndHandler} 
                    className="flex items-center justify-center rounded-tl rounded-bl z-10 text-gray-600 text-lg h-full w-full"
                >
                    {iconEnd}
                </button>
                </div>
            )}
        </div>
    );
};

export default TextInput;
