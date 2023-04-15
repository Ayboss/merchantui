import tw from "tailwind-styled-components";

export const Topbar = tw.div`
flex
justify-between
bg-[#F9FAFA]
h-[87px]
w-full
px-10
py-3
`;

export const WelcomeContainer = tw.div``;

export const CTAContainer = tw.div`
flex
gap-7
items-center
`;

export const WelcomeNote = tw.h2`
text-[24px]
text-[#0C1C24]
font-semibold
leading-[28px]
`;

export const Breadcrumb = tw.div`
flex
items-center
text-[14px]
leading-[20px]
text-[#3A3A3AB2]
mt-1
`;

export const Notification = tw.img``;
export const MerchantsAvatar = tw.div`
h-[48px]
w-[48px]
bg-[#D9D9D9]
rounded-full
`;
export const FlexContainer = tw.div``;
export const NameTag = tw.p`
text-[#696969]
text-[14px]
font-medium
m-0
h-[19px]
`;
export const LogoutButton = tw.button`
bg-transparent
text-[#6231F4]
text-[12px]
font-semibold
h-[16px]
m-0
`;
