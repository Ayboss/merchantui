import React, { useState } from 'react';
import toast from 'react-hot-toast';
import BorderDivider from '../BorderDIvider';
import { Popup, Button, CustomInput } from '../../../../components';
import { useTransactionPinMutation } from '../../../../services/hooks';

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [pinDetails, setPinDetails] = useState({
    oldPin: '',
    newPin: '',
    newPinConfirmation: ''
  });

  const { mutateAsync, isLoading } = useTransactionPinMutation();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setPinDetails({
      ...pinDetails,
      [name]: value
    });
  };

  const handleSubmit = () => {
    mutateAsync(pinDetails)
      .then(() => {
        toast.success('Pin changed successfully 🎉🎉');
        onClose();
      })
      .catch((error: any) => {
        toast.error(error?.response?.data?.responseMessage || error?.response?.data?.message);
      });
  };

  return (
    <Popup title='Change Transaction Pin' onClose={onClose}>
      <BorderDivider />
      <div className='mx-10 flex flex-col gap-5 pt-7 mb-10'>
        <CustomInput
          placeholder='Please enter your current Pin'
          type='password'
          name='oldPin'
          label='Current Pin'
          onChange={onChange}
        />
        <CustomInput
          placeholder='Please enter a 6-digit Pin.'
          type='password'
          name='newPin'
          label='New Pin'
          onChange={onChange}
        />
        <CustomInput
          placeholder='* * * * * *'
          type='password'
          name='newPinConfirmation'
          label='Confirm Pin'
          onChange={onChange}
        />
      </div>
      <Button
        className='bg-[#6231F4]  mt-7 w-[200px] h-[50px] rounded-[10px] ml-10 text-[11px] font-extrabold'
        name='Save New Pin'
        isBusy={isLoading}
        onClick={handleSubmit}
      />
    </Popup>
  );
};

export default Modal;
