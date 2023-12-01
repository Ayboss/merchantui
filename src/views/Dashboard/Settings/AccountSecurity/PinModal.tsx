import React from 'react';
import BorderDivider from '../BorderDIvider';
import { Popup, Button, CustomInput } from '../../../../components';

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Popup title='Change Transaction Pin' onClose={onClose}>
      <BorderDivider />
      <div className='mx-10 flex flex-col gap-5 pt-7 mb-10'>
        <CustomInput
          placeholder='Please enter your current Pin'
          type='password'
          name='Current Pin'
          label='Current Pin'
        />
        <CustomInput
          placeholder='Please enter a 6-digit Pin.'
          type='password'
          name='New Pin'
          label='New Pin'
        />
        <CustomInput
          placeholder='* * * * * *'
          type='password'
          name='Confirm Pin'
          label='Confirm Pin'
        />
      </div>
      <Button
        className='bg-[#6231F4]  mt-7 w-[200px] h-[50px] rounded-[10px] ml-10 text-[11px] font-extrabold'
        name='Save New Pin'
      />
    </Popup>
  );
};

export default Modal;
