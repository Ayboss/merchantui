import React, { useState } from 'react';
import { MultiStepContainer, StepProgress } from '../../../../../../components';
import AddressInformation from './Steps/AddressInformation';
import BasicInformation from './Steps/BasicInformation';
import LogoInformation from './Steps/Logo';
import SocialInformation from './Steps/Socials';
import { BusinessInformationContainer, Header, Title, SubTitle, StepsContainer } from './styles';

const BusinessInformation = () => {
  const [currentStep, setCurrentStep] = useState('1');

  return (
    <BusinessInformationContainer>
      <Header>
        <Title>Business Information</Title>
        <SubTitle>Manage your Business Information here</SubTitle>
      </Header>
      <StepsContainer>
        <StepProgress activeStep={currentStep} />
        <MultiStepContainer>
          <BasicInformation setCurrentStep={setCurrentStep} />
          <AddressInformation setCurrentStep={setCurrentStep} />
          <LogoInformation setCurrentStep={setCurrentStep} />
          <SocialInformation setCurrentStep={setCurrentStep} />
        </MultiStepContainer>
      </StepsContainer>
    </BusinessInformationContainer>
  );
};

export default BusinessInformation;
