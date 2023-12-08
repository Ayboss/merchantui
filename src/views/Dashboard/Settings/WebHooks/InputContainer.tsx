import React from 'react';

interface InputContainerProps {
  label: string;
  value: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputContainer: React.FC<InputContainerProps> = ({
  label,
  value,
  placeholder,
  name,
  onChange
}) => {
  return (
    <div className='mb-5'>
      <label className='text-[16px] text-[#6F7482] font-medium mb-2'>{label}</label>
      <div className='bg-[#FAFAFB] w-full border border-solid border-[#F5F6FA] rounded p-2'>
        <input
          type='text'
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className='w-full outline-none bg-[#FAFAFB] text-[#333]'
        />
      </div>
    </div>
  );
};

export default InputContainer;
