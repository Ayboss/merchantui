import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, CustomInput, TextAreaInput } from '../../../../../../../../components';
import { useKycDataContext } from '../../../../../../../../context/MerchantKycProvider';
import { BasicInformationContainer, Title, BasicInformationForm } from './styles';

const BasicInformation = ({ onNext, setCurrentStep }: any) => {
  setCurrentStep('1');
  const { kycData, setKycData } = useKycDataContext();
  const { register, handleSubmit, formState } = useForm();

  interface IBasicInformation {
    businessInformation?: string;
    tin?: string;
  }

  const handelOnSubmit = (values: IBasicInformation) => {
    const { businessInformation, tin } = values;

    setKycData({ ...kycData, businessInformation, tin });
    onNext();
  };

  return (
    <BasicInformationContainer>
      <Title>BASIC INFORMATION</Title>
      <BasicInformationForm onSubmit={handleSubmit(handelOnSubmit)}>
        <TextAreaInput
          label='Tell us about your business'
          placeholder='Type your business name here'
          {...register('businessInformation', { required: true })}
        />
        <CustomInput
          label='Tax Identification Number'
          placeholder='Enter your tax identification number'
          {...register('tin', { required: true })}
        />

        <Button
          name='Save & Continue'
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          type='submit'
          disabled={!formState.isValid}
        />
      </BasicInformationForm>
    </BasicInformationContainer>
  );
};

export default BasicInformation;
