import React from 'react';

export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type?: string;
  placeholder: string;
  className?: string;
  value?: string;
  errorText?: any;
  InputClassName?: string;
}
