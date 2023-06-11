import React from 'react';
import { StateSelect } from 'react-country-state-city';
import { FormGroup, InputLabel } from './styles';
import { StateSelectProps } from './types';
import 'react-country-state-city/dist/react-country-state-city.css';

export const StateSelectInput: React.FC<StateSelectProps> = ({
  label,
  value,
  onChange,
  country
}) => {
  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      <StateSelect value={value} onChange={onChange} countryid={country} />
    </FormGroup>
  );
};

export default StateSelectInput;
