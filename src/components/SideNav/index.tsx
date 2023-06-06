import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinks } from '../../constants';
import {
  DashboardSidebar,
  SidebarHeader,
  SidebarTitle,
  SidebarSubtitle,
  MerchantsBalance,
  SidebarNav,
  NavItems,
  LinkIcon
} from './styles';

export const DashboardSideNav = () => {
  return (
    <DashboardSidebar>
      <SidebarHeader>
        <SidebarTitle>Organisation Name</SidebarTitle>
        <SidebarSubtitle>ID : #92836312</SidebarSubtitle>
        <MerchantsBalance>₦ 00.000</MerchantsBalance>
      </SidebarHeader>
      <SidebarNav>
        {NavLinks.map((link, id) => (
          <NavLink
            key={id}
            className={({ isActive }) => (isActive ? NavItems.active : NavItems.styles)}
            to={link.url}
          >
            <LinkIcon src={link.icon} />
            {link.title}
          </NavLink>
        ))}
      </SidebarNav>
    </DashboardSidebar>
  );
};

export default DashboardSideNav;
