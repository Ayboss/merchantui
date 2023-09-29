import React, { useState } from 'react';
import clsx from 'clsx';
import { Button, CustomInput, inlineButtonClass } from '../../../components';
import CountrySelectInput from '../../../components/CountrySelect';
import { FileUploadDropzone } from '../../../components/FileDropzoneUpload';
import { ChildComponentsDefaultProps } from '..';

export const BusinessInformation: React.FC<Partial<ChildComponentsDefaultProps>> = ({
  handleBack,
  handleNext
}) => {
  const [countryId, setCountryId] = useState(0);

  return (
    <div className='w-full flex flex-col gap-[30px]'>
      <div className='w-full flex flex-col gap-[30px]'>
        <div className='w-full flex <1024:flex-col gap-5 items-start'>
          <CustomInput
            name='Business Name'
            placeholder='Enter your Business Name'
            label='Business Name'
            className='w-[60%] <1280:w-full'
          />
          <CustomInput
            name='Business Registration Number'
            placeholder='e.g. BN 123456'
            label='Business Registration Number'
            className='w-[40%] <1280:w-full'
          />
        </div>
        <div className='w-full flex <1024:flex-col gap-5 items-start'>
          <CountrySelectInput
            placeholder='Select Country'
            label='Business Country'
            className='w-full'
            onChange={(e) => {
              setCountryId(e.id);
            }}
            type='country'
          />
          <CountrySelectInput
            placeholder='Select State/Region'
            label='Business State/Region'
            className='w-full'
            type='state'
            countryId={countryId}
            onChange={() => {}}
          />
        </div>
        <div className='w-full'>
          <CustomInput
            name='Business Address'
            placeholder='Enter your Business Address'
            label='Business Address'
          />
        </div>
        <FileUploadDropzone label='Upload Business Documents (e.g., Registration Certificate, Incorporation Documents)' />
        <div className='w-full flex items-center justify-between'>
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
              name='Next'
              className='h-[40px] rounded-[6px] w-[100px] font-medium text-[12px] m-0'
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
