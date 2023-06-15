import React, { useEffect, useMemo, useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubmitHandler, useForm } from 'react-hook-form';

import Select from 'react-select';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Button, CustomInput } from '../../../../../../components';

import {
  useGetBanksQuery,
  useVerifyBankAccount,
  useCreateSettlementMutation
} from '../../../../../../services/hooks';
import {
  AccountInformationWrapper,
  Header,
  Title,
  SubTitle,
  FormLabel,
  AccountInformationForm
} from './styles';

interface FormValues {
  accountNumber: string;
}

const AccountInformation = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();
  const { mutateAsync, isLoading, data: bankDetails } = useVerifyBankAccount();
  const { data: banksData, isLoading: isLoadingBanks } = useGetBanksQuery();
  const [detailsToVerify, setDetailsToVerify] = useState({
    accountNumber: '',
    bankName: '',
    bankCode: ''
  });
  const { mutateAsync: settlementMutate, isLoading: settlementLoading } =
    useCreateSettlementMutation();

  const { accountNumber, bankName } = detailsToVerify;

  useEffect(() => {
    if (bankName && accountNumber.length === 10) {
      mutateAsync({
        accountNumber,
        beneficiaryBank: bankName
      })
        .then(() => toast.success('Account information verfied successfully'))
        .catch(() => toast.error('Could not verify bank details'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountNumber, bankName]);

  const bankDataForSelect = useMemo(() => {
    if (banksData?.data?.banks) {
      return banksData?.data?.banks.map((bankData: { bankName: any; bankCode: any }) => ({
        label: bankData?.bankName,
        value: bankData?.bankCode
      }));
    }
  }, [banksData]);

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    const { accountNumber } = values;
    const { bankCode, bankName } = detailsToVerify;

    settlementMutate({
      accountName: bankDetails?.data?.accountName,
      accountNumber,
      bank: bankName,
      bankCode
    })
      .then((data) => {
        toast.success(`Settlement account creation ${data?.responseMessage}`);
        navigate('registered-business/documents');
      })
      .catch(() => {
        toast.error('An error occurred');
      });
  };

  return (
    <AccountInformationWrapper>
      <Header>
        <Title>Account Information</Title>
        <SubTitle>Manage your business information</SubTitle>
      </Header>

      <FormLabel>CORPORATE BANK ACCOUNT</FormLabel>
      <AccountInformationForm onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-5 '>
          <p
            className='text-[#333333]
            text-[16px]
            leading-[17px]
            font-medium'
          >
            Bank Name
          </p>
          <Select
            options={bankDataForSelect}
            classNamePrefix='Select...'
            isLoading={isLoadingBanks}
            isSearchable
            isClearable
            className='mt-2'
            onChange={(val) =>
              setDetailsToVerify({
                ...detailsToVerify,
                // @ts-ignore not resolved val type
                bankName: val?.label,
                // @ts-ignore not resolved val type
                bankCode: val?.value
              })
            }
            required
          />
        </div>
        <CustomInput
          {...register('accountNumber', {
            required: true,
            minLength: 10,
            maxLength: 10,
            pattern: /^[0-9]+$/,
            onChange: (e) =>
              setDetailsToVerify({
                ...detailsToVerify,
                accountNumber: e.target.value
              })
          })}
          label='Account Number'
          placeholder=''
        />
        {isLoading && <FontAwesomeIcon className='mt-[10px] mr-[auto]' icon={faSpinner} spin />}
        {bankDetails && (
          <CustomInput
            name='accountName'
            label='Account Name'
            placeholder='Your account name'
            value={bankDetails?.data?.accountName}
            readOnly={true}
          />
        )}

        <Button
          name='Save & Continue'
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          type='submit'
          isBusy={settlementLoading}
        />
      </AccountInformationForm>
    </AccountInformationWrapper>
  );
};

export default AccountInformation;
