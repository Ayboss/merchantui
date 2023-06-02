import React from 'react';
import { useLocation } from 'react-router-dom';
import { AuthFooter, AuthHeader } from '../../components';
import { AuthLayoutContainer, AuthBody, AuthHero, Title, Subtitle, AuthLine } from './styles';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const location = useLocation();

  return (
    <AuthLayoutContainer>
      <AuthHeader ctaUrl={location.pathname} />
      <AuthBody>
        <AuthHero>
          <AuthLine />
          <Title>
            Endless <br /> possibilities for <br /> online and offline <br /> payments in Africa
          </Title>
          <Subtitle>
            OnUs finacial services enable African businesses to be <br /> paid by anyone, anywhere
            in the world.
          </Subtitle>
        </AuthHero>
        {children}
      </AuthBody>
      <AuthFooter />
    </AuthLayoutContainer>
  );
};

export default AuthLayout;
