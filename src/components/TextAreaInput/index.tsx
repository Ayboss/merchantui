import React, { forwardRef } from 'react';
import { FormGroup, InputLabel, TextArea } from './styles';
import { TextAreaInputProps } from './type';

export const TextAreaInput: React.FC<TextAreaInputProps> = forwardRef((props, ref) => {
  const { label, placeholder, value, onChange, ...rest } = props;

  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      {/* @ts-ignore no overload matches for the ref */}
      <TextArea placeholder={placeholder} value={value} onChange={onChange} ref={ref} {...rest} />
    </FormGroup>
  );
});

export default TextAreaInput;
