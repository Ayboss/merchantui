import tw from 'tailwind-styled-components';

export const Container = tw.div`
  grid
  grid-cols-2
  md:grid-cols-4
  gap-5
`;

export const Amount = tw.h3`
    font-semi-bold
    text-[#28313A]
    text-[18px]
`;

export const Title = tw.p`
    text-[#16181D]
    font-medium
    text-[14px]
`;

export const Wrapper = tw.div`
`;

export const WrapperRelative = tw.div`
relative
`;

export const WrapperOverlayLeft = tw.div`
absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rotate-90
`;

export const WrapperOverlayBottom = tw.div`
absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center
`;
