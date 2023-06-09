import React from 'react';
export interface TextAreaInputProps {
  label: string;
  name?: string;
  value?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
