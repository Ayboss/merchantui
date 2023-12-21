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
import { CustomToastBody } from '../../../components/CustomToastBody';

export const IdentityVerification: React.FC<Partial<ChildComponentsDefaultProps>> = ({
  handleNext
}) => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useUploadBvn();

  const onSubmit = (values: unknown) => {
    mutateAsync(values as UploadBvnRequestPayloadType)
      .then(() => {
        toast.custom(
          (t) => (
            <CustomToastBody
              text='BVN uploaded successfully'
              toastId={t.id}
              type='success'
              className='mt-[140px]  ml-[230px] w-[500px] '
            />
          ),
          {
            duration: 7000,
            position: 'top-center'
          }
        );
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
          toast.custom(
            (t) => (
              <CustomToastBody
                text={error?.response?.data?.responseMessage || error?.response?.data?.message}
                toastId={t.id}
                type='error'
                className='mt-[140px]  ml-[230px] w-[500px] '
              />
            ),
            {
              duration: 7000,
              position: 'top-center'
            }
          );
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
