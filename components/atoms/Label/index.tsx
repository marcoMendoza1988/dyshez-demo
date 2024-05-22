import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return <label className='text-[13px]' htmlFor={htmlFor}>{children}</label>;
};

export default Label;
