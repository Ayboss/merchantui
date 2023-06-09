import React from 'react';
import { FormGroup, InputLabel, Select } from './styles';
import { SelectInputProps } from './types';
export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  defaultOption,
  options,
  onChange,
  value
}) => {
  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange}>
        <option>{defaultOption}</option>
        {options?.map((option, id) => (
          <option key={id} value={option.title}>
            {option.title}
          </option>
        ))}
      </Select>
    </FormGroup>
  );
};

export default SelectInput;
