import React from 'react';
import { NavLink } from 'react-router-dom';
import { TabLinksType } from './types';
import { TabsNavigationList, TabsNavigationItem, TabsNavigation } from './styles';

export const Tabs: React.FC<TabLinksType> = ({ links, current }) => {
  return (
    <TabsNavigation>
      <TabsNavigationList>
        {links.map((link, id) => (
          <TabsNavigationItem key={id}>
            <NavLink
              className={`${
                link.url === current && 'text-[#000000] border-b-2 border-[#6231F4] font-semi-bold'
              } inline-block p-4 hover:text-gray-600hover:font-semi-bold text-[16px] hover:text-[#000000] transition duration-500 ease-in-out`}
              to={link.url}
            >
              {link.label}
            </NavLink>
          </TabsNavigationItem>
        ))}
      </TabsNavigationList>
    </TabsNavigation>
  );
};
