import React from 'react';

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <small><span style={{ color: 'red' }}>{children}</span></small>;
};

export default ErrorMessage;
