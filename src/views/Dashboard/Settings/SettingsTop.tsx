import React, { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ForwardIcon from '../../../assets/icons/forwardArrow-icon.svg';
import { PRIVATE_PATHS } from '../../../routes/paths';

const SettingsTop: React.FC = () => {
  const location = useLocation();
  const dynamicTitle = useMemo(() => {
    const pathname = location.pathname;

    switch (pathname) {
      case PRIVATE_PATHS.PERSONAL_INFO:
        return 'Personal Info';
      case PRIVATE_PATHS.BUSINESS_INFO:
        return 'Business Info';
      case PRIVATE_PATHS.SETTLEMENT_INFO:
        return 'Settlement Info';
      case PRIVATE_PATHS.PAYMENT_METHODS:
        return 'Payment Options';
      case PRIVATE_PATHS.ACCOUNT_SECURITY:
        return 'Account Security';
      case PRIVATE_PATHS.MANAGE_USERS:
        return 'Manage Users';
      case PRIVATE_PATHS.API_KEYS:
        return 'API Client Credentials';
      case 'PRIVATE_PATHS.WEB_HOOKS':
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
