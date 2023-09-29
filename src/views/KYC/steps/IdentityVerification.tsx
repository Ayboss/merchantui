import React from 'react';
import clsx from 'clsx';
import { Button, CustomInput, inlineButtonClass } from '../../../components';
import { FileUploadDropzone } from '../../../components/FileDropzoneUpload';
import { ChildComponentsDefaultProps } from '..';

export const IdentityVerification: React.FC<Partial<ChildComponentsDefaultProps>> = ({
  handleBack,
  handleNext
}) => {
  return (
    <div className='w-full flex flex-col gap-[30px]'>
      <div className='w-full flex flex-col gap-[30px]'>
        <CustomInput
          name='BVN (Bank Verification Number)'
          placeholder='Enter your BVN'
          label='BVN (Bank Verification Number)'
          className='w-full'
        />
        <FileUploadDropzone label='Upload ID Documents' />
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
