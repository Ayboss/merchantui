import tw from "tailwind-styled-components";
import activeCheckIcon from "../../assets/icons/checked-icon.svg";

export const SelectButtonContainer = tw.button`
w-full
h-[110px]
p-[16px]
rounded-[10px]
shadow-md
flex
items-center
justify-between
gap-[20px]
border-[1.5px]
border-transparent
`;

export const FlexContainer = tw.div`
flex
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
export const CheckboxIcon = tw.div`
w-[18px]
h-[18px]
border-[1px] border-[#D9D8D8]
rounded-full

`;

export const checkboxActive = "bg-[url('../../assets/icons/checked-icon.svg')]";
