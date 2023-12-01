import React from 'react';
import BorderDivider from '../BorderDIvider';
import { Popup, Button } from '../../../../components';
import PasswordItem from './PasswordItem';

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Popup title='Change Password' onClose={onClose}>
      <BorderDivider />
      <div className='mx-10 pt-7 mb-10'>
        <PasswordItem label='Current Password' />
        <PasswordItem label='New Password' />
        <PasswordItem label='Confirm Password' />
      </div>
      <BorderDivider />
      <Button
        className='bg-[#6231F4]  mt-7 w-[200px] h-[50px] rounded-[10px] ml-10 text-[11px] font-extrabold'
        name='Save New Password'
      />
    </Popup>
  );
};

export default Modal;
