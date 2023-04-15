import React from "react";
import AuthHeader from "../../components/AuthHeader";
import AuthFooter from "../../components/AuthFooter";
import {
  AuthLayoutContainer,
  AuthBody,
  AuthHero,
  Title,
  Subtitle,
  AuthLine,
} from "./styles";
import { useLocation } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const location = useLocation();

  return (
    <AuthLayoutContainer>
      <AuthHeader ctaUrl={location.pathname} />
      <AuthBody>
        <AuthHero>
          <AuthLine />
          <Title>
            Endless <br /> possibilities for <br /> online and offline <br />{" "}
            payments in Africa
          </Title>
          <Subtitle>
            OnUs finacial services enable African businesses to be <br /> paid
            by anyone, anywhere in the world.
          </Subtitle>
        </AuthHero>
        {children}
      </AuthBody>
      <AuthFooter />
    </AuthLayoutContainer>
  );
};

export default AuthLayout;
