import React, { useEffect, useState } from 'react';
import { Step, Stepper } from 'react-form-stepper';
import { v4 as uuidv4 } from 'uuid';
import { KycLayout } from '../../layouts';
import { WhiteBGContainer } from '../Dashboard/Overview/components/ListContainer';
import { cn } from '../../utils';
import { MerchantProfileResponseType } from '../../services/hooks/types';
import { useProfileQuery } from '../../services/hooks/useGetProfileQuery';
import { ChooseBusinessType } from './steps/ChooseBusinessType';
import { BusinessInformation } from './steps/BusinessInformation';
import { IdentityVerification } from './steps/IdentityVerification';
import { SettlementBankInfo } from './steps/SettlementBankInfo';
import { CompletedSetup } from './steps/CompletedSetup';

const kycHeaderTexts = [
  {
    title: 'Select Business Category',
    text: 'Lets set up your business so you can start transacting'
  },
  {
    title: 'Business Information',
    text: 'Provide details about your business and valid documents for verification '
  },
  {
    title: 'Identity Verification',
    text: 'Provide you identity documents for verification '
  },
  {
    title: 'Settlement Bank Information',
    text: 'Setup your preferred bank for settlements'
  }
];

const steps = new Array(4).fill('');

export type ChildComponentsDefaultProps = {
  handleNext: () => void;
  handleBack: () => void;
  profileDetails?: MerchantProfileResponseType;
};

export const KycVerification = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <KycLayout
      header={kycHeaderTexts[activeStep].title}
      subHeader={kycHeaderTexts[activeStep].text}
    >
      <WhiteBGContainer
        className={cn(
          'px-[30px] z-10 pt-[20px] border-[#EFF0F6] shadow-[0px_5px_16px_0px_rgba(8,_15,_52,_0.06)] w-full max-w-[500px] fade-in'
        )}
      >
        <Stepper
          className='w-full font-normal cursor-default'
          connectorStateColors
          connectorStyleConfig={{
            activeColor: '#6231F4',
            completedColor: '#6231F4',
            size: 3,
            stepSize: '',
            disabledColor: '#EFF0F6',
            style: 'solid'
          }}
          activeStep={activeStep}
          //   @ts-ignore
          styleConfig={{
            activeBgColor: '#6231F4',
            activeTextColor: '#FFF',
            completedBgColor: '#6231F4',
            inactiveBgColor: '#EFF0F6',
            inactiveTextColor: '#6F6C90'
          }}
        >
          {steps.map(() => {
            const stepProps: { completed?: boolean } = {};

            return <Step className='cursor-default' key={uuidv4()} {...stepProps} />;
          })}
        </Stepper>
        <div className='mt-[40px] mb-[40px] h-[1px] w-full bg-[#D9DBE9]'></div>
        <KycVerificationContainer
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setIsCompleted={setIsCompleted}
        >
          <ChooseBusinessType />
          <BusinessInformation />
          <IdentityVerification />
          <SettlementBankInfo />
        </KycVerificationContainer>
      </WhiteBGContainer>
      {isCompleted && <CompletedSetup />}
    </KycLayout>
  );
};

export const KycVerificationContainer: React.FC<React.PropsWithChildren<any>> = ({
  children,
  activeStep,
  setActiveStep,
  setIsCompleted
}) => {
  const { data: profileDetails } = useProfileQuery();

  const {
    data: {
      businessAddress = '',
      businessCategory = '',
      businessInformation = '',
      businessType = '',
      country = '',
      state = '',
      tin = '',
      profileUpdated,
      extra
    } = {}
  } = profileDetails || ({} as MerchantProfileResponseType);

  useEffect(() => {
    if (businessCategory && businessType) {
      setActiveStep(1);
    }

    if (businessAddress && businessInformation && country && state && tin) {
      setActiveStep(2);
    }

    if (extra?.bvnSet) {
      setActiveStep(3);
    }

    if (profileUpdated) {
      setIsCompleted(true);
    }
  }, [
    businessAddress,
    businessCategory,
    businessInformation,
    businessType,
    country,
    setActiveStep,
    state,
    tin,
    extra,
    setIsCompleted,
    profileUpdated
  ]);

  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  const currentForm = React.Children.toArray(children)[activeStep];

  if (React.isValidElement(currentForm)) {
    return React.cloneElement(currentForm, {
      // @ts-ignore
      handleNext,
      handleBack,
      profileDetails
    });
  }
};
