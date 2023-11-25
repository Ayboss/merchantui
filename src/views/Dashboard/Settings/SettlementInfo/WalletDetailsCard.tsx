import React from 'react';
import CopySVG from '../../../../assets/icons/copy-icon.svg';
import FlexRow from './FlexRow';

const WalletDetailsCard: React.FC<{}> = () => {
  return (
    <div className='w-[450px] border border-[#E4E4E7] bg-white rounded-[5px] ml-10 px-6 py-10 '>
      <p className='text-[#444] text-[16px] font-semibold'>My Wallet Details</p>
      <div className='border border-[#E4E4E7] mt-5 mb-7'></div>
      <FlexRow leftItem='Bank Name' rightItem='Wema' />
      <FlexRow leftItem='Account Number' rightItem='1234567890' />
      <FlexRow leftItem='Account Name' rightItem='Sample Business Name' />
      <FlexRow leftItem='Account Reference' rightItem='1234567890' />
      <FlexRow leftItem='Sort code' rightItem='1234567890' />
      <div className='border border-[#E4E4E7] mt-3 mb-8'></div>
      <div className='flex items-center justify-center h-[45px] w-[390px] bg-[#6231F4] rounded-[6px] mx-auto'>
        <img src={CopySVG} alt='' />
        <button className='py-4 text-white text-[14px] font-medium ml-2'>Copy Details</button>
      </div>
    </div>
  );
};

export default WalletDetailsCard;
