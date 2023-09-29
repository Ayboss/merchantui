import React, { useMemo } from 'react';
import clsx from 'clsx';
import Select from 'react-select';
import { Button, CustomInput, inlineButtonClass } from '../../../components';
import { ChildComponentsDefaultProps } from '..';
import { useGetBanksQuery } from '../../../services/hooks';

export const SettlementBankInfo: React.FC<Partial<ChildComponentsDefaultProps>> = ({
  handleBack,
  handleNext
}) => {
  const { data: banksData, isLoading: isLoadingBanks } = useGetBanksQuery();

  const bankDataForSelect = useMemo(() => {
    if (banksData?.data?.banks) {
      return banksData?.data?.banks.map((bankData: { bankName: any; bankCode: any }) => ({
        label: bankData?.bankName,
        value: bankData?.bankCode
      }));
    }
  }, [banksData]);

  return (
    <div className='w-full flex flex-col gap-[30px]'>
      <div className='w-full flex flex-col gap-[30px]'>
        <div className='flex flex-col gap-[5px] relative'>
          <label className='text-[#6F7482] text-[10px] leading-normal font-medium'>Bank Name</label>
          <Select
            options={bankDataForSelect}
            classNamePrefix='Select Bank'
            isLoading={isLoadingBanks}
            isSearchable
            isClearable
            className=' w-full'
          />
        </div>
        <CustomInput
          name='Account Number'
          placeholder='Enter your account number'
          label='Account Number'
          className='w-full'
          InputClassName=' h-[40px]'
        />
        <CustomInput
          name='Account Name'
          placeholder=''
          label='Account Name'
          disabled={true}
          className='w-full'
          InputClassName=' h-[40px]  bg-[#F4F4F5]'
        />

        <div className='w-full'>
          <h3 className='text-[#444] text-base font-bold tracking-[0.18px]'>
            Setup Transaction Pin
          </h3>
          <p className='text-[#6F7482] font-normal leading-[24px] text-[12px]'>
            This pin will be required for every payout you initiate
          </p>
        </div>

        <div className='w-full flex <1024:flex-col gap-5 items-start'>
          <CustomInput
            name='Transaction Pin'
            placeholder=''
            label='Transaction Pin'
            className='w-full'
            InputClassName=' h-[40px]'
          />
          <CustomInput
            name='Re-enter Transaction Pin'
            placeholder=''
            label='Re-enter Transaction Pin'
            className='w-full'
            InputClassName=' h-[40px]'
          />
        </div>

        <div className='w-full mt-10 flex items-center justify-between'>
          <Button
            name='Previous'
            className={clsx(
              inlineButtonClass,
              'h-[40px] border border-solid rounded-[6px] border-[#6231F4] text-[#6231F4] w-[120px] font-medium text-[12px]'
            )}
            onClick={handleBack}
          />
          <div className='flex gap-5 items-center'>
            <Button
              className={clsx(
                inlineButtonClass,
                'h-[40px] border border-solid rounded-[6px] border-[#B8BCCA] text-[#B8BCCA] w-[100px] font-medium text-[12px]'
              )}
              name='Skip for now'
            />
            <Button
              name='Submit'
              className='h-[40px] rounded-[6px] w-[100px] font-medium text-[12px] m-0'
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
