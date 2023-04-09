import React, { useState } from "react";
import { FormGroup, InputLabel, Input } from "./styles";
import { CustomInputProps } from "./types";

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { label, name, ref, type, placeholder } = props;
  const [activeInput, setActiveInput] = useState<Boolean>(false);
  return (
    <FormGroup>
      <InputLabel activeInput={activeInput}>{label}</InputLabel>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        onBlur={() => setActiveInput(true)}
      />
    </FormGroup>
  );
};

export default CustomInput;
