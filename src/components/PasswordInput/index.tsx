import React, { useState } from "react";
import {
  FormGroup,
  InputLabel,
  InputWrapper,
  Input,
  InputIcon,
} from "./styles";
import { PasswrodInputProps } from "./types";
import PasswordIcon from "../../assets/icons/eye-slash.svg";

const PasswordInput: React.FC<PasswrodInputProps> = (props) => {
  const { label, name, placeholder, ref } = props;
  const [activeInput, setActiveInput] = useState<boolean>(false);
  return (
    <FormGroup>
      <InputLabel activeInput={activeInput}>{label}</InputLabel>
      <InputWrapper>
        <Input
          name={name}
          type="password"
          placeholder={placeholder}
          ref={ref}
          onBlur={() => setActiveInput(true)}
        />
        <InputIcon src={PasswordIcon} />
      </InputWrapper>
    </FormGroup>
  );
};

export default PasswordInput;
