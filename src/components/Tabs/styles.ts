import tw from 'tailwind-styled-components';
import { TabsNavigationLinkType } from './types';

export const TabsNavigation = tw.div`
 text-center text-gray-500 border-b border-gray-200 mb-12
`;

export const TabsNavigationList = tw.ul`
flex flex-wrap -mb-px
`;

export const TabsNavigationItem = tw.li`
mr-2
`;

export const TabsNavigationLink = tw.a<TabsNavigationLinkType>`
${(p) => p.$current === p.$selected && 'text-[#000000] border-b-2 border-[#000000] font-semibold'}
inline-block p-4 border-b-2 hover:text-gray-600
hover:font-semibold hover:border-[#000000] hover:text-[#000000]
`;
