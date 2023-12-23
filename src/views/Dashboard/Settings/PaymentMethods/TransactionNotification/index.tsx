import React from 'react';
import SaveSVG from '../../../../../assets/icons/save-icon.svg';
import { Button } from '../../../../../components';
import BorderDivider from '../../BorderDIvider';
import ToggleSwitch from '../ToggleContent';
const TransNotification: React.FC = () => {
  return (
    <div>
      <div className='mx-7 mb-14'>
        <ToggleSwitch
          title='Merchant Receipt'
          text='Notify me on each payment made by customer (email)'
        />
        <ToggleSwitch
          title='Customer Receipt'
          text='Send email receipt on each successful payment by customer'
        />
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

export default TransNotification;
