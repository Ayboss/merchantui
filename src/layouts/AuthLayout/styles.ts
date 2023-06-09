import tw from 'tailwind-styled-components';

export const AuthLayoutContainer = tw.main`
h-screen
flex
flex-col
justify-between
flex-nowrap
px-5
lg:px-0
fade-in
`;
export const AuthBody = tw.div`
h-full
w-full
bg-[#F9FAFA]
 lg:px-[100px]
 lg:flex
 lg:justify-between
 block
`;
export const AuthHero = tw.div`
hidden
max-w-[50%]
pt-[130px]
mb-[20px]
lg:flex
flex-col
justify-center
`;
export const AuthLine = tw.div`
w-[150px]
border-[1px]
border-[#FEB435D4]
`;

export const Title = tw.h1`
text-[50px]
font-semibold
text-[#180748]
leading-[50px]
mt-[30px]
text-left
`;

export const Subtitle = tw.p`
text-[18px]
font-normal
leading-[29px]
text-[#000]
mt-[16px]
text-left
`;
