import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import { getFromLocal } from '../../../../utils';
import defaultProfile from '../../../../assets/icons/defaultProfile.svg';
import { UserDetails } from '../../../../services/hooks/types';
import { useGetBusinessLogo } from '../../../../services/hooks';
import { useUploadBusinessLogo } from '../../../../services/hooks/useUploadBusinessLogo';

const ProfileCard: React.FC = () => {
  const user = JSON.parse(getFromLocal('user') as string) as unknown as UserDetails;
  const [preview, setPreview] = useState([]);

  const { mutateAsync: documentUploadAsync } = useUploadBusinessLogo();
  const { data: businessLogo } = useGetBusinessLogo();

  const handlePhotoUpload = async (files: Array<any>) => {
    try {
      const formData = new FormData();

      formData.append('businessLogo', files[0]);

      await Promise.all([documentUploadAsync(formData)]);

      toast.success('Business logo updated successfully 🎉🎉');
    } catch (error: any) {
      return toast.error(error?.response?.data?.error || error?.response?.data?.message);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setPreview(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        ) as any
      );
      handlePhotoUpload(acceptedFiles);
    },
    maxSize: 1000000
  });

  return (
    <div
      style={{
        boxShadow: '0px 4px 9px 0px rgba(13, 68, 178, 0.10)'
      }}
      className='flex flex-col justify-center items-center w-[300px] h-[423px] rounded-[5px] bg-white border border-solid border-[#F5F5F8] mr-6 pt-6'
    >
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <img
          // @ts-ignore
          src={businessLogo?.data ?? preview[0]?.preview ?? defaultProfile}
          alt='defaultProfile'
          className='h-[120px] w-[120px] cursor-pointer rounded-[120px] object-cover object-center '
        />
      </div>
      <p className='text-[20px] text-[#444] font-semibold mt-5 mb-2'>
        {user?.firstName} {user?.lastName}
      </p>
      <p className='text-[13px] text-[#A1A1AA] font-medium'>{user?.email}</p>
      <div
        {...getRootProps()}
        className='h-[40px] w-[180px] bg-[#6231F4] rounded-[10px] flex items-center justify-center mt-7'
      >
        <input {...getInputProps()} />
        <button className=' py-4 text-white text-[13px] font-bold'>Upload Brand Identity</button>
      </div>
      <div className='mt-5 w-[250px] h-[62px] bg-[#F5F5F8] flex justify-center items-center'>
        <p className='text-[#A1A1AA] text-center text-[11px]'>
          Larger images will be resized automatically. Maximum upload size is 1 MB
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
