import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
// import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import bellIcon from '../../assets/icons/bell-icon.svg';
import { REGULAR_PATHS } from '../../routes/paths';
import { useAuth } from '../../hooks';
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
  const { auth } = useAuth();

  const handleLogOut = () => {
    localStorage.removeItem('key');
    navigate(REGULAR_PATHS.LOGIN);
  };

  return (
    <Topbar>
      <WelcomeContainer>
        <WelcomeNote>Welcome {auth?.firstName} !</WelcomeNote>
        <Breadcrumb>
          {/* <span> Dashboard</span> */}
          {/* <FontAwesomeIcon
            icon={faGreaterThan}
            className='font-light mx-2 text-[10px] text-[#3A3A3AB2]'
          />
          <span className='font-medium text-[#6231F4]'>Business activation</span> */}
        </Breadcrumb>
      </WelcomeContainer>
      <CTAContainer>
        <Notification src={bellIcon} />
        <MerchantsAvatar />
        <FlexContainer>
          <NameTag>{auth?.firstName + ' ' + auth?.lastName}</NameTag>
          <LogoutButton onClick={handleLogOut}>Log out</LogoutButton>
        </FlexContainer>
      </CTAContainer>
    </Topbar>
  );
};

export default DashboardTopbar;
