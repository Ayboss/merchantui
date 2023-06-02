import tw from 'tailwind-styled-components';

export const FormGroup = tw.div`
mt-5
`;

export const InputLabel = tw.label`
text-[#333333]
text-[16px]
leading-[17px]
font-medium
`;

export const InputWrapper = tw.div`
h-[56px]
w-full
border-[#e4e4e4]
border-[1px]
rounded
outline-[#6231F4]
flex
justify-between
items-center
px-5
mt-2
`;

export const Input = tw.input`
h-full
w-full
text-[#333333]
text-[16px]
leading-[17px]
font-medium
outline-none
`;

export const InputIcon = tw.img`
w-[24px]
h-[24px]
cursor-pointer
`;
