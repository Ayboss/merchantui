import React from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type AccordionItemPropsType = {
  title: string;
  subtitle: string;
  onClick: () => void;
  content: string;
  active: boolean;
  className?: string;
};

export const AccordionItem: React.FC<AccordionItemPropsType> = (props) => {
  const { content, onClick, subtitle, title, active, className } = props;

  const handleClick = () => {
    onClick()!;
  };

  return (
    <div
      className={`rounded-[4px] shadow-[0px 4px 8px rgba(0, 0, 0, 0.04)]  bg-[#FFFFFF] relative w-full ${className}`}
    >
      <button
        onClick={handleClick}
        className={`w-full text-[#333333] shadow-[0px 4px 8px rgba(0, 0, 0, 0.04)] rounded-[4px] outline-none flex justify-between items-center p-[24px] border-solid border-[0.3px] border-[rgba(211, 211, 211, 0.3)] ${
          active &&
          'bg-[#6231F4] text-[#ffffff] shadow-[0px 73px 80px rgba(0, 0, 0, 0.07), 0px 22.0074px 24.1177px rgba(0, 0, 0, 0.0507818), 0px 9.14073px 10.0172px rgba(0, 0, 0, 0.0377087), 0px 3.30602px 3.62304px rgba(0, 0, 0, 0.0290472)]'
        } `}
      >
        <p className='font-semi-bold text-[15px]'>{title}</p>
        <FontAwesomeIcon
          className={`${active && 'transform rotate-90 '} transition duration-300 ease-in-out`}
          icon={faChevronRight}
        />
      </button>
      {active && (
        <div className='bg-[#FFFFFF] p-[24px]'>
          <p className='font-semi-bold text-[#737373] text-[15px]'>{subtitle}</p>
          <p className='text-[#737373] font-normal text-[15px]'>{content}</p>
        </div>
      )}
    </div>
  );
};
