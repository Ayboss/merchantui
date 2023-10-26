/* eslint-disable no-console */
import React, { useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import { Button, CustomInput } from '../../../../../components';
import {
  SendMoneyRequestType,
  useGetBanksQuery,
  useGetMerchantAccountQuery,
  useVerifyBankAccount
} from '../../../../../services/hooks';

import './styles.css';
import { PinPopup } from '../../PinPopup';

interface FormValues {
  amount: string;
  accountNumber: string;
  narration: string;
}
export interface IAccountInfo {
  accountName: string;
  accountNumber: string;
  bankName: string;
  created: string;
  currencyCode: string;
}

export const SinglePayout: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const { mutateAsync, isLoading, data: bankDetails } = useVerifyBankAccount();
  const { data: banksData, isLoading: isLoadingBanks } = useGetBanksQuery();
  const [showPin, setShowPin] = useState(false);
  const { data: merchantAccount, isLoading: merchantAccountLoading } = useGetMerchantAccountQuery({
    page: 1,
    pageSize: 20
  });

  const [detailsToVerify, setDetailsToVerify] = useState({
    accountNumber: '',
    bankName: '',
    bankCode: ''
  });
  const [sourceAccountNumber, setSourceAccountNumber] = useState('');
  const [dataToSend, setDataToSend] = useState<SendMoneyRequestType>({} as SendMoneyRequestType);

  const { accountNumber, bankName, bankCode } = detailsToVerify;

  useEffect(() => {
    if (bankName && accountNumber.length === 10) {
      mutateAsync({
        accountNumber,
        beneficiaryBank: bankCode
      })
        // eslint-disable-next-line no-console
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

  const merchantSourceAccountNumberForSelect = useMemo(() => {
    if (merchantAccount?.data?.content) {
      return merchantAccount?.data?.content.map((accountItem: IAccountInfo) => ({
        label: `${accountItem.accountNumber} | ${accountItem.bankName}`,
        value: accountItem.accountNumber
      }));
    }
  }, [merchantAccount]);

  const handleSubmitClick: SubmitHandler<FormValues> = (values) => {
    const { accountNumber, amount, narration } = values;
    const { bankCode, bankName } = detailsToVerify;

    if (!bankDetails?.data?.accountName) {
      toast.error('Beneficiary details not verified');
    }

    if (amount.length > 0 && bankCode && bankDetails?.data?.accountName) {
      setShowPin(true);
      setDataToSend({
        beneficiaryAccountName: bankDetails?.data?.accountName,
        beneficiaryAccountNumber: accountNumber,
        beneficiaryBankName: bankName,
        beneficiaryBankCode: bankCode,
        sourceAccountNumber,
        transactionAmount: amount,
        currencyCode: 'NGN',
        narration,
        reference: uuidv4()
      });
    }
  };

  return (
    <div className='relative w-ful pb-[50px] pl-[40px] border-l-[rgba(211, 211, 211, 0.3)] border-l-[0.8px]'>
      <h3 className='text-[#000000] font-semi-bold text-[20px]'>Single Payout</h3>
      <p className='text-[rgba(21, 42, 56, 0.649557)] font-normal text-[13px]'>
        Manage your Single Payout{' '}
      </p>
      <form onSubmit={handleSubmit(handleSubmitClick)} className='w-full flex flex-col'>
        <CustomInput
          {...register('amount', {
            required: true,
            pattern: /^[0-9]+$/
          })}
          label='Enter Amount'
          placeholder='1000'
        />
        <div className='mt-5 '>
          <p
            className='text-[#333333]
            text-[16px]
            leading-[17px]
            font-medium'
          >
            {' '}
            Choose Own Account
          </p>
          <Select
            options={merchantSourceAccountNumberForSelect}
            classNamePrefix='Select...'
            isLoading={merchantAccountLoading}
            isSearchable
            isClearable
            className='mt-2'
            onChange={(val: any) => setSourceAccountNumber(val?.value)}
            required
          />
        </div>
        <div className='mt-5 '>
          <p
            className='text-[#333333]
            text-[16px]
            leading-[17px]
            font-medium'
          >
            {' '}
            Beneficiary Bank Name
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
          label='Beneficairy Account Number'
          placeholder=''
        />
        {isLoading && <FontAwesomeIcon className='mt-[10px] mr-[auto]' icon={faSpinner} spin />}
        {bankDetails && (
          <p className='mt-[10px] text-[#3EAF3F] text-[14px] font-medium'>
            {bankDetails?.data?.accountName}
          </p>
        )}
        <CustomInput
          {...register('narration', {
            required: true
          })}
          label='Narration'
          placeholder=''
        />
        <Button
          name='Confirm Single Payout'
          className='w-full font-semi-bold'
          isBusy={false}
          type={'submit'}
        />
      </form>
      {showPin && <PinPopup dataToSend={dataToSend} onClose={() => setShowPin(false)} />}
    </div>
  );
};
