import React from 'react';
import { FormGroup, InputLabel, Input, Container, SocialIcons } from './styles';
import { URLInputProps } from './type';

export const URLInput: React.FC<URLInputProps> = ({ label, name, placeholder, icon }) => {
  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      <Container>
        <SocialIcons src={icon} alt='social icon' />
        <Input name={name} placeholder={placeholder} />
      </Container>
    </FormGroup>
  );
};

export default URLInput;
