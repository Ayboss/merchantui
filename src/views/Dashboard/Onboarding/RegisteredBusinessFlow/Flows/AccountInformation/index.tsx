import React from 'react';

import { Button, CustomInput, SelectInput } from '../../../../../../components';
// import { useGetBanksQuery } from '../../../../../../services/hooks/useGetBanksQuery';
import { naijaBanks } from '../../../../../../constants/naijaBanks';
import {
  AccountInformationWrapper,
  Header,
  Title,
  SubTitle,
  FormLabel,
  AccountInformationForm
} from './styles';

const AccountInformation = () => {
  return (
    <AccountInformationWrapper>
      <Header>
        <Title>Account Information</Title>
        <SubTitle>Manage your business information</SubTitle>
      </Header>

      <FormLabel>CORPORATE BANK ACCOUNT</FormLabel>
      <AccountInformationForm>
        <SelectInput label='Bank Name' defaultOption='Select your bank' options={naijaBanks} />
        <CustomInput
          name='accountNumber'
          label='Account Number'
          placeholder='Enter your account number'
        />
        <CustomInput
          name='accountName'
          label='Account Name'
          placeholder='Enter your account name'
        />
        <Button
          name='Save & Continue'
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          onClick={() => {}}
        />
      </AccountInformationForm>
    </AccountInformationWrapper>
  );
};

export default AccountInformation;
