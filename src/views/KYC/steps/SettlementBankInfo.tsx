import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import Select from 'react-select';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Button, CustomInput, inlineButtonClass } from '../../../components';
import { ChildComponentsDefaultProps } from '..';
import {
  CreateTransactionPinRequestPayloadType,
  useCreateSettlementAccount,
  useCreateTransactionPin,
  useGetBanksQuery,
  useVerifyBankAccount
} from '../../../services/hooks';
import { PRIVATE_PATHS } from '../../../routes/paths';
import { CustomToastBody } from '../../../components/CustomToastBody';

export const SettlementBankInfo: React.FC<
  Partial<ChildComponentsDefaultProps> & { onlySettlmentInfo?: boolean; onClose?: () => void }
> = ({ onlySettlmentInfo, onClose }) => {
  const { data: banksData, isLoading: isLoadingBanks } = useGetBanksQuery();
  const { mutateAsync: verifyBankInfo, isLoading, data: bankDetails } = useVerifyBankAccount();
  const { mutateAsync: updateSettlementDetails, isLoading: isSettlementLoading } =
    useCreateSettlementAccount();
  const { mutateAsync: createPin } = useCreateTransactionPin();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const [detailsToVerify, setDetailsToVerify] = useState({
    accountNumber: '',
    bankName: '',
    bankCode: ''
  });

  const { accountNumber, bankName, bankCode } = detailsToVerify;

  useEffect(() => {
    if (bankName && accountNumber.length === 10) {
      verifyBankInfo({
        accountNumber,
        beneficiaryBank: bankName
      })
        // eslint-disable-next-line no-console
        .then(() =>
          toast.custom(
            (t) => (
              <CustomToastBody
                text='Account information verfied successfully'
                toastId={t.id}
                type='success'
                className='mt-[140px]  ml-[200px] w-[500px] '
              />
            ),
            {
              duration: 7000,
              position: 'top-center'
            }
          )
        )
        .catch(() =>
          toast.custom(
            (t) => (
              <CustomToastBody
                text='Could not verify bank details'
                toastId={t.id}
                type='error'
                className='mt-[140px]  ml-[200px] w-[500px] '
              />
            ),
            {
              duration: 7000,
              position: 'top-center'
            }
          )
        );
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

  const handleSubmitClick: SubmitHandler<CreateTransactionPinRequestPayloadType> = async (
    values
  ) => {
    try {
      if (onlySettlmentInfo) {
        await Promise.all([
          updateSettlementDetails({
            bankCode,
            accountNumber,
            accountName: bankDetails?.data?.accountName,
            bank: bankName
          })
        ]);
      } else {
        await Promise.all([
          updateSettlementDetails({
            bankCode,
            accountNumber,
            accountName: bankDetails?.data?.accountName,
            bank: bankName
          }),
          createPin({
            pin: values.pin,
            pinConfirmation: values.pinConfirmation
          })
        ]);
      }

      toast.custom(
        (t) => (
          <CustomToastBody
            text='Settlement Information updated successfully 🎉🎉'
            toastId={t.id}
            type='success'
            className='mt-[140px]  ml-[230px] w-[400px] '
          />
        ),
        {
          duration: 7000,
          position: 'top-center'
        }
      );

      if (onlySettlmentInfo) {
        onClose!();
      } else {
        navigate(PRIVATE_PATHS.OVERVIEW);
      }
    } catch (error: any) {
      if (Array.isArray(error?.response?.data?.errors)) {
        const errorMessages = error?.response?.data?.errors;

        errorMessages.forEach((error: any) => toast.error(`${error?.fieldName} ${error?.message}`));
      } else {
        toast.custom(
          (t) => (
            <CustomToastBody
              text={error?.response?.data?.responseMessage || error?.response?.data?.message}
              toastId={t.id}
              type='error'
              className='mt-[140px]  ml-[230px] w-[400px] '
            />
          ),
          {
            duration: 7000,
            position: 'top-center'
          }
        );
      }
    }
  };

  return (
    <div className='w-full flex flex-col gap-[30px]'>
      {/* @ts-ignore */}
      <form className='w-full flex flex-col gap-[30px]' onSubmit={handleSubmit(handleSubmitClick)}>
        <div className='flex flex-col gap-[5px] relative'>
          <label className='text-[#6F7482] text-[10px] leading-normal font-medium'>Bank Name</label>
          <Select
            options={bankDataForSelect}
            classNamePrefix='Select Bank'
            isLoading={isLoadingBanks}
            isSearchable
            isClearable
            className=' w-full'
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
          placeholder='Enter your account number'
          label='Account Number'
          className='w-full'
          InputClassName=' h-[40px]'
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
        />
        {isLoading && <FontAwesomeIcon className='mt-[-10px] mr-[auto]' icon={faSpinner} spin />}
        <CustomInput
          name='Account Name'
          placeholder=''
          label='Account Name'
          value={bankDetails?.data?.accountName}
          disabled={true}
          className='w-full'
          InputClassName=' h-[40px]  bg-[#F4F4F5]'
        />

        {!onlySettlmentInfo && (
          <div className='w-full'>
            <h3 className='text-[#444] text-base font-bold tracking-[0.18px]'>
              Setup Transaction Pin
            </h3>
            <p className='text-[#6F7482] font-normal leading-[24px] text-[12px]'>
              This pin will be required for every payout you initiate
            </p>
          </div>
        )}

        {!onlySettlmentInfo && (
          <div className='w-full flex <1024:flex-col gap-5 items-start'>
            <CustomInput
              placeholder='* * * *'
              label='Transaction Pin'
              className='w-full'
              type='password'
              InputClassName=' h-[40px]'
              {...register('pin', { required: true })}
            />
            <CustomInput
              placeholder='* * * *'
              label='Re-enter Transaction Pin'
              className='w-full'
              InputClassName=' h-[40px]'
              type='password'
              {...register('pinConfirmation', { required: true })}
            />
          </div>
        )}

        <div className='w-full mt-10 flex items-center justify-between'>
          <Button
            className={clsx(
              inlineButtonClass,
              'h-[40px] border border-solid rounded-[6px] border-[#B8BCCA] text-[#B8BCCA] w-[100px] font-medium text-[12px]'
            )}
            name='Skip for now'
            type={'button'}
            onClick={() => navigate(PRIVATE_PATHS.OVERVIEW)}
          />
          <div className='flex gap-5 items-center'>
            <Button
              name='Submit'
              className='h-[40px] rounded-[6px] w-[100px] font-medium text-[12px] m-0'
              type={'submit'}
              isBusy={isSettlementLoading || isLoading}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
