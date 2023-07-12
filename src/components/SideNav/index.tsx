import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavLinks } from '../../constants';
import { useMerchantStatsQuery } from '../../services/hooks';
import { formatNumber } from '../../utils';
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
  const { pathname } = useLocation();
  const { data } = useMerchantStatsQuery();

  return (
    <DashboardSidebar>
      <SidebarHeader>
        <SidebarTitle>Organisation Name</SidebarTitle>
        <SidebarSubtitle>ID : #92836312</SidebarSubtitle>
        <MerchantsBalance>₦ {formatNumber(data?.data?.walletsBalance)}</MerchantsBalance>
      </SidebarHeader>
      <SidebarNav>
        {NavLinks.map((link, id) => (
          <NavLink
            key={id}
            className={({ isActive }) =>
              isActive || pathname.split('/')[1] === link.title.toLowerCase()
                ? NavItems.active
                : NavItems.styles
            }
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
