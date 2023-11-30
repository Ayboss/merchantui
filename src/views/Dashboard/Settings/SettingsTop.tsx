import React, { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ForwardIcon from '../../../assets/icons/forwardArrow-icon.svg';
import { PRIVATE_PATHS } from '../../../routes/paths';

const SettingsTop: React.FC<{}> = () => {
  const location = useLocation();
  const dynamicTitle = useMemo(() => {
    const pathname = location.pathname;

    switch (pathname) {
      case '/settings/personal-info':
        return 'Personal Info';
      case '/settings/business-info':
        return 'Business Info';
      case '/settings/settlement-info':
        return 'Settlement Info';
      case '/settings/payment-method':
        return 'Payment Options';
      case '/settings/account-security':
        return 'Account Security';
      case '/settings/manage-users':
        return 'Manage Users';
      case '/settings/api-keys':
        return 'API Keys';
      case '/settings/webhooks':
        return 'Webhooks';
      default:
        return 'Settings';
    }
  }, [location.pathname]);

  return (
    <div className='flex items-center mb-8'>
      <p className='text-[#444444] text-[14px] font-normal mr-2'>
        <NavLink to={PRIVATE_PATHS.SETTINGS}>Settings</NavLink>
      </p>
      <img src={ForwardIcon} alt='' className='h-[24px] w-[24px] mr-2' />
      <p className='text-[#A1A1AA] text-[14px] font-medium'>{dynamicTitle}</p>
    </div>
  );
};

export default SettingsTop;
