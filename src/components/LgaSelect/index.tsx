import React from 'react';
import { CitySelect } from 'react-country-state-city';
import { FormGroup, InputLabel } from './styles';
import { LgaSelectProps } from './types';
import 'react-country-state-city/dist/react-country-state-city.css';

export const LgaSelect: React.FC<LgaSelectProps> = ({ label, value, onChange, country, state }) => {
  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      <CitySelect value={value} onChange={onChange} countryid={country} stateid={state} />
    </FormGroup>
  );
};

export default LgaSelect;
