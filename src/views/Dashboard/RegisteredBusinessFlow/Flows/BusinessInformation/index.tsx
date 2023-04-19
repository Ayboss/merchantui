import MultiStepContainer from "../../../../../components/MultiStepContainer";
import StepProgress from "../../../../../components/StepProgress";
import {
  BusinessInformationContainer,
  Header,
  Title,
  SubTitle,
  StepsContainer,
} from "./styles";
const BusinessInformation = () => {
  return (
    <BusinessInformationContainer>
      <Header>
        <Title>Business Information</Title>
        <SubTitle>Manage your Business Information here</SubTitle>
      </Header>
      <StepsContainer>
        <StepProgress activeStep="1" />
        <MultiStepContainer></MultiStepContainer>
      </StepsContainer>
    </BusinessInformationContainer>
  );
};

export default BusinessInformation;
