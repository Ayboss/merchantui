import React from 'react';
import { DashboardLayoutContainer } from './styles';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return <DashboardLayoutContainer>{children}</DashboardLayoutContainer>;
};

export default DashboardLayout;
