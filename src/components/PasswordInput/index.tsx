import React, { forwardRef, useState } from "react";
import {
  FormGroup,
  InputLabel,
  InputWrapper,
  Input,
  InputIcon,
} from "./styles";
import { PasswrodInputProps } from "./types";
import PasswordIcon from "../../assets/icons/eye-slash.svg";

const PasswordInput: React.FC<PasswrodInputProps> = forwardRef((props, ref) => {
  const { label, placeholder, ...rest } = props;
  const [passType, setPassType] = useState<string>("password");

  const passToggle = () => {
    setPassType(passType === "password" ? "text" : "password");
  };

  return (
    <FormGroup>
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
