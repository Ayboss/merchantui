import {
  RegisteredBusinessContainer,
  RegisteredBusinessFlowNavigator,
  RegisteredBusinessFlowForms,
  HeaderCard,
  TitleContainer,
  FlexContainer,
  Title,
  ProgressTracker,
  ProgressBar,
  HeaderCardBody,
  HeaderNote,
  NavigatorsContainer,
} from './styles';
import { RegisteredBusinessInformation } from '../../../../constants';
import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import NavigatorButton from '../../../../components/NavigatorButton';

const RegisteredBusinessFlow = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('business-information');

  const handleNavigator = (info: any) => {
    navigate(info.url);
    setActive(info.title);
  };

  useEffect(() => {
    <Navigate to='business-information' />;
  }, []);

  return (
    <RegisteredBusinessContainer>
      <RegisteredBusinessFlowNavigator>
        <HeaderCard>
          <TitleContainer className='headerCardBoxShadow'>
            <FlexContainer>
              <Title>Registered Business Activation</Title>
              <ProgressTracker>20% COMPLETED</ProgressTracker>
            </FlexContainer>
            <ProgressBar />
          </TitleContainer>
          <HeaderCardBody>
            <HeaderNote>
              Kindly provide the information requested below about your business
              for our review and verification. Your account will be activated
              once requested information is completely provided and verified.
            </HeaderNote>
          </HeaderCardBody>
        </HeaderCard>
        <NavigatorsContainer>
          {RegisteredBusinessInformation.map((information, id) => (
            <NavigatorButton
              key={id}
              name={information.title}
              activeNav={active}
              onClick={() => handleNavigator(information)}
            />
          ))}
        </NavigatorsContainer>
      </RegisteredBusinessFlowNavigator>
      <RegisteredBusinessFlowForms>
        <Outlet />
      </RegisteredBusinessFlowForms>
    </RegisteredBusinessContainer>
  );
};

export default RegisteredBusinessFlow;
