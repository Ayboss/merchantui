import React from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Button, CustomInput, inlineButtonClass } from '../../../components';
// import { FileUploadDropzone } from '../../../components/FileDropzoneUpload';
import { ChildComponentsDefaultProps } from '..';
import { UploadBvnRequestPayloadType, useUploadBvn } from '../../../services/hooks';
import { PRIVATE_PATHS } from '../../../routes/paths';

export const IdentityVerification: React.FC<Partial<ChildComponentsDefaultProps>> = ({
  handleNext
}) => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useUploadBvn();

  const onSubmit = (values: unknown) => {
    mutateAsync(values as UploadBvnRequestPayloadType)
      .then(() => {
        toast.success('BVN uploaded successfully');
        localStorage.setItem('isBVNSubmitted', 'true');
        handleNext?.();
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
  };

  return (
    <div className='w-full flex flex-col gap-[30px]'>
      <form className='w-full flex flex-col gap-[20px]' onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          placeholder='Enter your BVN'
          label='BVN (Bank Verification Number)'
          className='w-full'
          {...register('bvn', { required: true })}
        />
        <CustomInput
          placeholder='YYYY-MM-DD'
          label='Enter your date of birth'
          className='w-full'
          type='date'
          {...register('bvnDob', { required: true })}
        />
        <div className='w-full flex items-center justify-between'>
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
              name='Next'
              className='h-[40px] rounded-[6px] w-[100px] font-medium text-[12px] m-0'
              type={'submit'}
              isBusy={isLoading}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
