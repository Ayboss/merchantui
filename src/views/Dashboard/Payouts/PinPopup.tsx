/* eslint-disable no-console */
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Button, Popup } from '../../../components';
import { SendMoneyRequestType, useSendMoney } from '../../../services/hooks';
import { FormGroup, Input } from '../../../components/CustomInput/styles';
import { PRIVATE_PATHS } from '../../../routes/paths';

export const PinPopup = ({
  onClose,
  dataToSend
}: {
  onClose: () => void;
  dataToSend: SendMoneyRequestType;
}) => {
  const [pin, setPin] = useState('');
  const { mutateAsync, isLoading } = useSendMoney();

  const navigate = useNavigate();

  const onClick = () => {
    if (pin.length < 4) {
      return toast.error('Please enter pin');
    }

    mutateAsync({ ...dataToSend, pin })
      .then(() => {
        toast.success('Transaction completed successfully');
        onClose();
        navigate(PRIVATE_PATHS.PAYOUT_HISTORY);
      })
      .catch((error) => {
        if (Array.isArray(error?.response?.data?.errors)) {
          const errorMessages = error?.response?.data?.errors;

          errorMessages.forEach((error: any) =>
            toast.error(`${error?.fieldName} ${error?.message}`)
          );
        } else {
          toast.error(error?.response?.data?.responseMessage || error?.response?.data?.message);
        }
      });
  };

  return (
    <Popup onClose={onClose}>
      <div className='p-[40px] flex flex-col items-center'>
        <h3 className='text-[#333333] text-center tracking-[2px] uppercase text-[18px] font-semi-bold'>
          Enter Pin
        </h3>
        <FormGroup>
          <Input
            value={pin}
            className='text-center'
            placeholder='*  *  *  *  *'
            onChange={(e) => setPin(e.target.value)}
          />
        </FormGroup>
        {/* <PinInput
          length={4}
          initialValue={''}
          secret
          secretDelay={300}
          onChange={(value: string) => setPin(value)}
          type='numeric'
          inputMode='number'
          regexCriteria={/^[0-9]*$/}
          inputFocusStyle={{ borderColor: '#6231F4' }}
          inputStyle={{ borderWidth: '2px', borderColor: '#80808070' }}
          autoSelect
        /> */}
        <Button
          isBusy={isLoading}
          name={'Send Money'}
          onClick={onClick}
          className='w-[150px] mt-4 font-semi-bold'
        />
      </div>
    </Popup>
  );
};
