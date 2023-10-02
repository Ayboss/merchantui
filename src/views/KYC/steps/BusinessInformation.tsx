import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Button, CustomInput, inlineButtonClass } from '../../../components';
import CountrySelectInput from '../../../components/CountrySelect';
import { FilePreview, FileUploadDropzone } from '../../../components/FileDropzoneUpload';
import { ChildComponentsDefaultProps } from '..';
import { useProfileMutation } from '../../../services/hooks/useProfileMutation';
import { useUploadBusinessDocument } from '../../../services/hooks/useDocumentUpload';

const schema = yup.object({
  businessAddress: yup.string().required(),
  businessInformation: yup.string().required(),
  tin: yup.string()
});

export const BusinessInformation: React.FC<Partial<ChildComponentsDefaultProps>> = ({
  handleBack,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleNext
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
    resolver: yupResolver(schema)
  });

  const fileToBase64 = (file: File) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      // Read file content on file loaded event
      reader.onload = function (event) {
        resolve(event?.target?.result);
      };

      // Convert data to base64
      reader.readAsDataURL(file);
    });
  };

  const onDrop = useCallback((acceptedFiles: any[]) => {
    const filesWithPreview = acceptedFiles.map((file) => {
      let data = {
        ...file,
        preview: URL.createObjectURL(file)
      };

      fileToBase64(file).then((result) => {
        data = {
          ...data,
          base64: result
        };
      });

      // console.log(data);

      return data;
    });

    setFiles(filesWithPreview);
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [info, documents] = await Promise.all([
        mutateAsync(data),
        documentUploadAsync({ companyProfile: files[0].base64 })
      ]);
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
          {...register('businessInformation')}
        />
        <CustomInput
          placeholder='e.g. BN 123456'
          label='Tax Identification Number'
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
                onCancel={() => {
                  const newFiles = files.filter((item: File) => item.name !== file.name);

                  setFiles(newFiles);
                }}
                key={file.name}
                file={file}
              />
            ))}
        </div>
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
