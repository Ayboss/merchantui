import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  CurrencyCardPicker,
  CurrencyCardPickerSkeleton,
  CustomInput,
  Popup
} from '../../../components';
import { useGetMerchantWalletBalanceQuery } from '../../../services/hooks/useGetMerchantWalletBalance';
import { useGetBanksQuery, useSendMoney, useVerifyBankAccount } from '../../../services/hooks';
import { PRIVATE_PATHS } from '../../../routes/paths';

interface FormValues {
  amount: string;
  accountNumber: string;
  narration: string;
  pin: string;
}

export const PaymentPopup = ({ onClose }: { onClose: () => void }) => {
  const { data: walletBalanceData, isLoading: walletBalanceLoading } =
    useGetMerchantWalletBalanceQuery();

  const { mutateAsync, isLoading, data: bankDetails } = useVerifyBankAccount();
  const { mutateAsync: sendMoneyAsync, isLoading: isMoneySending } = useSendMoney();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormValues>();

  const [activeWallet, setActiveWallet] = useState<any>(null);

  const [detailsToVerify, setDetailsToVerify] = useState({
    accountNumber: '',
    bankName: '',
    bankCode: ''
  });

  const { data: banksData, isLoading: isLoadingBanks } = useGetBanksQuery();

  const bankDataForSelect = useMemo(() => {
    if (banksData?.data?.banks) {
      return banksData?.data?.banks.map((bankData: { bankName: any; bankCode: any }) => ({
        label: bankData?.bankName,
        value: bankData?.bankCode
      }));
    }
  }, [banksData]);

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

  const handleSubmitClick: SubmitHandler<FormValues> = (values) => {
    const { accountNumber, amount, narration, pin } = values;
    const { bankCode, bankName } = detailsToVerify;

    if (!activeWallet) {
      return toast.error('Please select a wallet to withdraw from');
    }

    if (pin.length < 4) {
      return toast.error('Please enter pin');
    }

    if (!bankDetails?.data?.accountName) {
      return toast.error('Beneficiary details not verified');
    }

    if (amount.length > 0 && bankCode) {
      sendMoneyAsync({
        beneficiaryAccountName: bankDetails?.data?.accountName,
        beneficiaryAccountNumber: accountNumber,
        beneficiaryBankName: bankName,
        beneficiaryBankCode: bankCode,
        sourceAccountNumber: activeWallet?.accountNumber,
        transactionAmount: amount,
        currencyCode: 'NGN',
        narration,
        reference: uuidv4(),
        pin
      })
        .then(() => {
          toast.success('Transaction completed successfully');
          onClose();
          navigate(PRIVATE_PATHS.PAYOUT_HISTORY);
        })
        .catch((error) => {
          if (Array.isArray(error?.response?.data?.errors)) {
            const errorMessages = error?.response?.data?.errors;

            errorMessages.forEach((error: any) =>
              toast.error(`${error?.fieldName} ${error?.message}`)
            );
          } else {
            toast.error(error?.response?.data?.responseMessage || error?.response?.data?.message);
          }
        });
    }
  };

  return (
    <Popup title='Withdraw from Account' onClose={onClose}>
      <div className='w-full relative'>
        <div className='w-full h-[2px] bg-[#F5F6FA] my-4' />
        <p className='text-[#000] text-base font-medium'>Select account to withdraw from</p>
        <div className='w-full overflow-x-auto overflow-y-clip my-4 grid grid-flow-col gap-[15px]'>
          {walletBalanceLoading && (
            <>
              <CurrencyCardPickerSkeleton />
              <CurrencyCardPickerSkeleton />
              <CurrencyCardPickerSkeleton />
            </>
          )}
          {walletBalanceData?.data?.length! < 1 && (
            <p className='text-[#EF4444] text-base font-medium'>No wallet found.</p>
          )}
          {!walletBalanceLoading &&
            walletBalanceData?.data?.length! > 1 &&
            walletBalanceData?.data?.map((item) => (
              <CurrencyCardPicker
                key={item.accountNumber}
                currency={item.currency}
                amount={item.balance}
                active={item.accountNumber === activeWallet?.accountNumber}
                onClick={() => setActiveWallet(item)}
              />
            ))}
        </div>
        <form onSubmit={handleSubmit(handleSubmitClick)} className='flex flex-col gap-[25px]'>
          <CustomInput
            {...register('amount', {
              required: true,
              pattern: /^[0-9]+$/
            })}
            placeholder='0.00'
            label='Amount to Withdraw'
            className='w-full'
            InputClassName=' h-[40px]'
          />
          <div className='flex flex-col relative'>
            <label className='text-[#6F7482] text-[12px] leading-normal tracking-[0.12px] font-medium'>
              Receiving Bank
            </label>
            <Select
              options={bankDataForSelect}
              classNamePrefix='Select Bank'
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
            placeholder='e.g. 0123456789'
            label='Account Number'
            className='w-full'
            InputClassName=' h-[40px]'
            {...register('accountNumber', {
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 10,
              maxLength: 10,
              onChange: (e) =>
                setDetailsToVerify({
                  ...detailsToVerify,
                  accountNumber: e.target.value
                })
            })}
          />
          {isLoading && <FontAwesomeIcon className='mt-[10px] mr-[auto]' icon={faSpinner} spin />}
          {bankDetails && (
            <p className='text-[#3EAF3F] text-[14px] font-medium'>
              {bankDetails?.data?.accountName}
            </p>
          )}
          <CustomInput
            {...register('narration', {
              required: true
            })}
            label='Narration'
            placeholder=''
            InputClassName=' h-[40px]'
          />

          <CustomInput
            placeholder='****************'
            label='Transaction Pin'
            type='password'
            className='w-full'
            InputClassName=' h-[40px]'
            {...register('pin', {
              required: true,
              pattern: /^[0-9]+$/
            })}
          />
          <div className='flex w-full gap-5 mb-4'>
            <Button
              name='Cancel Action'
              type={'button'}
              onClick={onClose}
              className='bg-white border-solid rounded-[6px] text-[#EF4444] border-[#EF4444] border-[2px] w-[150px] h-[50px] font-medium'
            />
            <Button
              isBusy={isMoneySending}
              type={'submit'}
              name='Process Payout'
              disabled={walletBalanceData?.data?.length! < 1}
              className=' w-[200px] h-[50px] font-medium'
            />
          </div>
        </form>
      </div>
    </Popup>
  );
};
