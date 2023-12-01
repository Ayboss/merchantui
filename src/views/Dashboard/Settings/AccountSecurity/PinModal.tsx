import React from 'react';
import BorderDivider from '../BorderDIvider';
import { Popup, Button } from '../../../../components';
import PasswordItem from './PasswordItem';

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Popup title='Change Transaction Pin' onClose={onClose}>
      <BorderDivider />
      <div className='mx-10 pt-7 mb-10'>
        <PasswordItem label='Current Pin' />
        <p className='text-[#444], text-[16px] font-medium mb-3 mt-7'>
          Please enter a 6-digit Pin.
        </p>
        <PasswordItem label='New Pin' />
        <PasswordItem label='Confirm Pin' />
      </div>
      <BorderDivider />
      <Button
        className='bg-[#6231F4]  mt-7 w-[200px] h-[50px] rounded-[10px] ml-10 text-[11px] font-extrabold'
        name='Save New Pin'
      />
    </Popup>
  );
};

export default Modal;
