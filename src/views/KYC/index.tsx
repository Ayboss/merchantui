import React, { useState } from 'react';
import { Step, Stepper } from 'react-form-stepper';
import { v4 as uuidv4 } from 'uuid';
import { KycLayout } from '../../layouts';
import { WhiteBGContainer } from '../Dashboard/Overview/components/ListContainer';
import { cn } from '../../utils';
import { ChooseBusinessType } from './steps/ChooseBusinessType';
import { BusinessInformation } from './steps/BusinessInformation';
import { IdentityVerification } from './steps/IdentityVerification';
import { SettlementBankInfo } from './steps/SettlementBankInfo';

const steps = new Array(4).fill('');

export type ChildComponentsDefaultProps = {
  handleNext: () => void;
  handleBack: () => void;
};

export const KycVerification = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  return (
    <KycLayout
      header='New Business Profile'
      subHeader='Lets set up your business so you can start transacting'
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
          {steps.map((step, index) => {
            const stepProps: { completed?: boolean } = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }

            return (
              <Step
                onClick={() => {
                  setActiveStep(index);
                }}
                className='cursor-default'
                key={uuidv4()}
                {...stepProps}
              />
            );
          })}
        </Stepper>
        <div className='mt-[40px] mb-[40px] h-[1px] w-full bg-[#D9DBE9]'></div>
        <KycVerificationContainer
          skipped={skipped}
          activeStep={activeStep}
          setSkipped={setSkipped}
          setActiveStep={setActiveStep}
          isStepSkipped={isStepSkipped}
        >
          <ChooseBusinessType />
          <BusinessInformation />
          <IdentityVerification />
          <SettlementBankInfo />
        </KycVerificationContainer>
      </WhiteBGContainer>
    </KycLayout>
  );
};

export const KycVerificationContainer: React.FC<React.PropsWithChildren<any>> = ({
  children,
  skipped,
  activeStep,
  setSkipped,
  setActiveStep,
  isStepSkipped
}) => {
  const handleNext = () => {
    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  const currentForm = React.Children.toArray(children)[activeStep];

  if (React.isValidElement(currentForm)) {
    return React.cloneElement(currentForm, {
      // @ts-ignore
      handleNext,
      handleBack
    });
  }
};
