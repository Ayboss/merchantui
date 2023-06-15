import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, CustomInput, TextAreaInput } from '../../../../../../../../components';
import { useKycDataContext } from '../../../../../../../../context/MerchantKycProvider';
import { BasicInformationContainer, Title, BasicInformationForm } from './styles';

const BasicInformation = ({ onNext }: any) => {
  const { kycData, setKycData } = useKycDataContext();
  const { register, handleSubmit } = useForm();

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
          {...register('businessInformation')}
        />
        <CustomInput
          label='Tax Identification Number'
          placeholder='Enter your tax identification number'
          {...register('tin')}
        />

        <Button
          name='Save & Continue'
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          type='submit'
        />
      </BasicInformationForm>
      <div className='text-center my-5'>
        {/* Currently not inline with the design and flow of the apis */}
        {/* <Link to='/' className='text-[16px] font-semibold leading-[20px] '>
          Do this later
        </Link> */}
      </div>
    </BasicInformationContainer>
  );
};

export default BasicInformation;
