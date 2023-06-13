import tw from 'tailwind-styled-components';
import { TabItemType } from './types';

export const Wrapper = tw.div`
`;

export const DateWrapper = tw.div`
w-[380px]
`;

export const TopWrapper = tw.div`
grid grid-cols-2 gap-4 mb-8
`;

export const FlexWrapper = tw.div`
flex
 items-center mb-4
`;

export const Box = tw.div`
w-[20px]
h-[20px]
mr-3
border-radius-[2px];
`;

export const WrapperGrid = tw.div`
col-span-2
`;

export const WrapperRelative = tw.div`
relative
`;

export const WrapperOverlay = tw.div`
absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center
`;

export const Tab = tw.div`
text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700
`;

export const TabItem = tw.div<TabItemType>`
inline-block py-4 border-b-2 mr-[32px] border-transparent rounded-t-lg hover:text-gray-600 cursor-pointer
${(p) => p.$current === p.$selected && 'border-b-[#6231F4] font-semi-bold text-[#252122]'}
`;

export const TabWrapper = tw.div`
flex flex-wrap -mb-px
`;

export const Percentage = tw.h3`
    font-semi-bold
    text-[#28313A]
    text-[24px]
`;

export const BoxPercentage = tw.h3`
    font-semi-bold
    text-[#28313A]
    text-[20px]
`;

export const PercentageTitle = tw.p`
    text-[#16181D]
    text-[22px]
    leading-[22px]
`;

export const BoxPercentageTitle = tw.p`
    text-[#16181D]
    text-[14px]
    leading-[22px]
    -mb-[6px]
`;

export const Title = tw.h3`
    font-semi-bold
    text-[#28313A]
    text-[24px]
`;

export const p = tw.p`
    text-[#16181D]
    font-medium
    text-[14px]
`;
