import {
  BusinessActivation,
  Container,
  Title,
  SubTitle,
  FormWrapper,
} from "./stryles";

const GetStarted = () => {
  return (
    <BusinessActivation>
      <Container>
        <Title>
          What <span className="text-[#6231F4]">Business type</span> do you
          operate ?
        </Title>
        <SubTitle>
          Select the business types that suits your current need.
        </SubTitle>
        <FormWrapper></FormWrapper>
      </Container>
    </BusinessActivation>
  );
};

export default GetStarted;
