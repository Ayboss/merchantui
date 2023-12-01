import React from 'react';
import CopySVG from '../../../../assets/icons/copy-icon.svg';
import { Button } from '../../../../components';
import FlexRow from './FlexRow';

const BankDetailsCard: React.FC = () => {
  return (
    <div className='w-[450px] border border-[#E4E4E7] bg-white rounded-[5px] ml-10 px-6 py-10 '>
      <p className='text-[#444] text-[16px] font-semibold'>My Bank Account Details</p>
      <div className='border border-[#E4E4E7] mt-5 mb-7'></div>
      <FlexRow leftItem='Bank Name' rightItem='Wema' />
      <FlexRow leftItem='Account Number' rightItem='1234567890' />
      <FlexRow leftItem='Account Name' rightItem='Sample Business Name' />
      <FlexRow leftItem='Account Reference' rightItem='1234567890' />
      <FlexRow leftItem='Sort code' rightItem='1234567890' />
      <div className='border border-[#E4E4E7] mt-3 mb-5'></div>
      <Button
        className='bg-[#6231F4] h-[45px] w-[390px] rounded-[6px]'
        name={
          <span className=' text-[13px] flex items-center gap-[10px] justify-center  font-extrabold'>
            <img src={CopySVG} alt='' />
            Copy Details
          </span>
        }
      />
    </div>
  );
};

export default BankDetailsCard;
