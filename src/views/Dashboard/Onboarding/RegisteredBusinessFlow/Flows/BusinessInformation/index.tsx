import React from 'react';
import { MultiStepContainer, StepProgress } from '../../../../../../components';
import AddressInformation from './Steps/AddressInformation';
import BasicInformation from './Steps/BasicInformation';
import LogoInformation from './Steps/Logo';
import SocialInformation from './Steps/Socials';
import { BusinessInformationContainer, Header, Title, SubTitle, StepsContainer } from './styles';

const BusinessInformation = () => {
  return (
    <BusinessInformationContainer>
      <Header>
        <Title>Business Information</Title>
        <SubTitle>Manage your Business Information here</SubTitle>
      </Header>
      <StepsContainer>
        <StepProgress activeStep='1' />
        <MultiStepContainer>
          <BasicInformation />
          <AddressInformation />
          <LogoInformation />
          <SocialInformation />
        </MultiStepContainer>
      </StepsContainer>
    </BusinessInformationContainer>
  );
};

export default BusinessInformation;
