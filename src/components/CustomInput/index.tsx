import React, { forwardRef } from 'react';
import { FormGroup, InputLabel, Input } from './styles';
import { CustomInputProps } from './types';

export const CustomInput: React.FC<CustomInputProps> = forwardRef((props, ref) => {
  const { label, type, placeholder, className, readOnly, ...rest } = props;

  return (
    <FormGroup className={className}>
      <InputLabel>{label}</InputLabel>
      {/* @ts-ignore no overload matches for the ref */}
      <Input type={type} placeholder={placeholder} ref={ref} {...rest} readOnly={readOnly} />
    </FormGroup>
  );
});

export default CustomInput;
