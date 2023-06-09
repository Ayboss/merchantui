import React from 'react';
import { CountrySelect } from 'react-country-state-city';
import { FormGroup, InputLabel } from './styles';
import { CountrySelectProps } from './type';
import 'react-country-state-city/dist/react-country-state-city.css';

export const CountrySelectInput: React.FC<CountrySelectProps> = ({
  label,
  value,
  onChange,
  placeholder
}) => {
  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      <CountrySelect
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='border-0'
      />
    </FormGroup>
  );
};

export default CountrySelectInput;
