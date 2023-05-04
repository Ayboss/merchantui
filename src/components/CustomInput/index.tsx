import React, { useState, forwardRef } from "react";
import { FormGroup, InputLabel, Input } from "./styles";
import { CustomInputProps } from "./types";

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { label, name, type, placeholder, register, ...rest } = props;
  const [activeInput, setActiveInput] = useState<Boolean>(false);

  if (!register) {
    return (
      <FormGroup>
        <InputLabel>{label}</InputLabel>
        <Input name={name} type={type} placeholder={placeholder} {...rest} />
      </FormGroup>
    );
  }

  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
    </FormGroup>
  );
};

export default CustomInput;
