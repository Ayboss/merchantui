import React, { useState } from 'react';
import { Title } from '../BasicInformation/styles';
import { Button, UploadInput } from '../../../../../../../../components';
import { LogoInformationContainer, LogoInformationForm } from './styles';

const LogoInformation = ({ onNext }: any) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // eslint-disable-next-line no-console
  console.log(uploadedFile);

  const handleFileSelect = (file: File | null) => {
    setUploadedFile(file);
  };

  return (
    <LogoInformationContainer>
      <Title>BUSINESS LOGO</Title>
      <LogoInformationForm>
        <UploadInput name='businessLogo' onFileSelect={handleFileSelect} />
        <Button
          name='Save & Continue'
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          onClick={onNext}
        />
      </LogoInformationForm>
    </LogoInformationContainer>
  );
};

export default LogoInformation;
