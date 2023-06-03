import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as OnusLogo } from '../../assets/img/onus_logo.svg';
import { AuthHeaderContainer, Brand, AuthLink } from './styles';
import { AuthHeaderProps } from './types';

export const AuthHeader: React.FC<AuthHeaderProps> = ({ ctaUrl }) => {
  return (
    <AuthHeaderContainer>
      <Brand>
        <OnusLogo />
      </Brand>
      <NavLink to={ctaUrl === '/login' ? '/signup' : '/login'} replace>
        {ctaUrl === '/login' ? <AuthLink>Sign Up</AuthLink> : <AuthLink>Login</AuthLink>}
      </NavLink>
    </AuthHeaderContainer>
  );
};

export default AuthHeader;
