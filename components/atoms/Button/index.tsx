import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
