import React from 'react';
import { DashboardSideNav } from '../../components';
import { DashboardLayoutContainer } from './styles';
import { TopBar } from './TopBar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <DashboardLayoutContainer className='flex-col bg-[#FAFAFB]'>
      <TopBar />
      <div className='w-full h-full flex items-start gap-10'>
        <DashboardSideNav />
        <div className='flex flex-col py-[20px]'>{children}</div>
      </div>
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
