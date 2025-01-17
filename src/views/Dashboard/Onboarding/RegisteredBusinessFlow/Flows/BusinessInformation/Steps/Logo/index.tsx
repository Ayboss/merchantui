import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../BasicInformation/styles';
import { Button, UploadInput } from '../../../../../../../../components';
import { LogoInformationContainer, LogoInformationForm } from './styles';
// import { useKycDataContext } from '../../../../../../../../context/MerchantKycProvider';

const LogoInformation = ({ onNext }: any) => {
  // const { kycData } = useKycDataContext();

  return (
    <LogoInformationContainer>
      <Title>BUSINESS LOGO</Title>
      <LogoInformationForm>
        <UploadInput />
        <Button
          name='Save & Continue'
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          onClick={onNext}
        />
      </LogoInformationForm>
      <div className='text-center my-5'>
        <Link to='/' className='text-[16px] font-semibold leading-[20px] '>
          Do this later
        </Link>
      </div>
    </LogoInformationContainer>
  );
};

export default LogoInformation;
