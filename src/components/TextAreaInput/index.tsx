import React from 'react';
import { FormGroup, InputLabel, TextArea } from './styles';
import { TextAreaInputProps } from './type';

export const TextAreaInput: React.FC<TextAreaInputProps> = ({ label, name, placeholder }) => {
  return (
    <FormGroup>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <TextArea name={name} placeholder={placeholder} />
    </FormGroup>
  );
};

export default TextAreaInput;
