import React from "react";
import OnusLogo from "../../assets/img/onus_logo.svg";
import { AuthHeaderContainer, Brand, AuthLink } from "./styles";

const AuthHeader = () => {
  return (
    <AuthHeaderContainer>
      <Brand>
        <img src={OnusLogo} alt="logo" />
      </Brand>
      <AuthLink>Login</AuthLink>
    </AuthHeaderContainer>
  );
};

export default AuthHeader;
