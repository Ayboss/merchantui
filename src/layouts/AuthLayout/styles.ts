import tw from 'tailwind-styled-components';

export const AuthLayoutContainer = tw.main`
h-screen
flex
flex-col
justify-between
flex-nowrap
`;
export const AuthBody = tw.div`
h-full
w-full
bg-[#F9FAFA]
 px-[100px]
 flex
 justify-between
 
`;
export const AuthHero = tw.div`
max-w-[50%]
pt-[130px]
mb-[20px]
flex
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
