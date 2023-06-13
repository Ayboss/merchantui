import React, { forwardRef } from 'react';
import { FormGroup, InputLabel, Input, Container, SocialIcons } from './styles';
import { URLInputProps } from './type';

export const URLInput: React.FC<URLInputProps> = forwardRef((props, ref) => {
  const { label, name, placeholder, icon, ...rest } = props;

  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      <Container>
        <SocialIcons src={icon} alt='social icon' />
        {/* @ts-ignore no overload matches for the ref */}
        <Input name={name} type='url' placeholder={placeholder} ref={ref} {...rest} />
      </Container>
    </FormGroup>
  );
});

export default URLInput;
