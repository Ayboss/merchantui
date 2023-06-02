import React, { forwardRef, useState } from 'react';
import PasswordIcon from '../../assets/icons/eye-slash.svg';
import { FormGroup, InputLabel, InputWrapper, Input, InputIcon } from './styles';
import { PasswrodInputProps } from './types';

export const PasswordInput: React.FC<PasswrodInputProps> = forwardRef((props, ref) => {
  const { label, placeholder, className, ...rest } = props;
  const [passType, setPassType] = useState<string>('password');

  const passToggle = () => {
    setPassType(passType === 'password' ? 'text' : 'password');
  };

  return (
    <FormGroup className={className}>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        {/* @ts-ignore no overload matches for the ref */}
        <Input type={passType} placeholder={placeholder} ref={ref} {...rest} />
        <InputIcon src={PasswordIcon} onClick={passToggle} />
      </InputWrapper>
    </FormGroup>
  );
});

export default PasswordInput;
