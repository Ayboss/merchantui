import React from 'react';
import MtnLogo from '../../assets/img/mtn_logo.svg';
import DominosLogo from '../../assets/img/dominos_logo.svg';
import FilmhouseLogo from '../../assets/img/filmhouse_logo.svg';

import { AuthFooterContainer, AuthFooterText, AuthFooterImages, AuthFooterImg } from './styles';

export const AuthFooter = () => {
  return (
    <AuthFooterContainer>
      <AuthFooterText>Powering growth for amazing businesses</AuthFooterText>
      <AuthFooterImages>
        <AuthFooterImg src={MtnLogo} alt='mtn logo' />
        <AuthFooterImg src={DominosLogo} alt='dominos pizza logo' />
        <AuthFooterImg src={FilmhouseLogo} alt='film house logo' />
      </AuthFooterImages>
    </AuthFooterContainer>
  );
};

export default AuthFooter;
