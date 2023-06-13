import React, { useState } from 'react';
import { Title } from '../BasicInformation/styles';
import { Button, UploadInput } from '../../../../../../../../components';
import {
  UploadRequestPayloadType,
  useUploadMutationsQuery
} from '../../../../../../../../services/hooks/useUploadMutationsQuery';
import { LogoInformationContainer, LogoInformationForm } from './styles';

const LogoInformation = ({ onNext, setCurrentStep }: any) => {
  setCurrentStep('2');
  const { isLoading, mutateAsync } = useUploadMutationsQuery();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // eslint-disable-next-line no-console
  console.log(uploadedFile);
  const handleUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync(uploadedFile as UploadRequestPayloadType)
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });

    onNext();
  };

  const handleFileSelect = (file: File | null) => {
    setUploadedFile(file);
  };

  return (
    <LogoInformationContainer>
      <Title>BUSINESS LOGO</Title>
      <LogoInformationForm onSubmit={handleUpload}>
        <UploadInput name='businessLogo' onFileSelect={handleFileSelect} />
        <Button
          name='Save & Continue'
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          isBusy={isLoading}
          type='submit'
        />
      </LogoInformationForm>
    </LogoInformationContainer>
  );
};

export default LogoInformation;
