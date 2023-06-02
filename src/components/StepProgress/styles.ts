import tw from 'tailwind-styled-components';

export const StepProgressContainer = tw.div`
w-full
flex
gap-[20px]
justify-between
items-center
my-10
`;
export const StepProgressItem = tw.div`
flex
gap-2
items-center
`;

export const StepNumber = tw.div`
text-[#6231F480]
text-[13px]
font-medium
`;

export const StepTitle = tw.p`
text-[#00000080]
text-[13px]
font-medium
`;

export const StepLine = tw.div`
w-full
h-[0px]
border-[1px]
border-[#ADAEB4]
border-dashed
`;
