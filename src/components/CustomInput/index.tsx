import React, { forwardRef, useState } from 'react';
import { clsx } from 'clsx';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormGroup, InputLabel, Input } from './styles';
import { CustomInputProps } from './types';

export const CustomInput: React.FC<CustomInputProps> = forwardRef((props, ref) => {
  const { label, type, placeholder, className, errorText, InputClassName, ...rest } = props;

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
        className={clsx(
          'h-[48px] placeholder:text-[#B8BCCA] placeholder:text-[14px] placeholder:tracking-[0.14px] w-full border-[#B8BCCA] border-[1px] rounded text-[#3B4256] bg-white text-[14px] leading-[17px] font-normal p-3 focus:outline-[#6231F4]',
          InputClassName
        )}
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
      {errorText && (
        <span className='text-[#F04438] absolute bottom-[-20px] text-[12px] font-normal'>
          {errorText}
        </span>
      )}
    </FormGroup>
  );
});

export default CustomInput;
