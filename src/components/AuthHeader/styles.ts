import tw from 'tailwind-styled-components';

export const AuthHeaderContainer = tw.div`
w-full
h-[104px]
bg-[#FFFFFF]
flex 
justify-between
items-center
lg:px-[100px]
lg:py-[36px]
p-5
shadow-[0px_4px_25px_rgba(218, 218, 218, 0.1)]
`;

export const Brand = tw.div`
color: #FFFFFF
`;

export const AuthLink = tw.button`
lg:h-[56px]
lg:w-[185px]
h-[40px]
w-[98px]
bg-[#6231F4]
text-[#fff]
text-[16px]
leading-[20px]
font-semibold
rounded-sm
`;
