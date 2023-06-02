import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import bellIcon from '../../assets/icons/bell-icon.svg';
import { getFromLocal } from '../../utils';
import {
  Topbar,
  WelcomeContainer,
  CTAContainer,
  WelcomeNote,
  Breadcrumb,
  Notification,
  MerchantsAvatar,
  FlexContainer,
  NameTag,
  LogoutButton
} from './styles';

export const DashboardTopbar = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(getFromLocal('user') as string);

  const handleLogOut = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Topbar>
      <WelcomeContainer>
        <WelcomeNote>Welcome {currentUser?.firstName} !</WelcomeNote>
        <Breadcrumb>
          <span> Dashboard</span>
          <FontAwesomeIcon
            icon={faGreaterThan}
            className='font-light mx-2 text-[10px] text-[#3A3A3AB2]'
          />
          <span>Business activation</span>
        </Breadcrumb>
      </WelcomeContainer>
      <CTAContainer>
        <Notification src={bellIcon} />
        <MerchantsAvatar />
        <FlexContainer>
          <NameTag>{currentUser?.firstName + ' ' + currentUser?.lastName}</NameTag>
          <LogoutButton onClick={handleLogOut}>Log out</LogoutButton>
        </FlexContainer>
      </CTAContainer>
    </Topbar>
  );
};

export default DashboardTopbar;
