import tw from 'tailwind-styled-components';

export const TableWrapper = tw.div`
 relative
 overflow-x-auto

 &::webkit-scrollbar{
    h-[8px]
 }

 &::webkit-scrollbar-track{
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3)
 }

`;
