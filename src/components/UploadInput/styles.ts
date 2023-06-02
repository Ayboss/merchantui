import tw from 'tailwind-styled-components';

export const FormGroup = tw.div`
flex 
items-center 
justify-center 
w-full
my-4
`;

export const InputLabel = tw.label`
flex 
flex-col 
items-center 
justify-center 
w-full 
border-[1px]
border-[#BAB9B9CC]
border-dashed 
rounded-lg 
cursor-pointer 
bg-[#f8f5fe80]

`;

export const InputContent = tw.div`
flex 
flex-col 
items-center 
justify-center 
py-8
`;

export const LabelTitle = tw.p`
mb-2
text-[#717171]
text-[14px]
`;

export const LabelSubtitle = tw.p`
text-[#000000]
 text-[14px]
 `;

export const UploadField = tw.input`
hidden
`;
