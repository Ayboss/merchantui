import tw from "tailwind-styled-components";
import { NavLink } from "react-router-dom";

export const DashboardSidebar = tw.div`
h-full
w-[250px]
bg-[#16181D]
text-[#fff]
py-7

`;
export const SidebarHeader = tw.div`
mb-5
px-5
`;

export const SidebarTitle = tw.h1`
text-[15px]
leading-[19px]
font-[medium]
`;
export const SidebarSubtitle = tw.p`
text-[13px]
my-2
pb-3
border-b-[0.5px]
border-[#F9FAFA80]
`;
export const MerchantsBalance = tw.p`
text-[15px]
text-[#EBB746]
font-[bold]
mt-4
`;
export const SidebarNav = tw.nav`
 
`;
export const NavItems = {
  styles: "flex items-center gap-5 text-left h-[49px] hover:bg-[#6231F4] px-5",
  active: "bg-[#6231F4]",
};

export const LinkIcon = tw.img` 
 h-[24px]
 w-[24px]`;

export const DashboardBody = tw.div`
h-screen
w-full
`;
