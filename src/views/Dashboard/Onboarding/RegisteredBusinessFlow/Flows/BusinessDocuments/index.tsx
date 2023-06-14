import React, { useState } from 'react';

import IconPreview from '../../../../../../assets/icons/preview-icon.svg';
import { Button, UploadInput } from '../../../../../../components';
import {
  RegistrationDocumentsWrapper,
  Header,
  Title,
  Subtitle,
  FormWrapper,
  DocumentPreviewBtn,
  PreviewIcon,
  UploadLabel
} from './styles';

const BusinessDocuments = () => {
  const [boardResolution, setBoardResolution] = useState<any>(null);
  const [companyProfile, setCompanyProfile] = useState<any>('');

  return (
    <RegistrationDocumentsWrapper>
      <Header>
        <Title>Business Registration Documents</Title>
        <Subtitle>Manage your Business Registration Documents</Subtitle>
      </Header>
      <DocumentPreviewBtn>
        <PreviewIcon src={IconPreview} />
        <span>See Document Sample</span>
      </DocumentPreviewBtn>
      <FormWrapper>
        <div>
          <UploadLabel>Board Resolution*</UploadLabel>
          <UploadInput
            selectedFile={boardResolution}
            onChange={(e) => setBoardResolution(e.target.files[0])}
          />
        </div>
        <div>
          <UploadLabel>Company Profile*</UploadLabel>
          <UploadInput selectedFile={companyProfile} onChange={(file) => setCompanyProfile(file)} />
        </div>
        <div>
          <UploadLabel>Company CAC Certificate*</UploadLabel>
          <UploadInput />
        </div>
        <div>
          <UploadLabel>FormO2*</UploadLabel>
          <UploadInput />
        </div>
        <div>
          <UploadLabel>FormO7</UploadLabel>
          <UploadInput />
        </div>

        <Button
          name='Save & Continue'
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          onClick={() => {}}
        />
      </FormWrapper>
    </RegistrationDocumentsWrapper>
  );
};

export default BusinessDocuments;
