import tw from 'tailwind-styled-components';

export const Container = tw.div`
  grid
  grid-cols-2
  md:grid-cols-4
  gap-4
  mb-5
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

export const Wrapper = tw.div`
`;
