import React from 'react';
import { DashboardSideNav } from '../../components';
import { DashboardLayoutContainer } from './styles';
import { TopBar } from './TopBar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <DashboardLayoutContainer className='flex-col'>
      <TopBar />
      <div className='w-full h-full flex'>
        <DashboardSideNav />
        {children}
      </div>
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
