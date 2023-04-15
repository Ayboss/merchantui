import React, { Children } from "react";
import { DashboardLayoutContainer } from "./styles";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return <DashboardLayoutContainer>{children}</DashboardLayoutContainer>;
};

export default DashboardLayout;
