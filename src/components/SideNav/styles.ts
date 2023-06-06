import tw from 'tailwind-styled-components';

export const DashboardSidebar = tw.div`
h-full
w-[250px]
bg-[#16181D]
text-[#fff]
pt-[29px]

`;
export const SidebarHeader = tw.div`
mb-5
px-5
`;

export const SidebarTitle = tw.h1`
text-[15px]
leading-[19px]
font-medium
`;
export const SidebarSubtitle = tw.p`
text-[13px]
py-[8px]
border-b-[0.5px]
border-[#F9FAFA80]
font-normal
`;
export const MerchantsBalance = tw.p`
text-[15px]
text-[#EBB746]
font-semi-bold
mt-4
`;
export const SidebarNav = tw.nav`
`;

export const NavItems = {
  styles:
    'flex items-center gap-5 text-left h-[49px] hover:bg-[#6231F4] border-b-[1px] border-b-transparent px-5 ',
  active:
    'bg-[#6231F4] flex items-center gap-5 text-left h-[49px] hover:bg-[#6231F4] border-b-[1px] border-b-white px-5'
};

export const LinkIcon = tw.img` 
 h-[24px]
 w-[24px]`;
