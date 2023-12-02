import React, { useState } from 'react';

interface InputContainerProps {
  label: string;
  value: string;
  placeholder: string;
  onSave: (newValue: string) => void;
}

const InputContainer: React.FC<InputContainerProps> = ({ label, value, placeholder, onSave }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setInputValue(newValue);
    onSave(newValue);
  };

  return (
    <div className='mb-5'>
      <label className='text-[16px] text-[#6F7482] font-medium mb-2'>{label}</label>
      <div className='bg-[#FAFAFB] w-full border border-solid border-[#F5F6FA] rounded p-2'>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className='w-full outline-none bg-[#FAFAFB] text-[#6F7482]'
        />
      </div>
    </div>
  );
};

export default InputContainer;
