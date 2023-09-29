import React from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudIcon } from './assets/cloud';
import { PlusIcon } from './assets/plus';

export const FileUploadDropzone: React.FC<{ label?: string }> = ({ label }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.pdf']
    }
  });

  //   const acceptedFileItems = acceptedFiles.map((file) => console.log(file));

  return (
    <div className='w-full'>
      <p className='text-[#6F7482] text-[11px] font-semibold'>{label}</p>
      <div
        {...getRootProps()}
        className='w-full max-w-[600px] h-[140px] cursor-pointer relative bg-white border border-dashed border-[#B8BCCA] flex flex-col items-center justify-center gap-3'
      >
        <CloudIcon />
        <input {...getInputProps()} />
        <span className='text-center max-w-[250px] text-[#6F7482] text-[10px] font-normal leading-4'>
          Browse or drag and drop the files you want to upload from your computer
          <em>(Only *images and *pdf will be accepted)</em>
        </span>
        <PlusIcon />
      </div>
    </div>
  );
};
