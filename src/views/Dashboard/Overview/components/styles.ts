import tw from 'tailwind-styled-components';

export const Container = tw.div`
  bg-[#FFFFFF]
  rounded-[8px]
  border-[1px solid rgba(221, 224, 226, 0.25)]
  flex
  flex-col
  items-left
  gap-[2px]
  py-[34px]
  px-[34px]
`;

export const Amount = tw.h3`
    font-semi-bold
    text-[#28313A]
    text-[24px]
`;

export const Title = tw.p`
    text-[#16181D]
    font-medium
    text-[14px]
`;
