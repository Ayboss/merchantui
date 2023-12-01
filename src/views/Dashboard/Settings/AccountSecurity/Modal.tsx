import React from 'react';
import BorderDivider from '../BorderDIvider';
import { Popup, Button, CustomInput } from '../../../../components';

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Popup title='Change Password' onClose={onClose}>
      <BorderDivider />
      <div className='mx-10 flex flex-col gap-5 pt-7 mb-10'>
        <CustomInput type='password' name='Current Password' label='Current Password' />
        <CustomInput type='password' name='New Password' label='New Password' />
        <CustomInput type='password' name='Confirm Password' label='Confirm Password' />
      </div>
      <Button
        className='bg-[#6231F4]  mt-7 w-[200px] h-[50px] rounded-[10px] ml-10 text-[11px] font-extrabold'
        name='Save New Password'
      />
    </Popup>
  );
};

export default Modal;
