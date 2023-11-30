import React from 'react';
import { Button, Popup } from '../../../../components';
import BorderDivider from '../BorderDIvider';

interface AddBankProps {
  onClose: () => void;
}

interface ItemProps {
  label: string;
}

const Item: React.FC<ItemProps> = ({ label }) => {
  return (
    <div>
      <p className='font-medium text-[10px] text-[#6F7482] mb-2'>{label} </p>
      <div className='relative mb-4'>
        <input className='w-full border border-gray-300 p-2 rounded-md ' />
      </div>
    </div>
  );
};

const AddBank: React.FC<AddBankProps> = ({ onClose }) => {
  return (
    <Popup title='Settlement Bank Information' onClose={onClose}>
      <p className='text-[#6F7482] text-[16px] mb-10'>Setup your preferred bank for settlements</p>
      <Item label='Bank Name' />
      <Item label='Account Number' />
      <Item label='Account Name' />
      <p className='text-[#444] text-[18px] font-bold mb-2'>Setup a 4-Digit Transaction Pin</p>
      <p className='text-[#6F7482] text-[14px] font-normal mb-5'>
        This pin will be required for every payout you initiate
      </p>
      <div className='flex gap-10 items-center w-full'>
        <Item label='Transaction Pin' />
        <Item label='Re-enter Transaction Pin' />
      </div>
      <BorderDivider />
      <div className='flex gap-10 items-center'>
        <Button
          className='border border-[#EF4444] h-[45px] w-[150px] rounded-[6px] bg-transparent'
          name={<span className=' text-[13px] text-[#EF4444]'>Cancel Action</span>}
        />
        <Button
          className='bg-[#6231F4] h-[45px] w-[150px] rounded-[6px]'
          name={<span className=' text-[13px] font-extrabold'>Save Account</span>}
        />
      </div>
    </Popup>
  );
};

export default AddBank;
