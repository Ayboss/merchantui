import React from 'react';
import SaveSVG from '../../../../../assets/icons/save-icon.svg';
import { Button } from '../../../../../components';
import BorderDivider from '../../BorderDIvider';
import ToggleSwitch from '../ToggleContent2';

const TransactionFees: React.FC = () => {
  return (
    <div>
      <div className='mx-7 mb-14'>
        <h2 className='text-[#444] text-[16px] font-semibold mb-4'>
          Who pays the Transaction Fees?
        </h2>
        <p className='text-[#444] text-[16px] font-normal mb-5'>
          By default, you bear the transaction fee on each transaction.
          <br /> You have the option to charge it to the customer.
        </p>
        <ToggleSwitch title='Turn on to charge Customer' text='Charge to Customer' />
      </div>
      <BorderDivider />
      <Button
        className='bg-[#6231F4] mt-8 ml-7 h-[45px] w-[188px] rounded-[10px]'
        name={
          <span className=' text-[11px] flex items-center gap-[10px] justify-center  font-extrabold'>
            <img src={SaveSVG} alt='Save icon' />
            Save Changes
          </span>
        }
      />
    </div>
  );
};

export default TransactionFees;
