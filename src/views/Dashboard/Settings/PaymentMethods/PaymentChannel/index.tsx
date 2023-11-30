import React from 'react';
import ToggleSwitch from '../ToggleContent';
import SaveSVG from '../../../../../assets/icons/save-icon.svg';
import { Button } from '../../../../../components';
import BorderDivider from '../../BorderDIvider';

const PaymentChannels: React.FC = () => {
  return (
    <div>
      <div className='mx-7 mb-14'>
        <ToggleSwitch title='Card Payment' />
        <ToggleSwitch title='Bank Transfer' />
        <ToggleSwitch title='USSD Payment' />
        <ToggleSwitch title='MOMO Payment' />
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

export default PaymentChannels;
