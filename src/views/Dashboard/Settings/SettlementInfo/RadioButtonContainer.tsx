import React, { useState } from 'react';

interface RadioButtonOption {
  title: string;
  description: string;
  statements: string[];
}

interface RadioButtonProps {
  options: RadioButtonOption[];
  onChange: (index: number) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const handleOptionChange = (index: number) => {
    setSelectedOption(index);
    onChange(index);
  };

  return (
    <div>
      {options.map((option, index) => (
        <div
          key={index}
          className='mb-6 pl-4 py-4 bg-white border border-solid border-[#E4E4E7] rounded-[5px] w-[550px] '
        >
          <label className='flex items-center space-x-4'>
            <input
              type='radio'
              value={index}
              checked={selectedOption === index}
              onChange={() => handleOptionChange(index)}
              className='form-radio text-indigo-600 h-5 w-5'
            />
            <span className='text-lg font-semibold'>{option.title}</span>
          </label>
          <div className='ml-8'>
            <p className='text-gray-700 mb-2'>{option.description}</p>
            <ul className='list-disc pl-5'>
              {option.statements.map((statement, statementIndex) => (
                <li key={statementIndex} className='mb-1'>
                  {statement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
