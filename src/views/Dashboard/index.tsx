import React from "react";
import {
  DashboardSidebar,
  DashboardBody,
  SidebarHeader,
  SidebarTitle,
  SidebarSubtitle,
  MerchantsBalance,
  SidebarNav,
  NavItems,
  LinkIcon,
} from "./styles";
import DashboardLayout from "../../layouts/DashboardLayout";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../../constants";
import DashboardTopbar from "../../components/DashboardTopbar";
import { DashboardRoutes } from "../../routes";

const MerchantsDashboard = () => {
  return (
    <DashboardLayout>
      <DashboardSidebar>
        <SidebarHeader>
          <SidebarTitle>Merchants Name</SidebarTitle>
          <SidebarSubtitle>ID : #92836312</SidebarSubtitle>
          <MerchantsBalance>₦ 00.000</MerchantsBalance>
        </SidebarHeader>
        <SidebarNav>
          {NavLinks.map((link) => (
            <NavLink className={`${NavItems.styles} active`} to={link.url}>
              <LinkIcon src={link.icon} />
              {link.title}
            </NavLink>
          ))}
        </SidebarNav>
      </DashboardSidebar>
      <DashboardBody>
        <DashboardTopbar />
        <DashboardRoutes />
      </DashboardBody>
    </DashboardLayout>
  );
};

export default MerchantsDashboard;
