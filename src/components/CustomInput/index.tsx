import React, { useState, forwardRef } from "react";
import { FormGroup, InputLabel, Input } from "./styles";
import { CustomInputProps } from "./types";

const CustomInput: React.FC<CustomInputProps> = forwardRef((props, ref) => {
  const { label, type, placeholder, ...rest } = props;

  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      {/* @ts-ignore no overload matches for the ref */}
      <Input type={type} placeholder={placeholder} ref={ref} {...rest} />
    </FormGroup>
  );
});

export default CustomInput;
