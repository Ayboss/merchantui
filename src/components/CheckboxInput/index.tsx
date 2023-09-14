import React from 'react';
import { FormGroup, Checkbox, InputLabel } from './styles';

export const CheckboxInput = () => {
  return (
    <FormGroup>
      <Checkbox type='checkbox' />
      <InputLabel></InputLabel>
    </FormGroup>
  );
};

export default CheckboxInput;
