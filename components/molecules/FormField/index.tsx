import React from 'react';
import TextInput from '@/components/atoms/TextInput';
import Label from '@/components/atoms/Label';
import ErrorMessage from '@/components/atoms/ErrorMessage';

interface FormFieldProps {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  error: string | undefined;
  touched: boolean | undefined;
  icon: React.ReactNode;
  iconEnd?: React.ReactNode;
  onIconEndHandler?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  type,
  label,
  value,
  error,
  touched,
  icon,
  iconEnd,
  onIconEndHandler,
  onChange,
  onBlur,
}) => {
  return (
    <div>
      <TextInput 
        icon={icon} 
        iconEnd={iconEnd} 
        placeholder={label} 
        id={id} 
        name={name} 
        type={type} 
        value={value} 
        onIconEndHandler={onIconEndHandler} 
        onChange={onChange} 
        onBlur={onBlur} 
      />
      {touched && error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
};

export default FormField;
