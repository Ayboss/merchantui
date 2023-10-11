import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Button, CustomInput, inlineButtonClass } from '../../../components';
import CountrySelectInput from '../../../components/CountrySelect';
import { FilePreview, FileUploadDropzone } from '../../../components/FileDropzoneUpload';
import { ChildComponentsDefaultProps } from '..';
import { useProfileMutation } from '../../../services/hooks/useProfileMutation';
import { useUploadBusinessDocument } from '../../../services/hooks/useDocumentUpload';
import { PRIVATE_PATHS } from '../../../routes/paths';

const schema = yup.object({
  businessAddress: yup.string().required(),
  businessInformation: yup.string().required(),
  tin: yup.string()
});

export const BusinessInformation: React.FC<Partial<ChildComponentsDefaultProps>> = ({
  handleNext,
  profileDetails
}) => {
  const [countryId, setCountryId] = useState(0);
  const [businessDetails, setBusinessDetails] = useState({
    country: '',
    state: ''
  });

  const [files, setFiles] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      businessAddress: profileDetails?.data?.businessInformation,
      businessInformation: profileDetails?.data?.businessInformation,
      tin: profileDetails?.data?.tin
    }
  });

  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles: any[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { mutateAsync, isLoading } = useProfileMutation();
  const { mutateAsync: documentUploadAsync, isLoading: isDocumentUploadLoading } =
    useUploadBusinessDocument();

  const { country, state } = businessDetails;

  const onSubmit = async (values: any) => {
    const { businessAddress, businessInformation, tin } = values;

    const data = {
      businessAddress,
      businessInformation,
      tin,
      country,
      state
    };

    if (!country) {
      return toast.error('State is required');
    }
    if (!state) {
      return toast.error('State is required');
    }

    if (files.length < 1) {
      return toast.error('No files added. Please attach your business document');
    }
    try {
      const formData = new FormData();

      formData.append('companyProfile', files[0]);

      await Promise.all([mutateAsync(data), documentUploadAsync(formData)]);

      toast.success('Business Information updated successfully 🎉🎉');
      handleNext?.();
    } catch (error: any) {
      return toast.error(error?.response?.data?.error || error?.response?.data?.message);
    }
  };

  return (
    <div className='w-full flex flex-col gap-[30px]'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-[30px]'>
        <CustomInput
          placeholder='Enter your Business Name'
          label='Business Name'
          className='w-full'
          errorText={errors.businessInformation?.message}
          defaultValue={profileDetails?.data?.businessInformation}
          {...register('businessInformation')}
        />
        <CustomInput
          placeholder='e.g. BN 123456'
          label='Tax Identification Number (optional)'
          className='w-full'
          errorText={errors.tin?.message}
          {...register('tin')}
        />
        <div className='w-full flex <1024:flex-col gap-3 items-start'>
          <CountrySelectInput
            placeholder='Select Country'
            label='Business Country'
            className='w-full'
            onChange={(e) => {
              setCountryId(e.id);
              setBusinessDetails({
                ...businessDetails,
                country: e.name
              });
            }}
            type='country'
          />
          <CountrySelectInput
            placeholder='Select State/Region'
            label='Business State/Region'
            className='w-full'
            type='state'
            countryId={countryId}
            onChange={(e) => {
              setBusinessDetails({
                ...businessDetails,
                state: e.name
              });
            }}
          />
        </div>
        <div className='w-full'>
          <CustomInput
            placeholder='Enter your Business Address'
            label='Business Address'
            errorText={errors.businessAddress?.message}
            {...register('businessAddress')}
          />
        </div>
        <FileUploadDropzone
          onDrop={onDrop}
          label='Upload Business Documents (e.g., Registration Certificate, Incorporation Documents)'
        />
        <div className='w-full flex flex-col gap-3'>
          {files.length > 0 &&
            files.map((file: File) => (
              <FilePreview
                key={file.name}
                onCancel={() => {
                  const newFiles = files.filter((item: File) => item.name !== file.name);

                  setFiles(newFiles);
                }}
                file={file}
              />
            ))}
        </div>
        <div className='w-full flex items-center justify-between'>
          <div className='flex gap-5 w-full justify-between items-center'>
            <Button
              className={clsx(
                inlineButtonClass,
                'h-[40px] border border-solid rounded-[6px] border-[#B8BCCA] text-[#B8BCCA] w-[100px] font-medium text-[12px]'
              )}
              name='Skip for now'
              type={'button'}
              onClick={() => navigate(PRIVATE_PATHS.OVERVIEW)}
            />
            <Button
              name='Next'
              type={'submit'}
              isBusy={isLoading || isDocumentUploadLoading}
              className='h-[40px] rounded-[6px] w-[100px] font-medium text-[12px] m-0'
            />
          </div>
        </div>
      </form>
    </div>
  );
};
