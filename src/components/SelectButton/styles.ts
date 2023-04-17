import tw from "tailwind-styled-components";

export const SelectButtonContainer = tw.button`
w-full
h-[110px]
p-[16px]
rounded-[10px]
shadow-md
flex
items-center
justify-start
gap-[20px]
`;

export const activeStyle = "border-[1.5px] border-[#6231F4] transition";

export const SelectButtonIcon = tw.img`
h-[47px]
w-[47px]
`;
export const ContentWrapper = tw.div``;
export const Title = tw.h2`
text-[16px]
text-[#222222]
text-left
leading-[20px]
tracking-[-0.02em]
font-medium

`;
export const Subtitle = tw.p`
text-[14px]
text-[#868E96]
text-left
leading-[17px]
mt-[8px]
`;
export const CheckboxIcon = tw.div``;
