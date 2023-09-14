import React, { forwardRef, useState } from 'react';
import { clsx } from 'clsx';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormGroup, InputLabel, Input } from './styles';
import { CustomInputProps } from './types';

export const CustomInput: React.FC<CustomInputProps> = forwardRef((props, ref) => {
  const { label, type, placeholder, className, ...rest } = props;

  const [inputType, setInputType] = useState<string>('text');

  const passToggle = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const icon = inputType === 'password' ? faEyeSlash : faEye;

  return (
    <FormGroup className={clsx('flex flex-col gap-[5px] relative', className)}>
      <InputLabel className='text-[#6F7482] text-[10px] leading-normal font-medium'>
        {label}
      </InputLabel>
      <Input
        className='h-[48px] w-full border-[#B8BCCA] border-[1px] rounded text-[#3B4256] bg-white text-[14px] leading-[17px] font-normal p-3 focus:outline-[#0048D9]'
        type={inputType}
        placeholder={placeholder}
        /* @ts-ignore no overload matches for the ref */
        ref={ref}
        {...rest}
      />
      {type === 'password' && (
        <FontAwesomeIcon
          className='absolute cursor-pointer right-3 bottom-[25%]'
          onClick={passToggle}
          icon={icon}
          style={{ color: '#b8bcca' }}
        />
      )}
    </FormGroup>
  );
});

export default CustomInput;
