import React from "react";
import tw from "tailwind-styled-components";

interface IProps {
  activeInput: any;
}

export const FormGroup = tw.div`

`;

export const InputLabel = tw.label<IProps>`
text-[${(props) => (props.activeInput ? "#333333" : "#6231F4")}]
text-[16px]
leading-[17px]
font-medium
`;

export const Input = tw.input`
h-[56px]
w-full
border-[#e4e4e4]
border-[1px]
rounded
text-[#333333]
text-[16px]
leading-[17px]
font-medium
p-5
mt-2
outline-[#6231F4]
`;
