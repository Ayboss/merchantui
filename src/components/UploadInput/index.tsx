import React from 'react';
import {
  FormGroup,
  InputLabel,
  InputContent,
  LabelTitle,
  LabelSubtitle,
  UploadField
} from './styles';
import { UploadInputProp } from './type';

export const UploadInput: React.FC<UploadInputProp> = () => {
  return (
    <FormGroup>
      <InputLabel htmlFor='dropzone-file'>
        <InputContent>
          <svg
            aria-hidden='true'
            className='w-10 h-10 mb-3 text-[#855FF6]'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
            ></path>
          </svg>
          <LabelTitle>Drop your files here or browse</LabelTitle>
          <LabelSubtitle>Max. Size : 20MB</LabelSubtitle>
        </InputContent>
        <UploadField id='dropzone-file' type='file' />
      </InputLabel>
    </FormGroup>
  );
};

export default UploadInput;
