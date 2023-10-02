import React from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faFile } from '@fortawesome/free-solid-svg-icons';
import { CloudIcon } from './assets/cloud';
import { PlusIcon } from './assets/plus';

export const FileUploadDropzone: React.FC<{ label?: string; onDrop?: (files: any) => void }> = ({
  label,
  onDrop
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.pdf']
    },
    onDrop,
    maxFiles: 1
  });

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

export const FilePreview = ({ file, onCancel }: { file: File; onCancel?: () => void }) => {
  return (
    <div
      key={file.name}
      className='w-full relative bg-[#f9f9f9] px-3 py-2 items-center rounded-md flex gap-5'
    >
      <FontAwesomeIcon className='h-6 w-6' icon={faFile} style={{ color: '#6231f4' }} />
      <div className='flex flex-col gap-0'>
        {/* @ts-ignore */}
        <p className='text-[#6F7482] font-semibold text-[14px]'>{file.path}</p>
        <p className='text-[12px] text-[#00ba48]'>Added Successfully</p>
      </div>
      {onCancel && (
        <FontAwesomeIcon
          onClick={onCancel}
          className='absolute right-3 top-3 cursor-pointer'
          icon={faCircleXmark}
          style={{ color: '#6f7482' }}
        />
      )}
    </div>
  );
};
