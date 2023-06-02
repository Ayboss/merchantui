import React from 'react';
import { FormGroup, Checkbox, InputLabel } from './styles';

export const CheckboxInput = () => {
  return (
    <FormGroup>
      <Checkbox type='checkbox' />
      <InputLabel>
        By Continuing, you agree to <span className='text-[#6231F4] cursor-pointer'>On.Us</span>{' '}
        Terms & Conditions
      </InputLabel>
    </FormGroup>
  );
};

export default CheckboxInput;
