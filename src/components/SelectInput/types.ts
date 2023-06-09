import React from 'react';
export interface SelectInputProps {
  label: string;
  defaultOption?: string;
  options?: {
    title: string;
  }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
