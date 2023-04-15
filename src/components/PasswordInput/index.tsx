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
  const { label, name, placeholder } = props;
  const [activeInput, setActiveInput] = useState<boolean>(false);
  const [passType, setPassType] = useState<string>("password");

  const passToggle = () => {
    setPassType(passType === "password" ? "text" : "password");
  };

  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        <Input name={name} type={passType} placeholder={placeholder} />
        <InputIcon src={PasswordIcon} onClick={passToggle} />
      </InputWrapper>
    </FormGroup>
  );
};

export default PasswordInput;
