import React from "react";
import AuthHeader from "../../components/AuthHeader";
import AuthFooter from "../../components/AuthFooter";
import {
  AuthLayoutContainer,
  AuthBody,
  AuthHero,
  Title,
  Subtitle,
} from "./styles";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <AuthLayoutContainer>
      <AuthHeader />
      <AuthBody>
        <AuthHero>
          <Title>
            Endless possibilities for online and offline payments in Africa
          </Title>
          <Subtitle>
            OnUs finacial services enable African businesses to be paid by
            anyone, anywhere in the world.
          </Subtitle>
        </AuthHero>
        {children}
      </AuthBody>
      <AuthFooter />
    </AuthLayoutContainer>
  );
};

export default AuthLayout;
