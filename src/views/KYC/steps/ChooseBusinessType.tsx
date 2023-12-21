import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { ChildComponentsDefaultProps } from '..';
import { useProfileMutation } from '../../../services/hooks/useProfileMutation';
import { Button } from '../../../components';
import { CustomToastBody } from '../../../components/CustomToastBody';
import { BusinessItemRadio } from './ChooseBusinessCategory';

const BUSINESS_TYPE = {
  STARTER: 'STARTER',
  REGISTERED: 'REGISTERED'
};

export const ChooseBusinessType: React.FC<Partial<ChildComponentsDefaultProps>> = ({
  handleNext
}) => {
  const [businessType, setBusinessType] = useState('');

  const { mutateAsync, isLoading } = useProfileMutation();

  const handleSubmitClick = () => {
    if (businessType === '') {
      return toast.custom(
        (t) => (
          <CustomToastBody
            text='Please select a valid business type'
            toastId={t.id}
            type='error'
            className='mt-[140px]  ml-[230px] w-[500px] '
          />
        ),
        {
          duration: 7000,
          position: 'top-center'
        }
      );
    }
    mutateAsync({
      // @ts-expect-error
      businessType
    })
      .then(() => {
        toast.custom(
          (t) => (
            <CustomToastBody
              text='Business Type selected successfully'
              toastId={t.id}
              type='success'
              className='mt-[140px]  ml-[230px] w-[500px] '
            />
          ),
          {
            duration: 7000,
            position: 'top-center'
          }
        );
        handleNext?.();
      })
      .catch(() =>
        toast.custom(
          (t) => (
            <CustomToastBody
              text='Error choosing business type. Please try again'
              toastId={t.id}
              type='error'
              className='mt-[140px]  ml-[230px] w-[500px] '
            />
          ),
          {
            duration: 7000,
            position: 'top-center'
          }
        )
      );
  };

  return (
    <div className='w-full flex flex-col max-h-[800px] overflow-auto items-start gap-5'>
      {Object.keys(BUSINESS_TYPE).map((item) => (
        <BusinessItemRadio
          isActive={item === businessType}
          onClick={() => setBusinessType(item)}
          key={item}
          name={item}
        />
      ))}

      <Button
        onClick={handleSubmitClick}
        isBusy={isLoading}
        name='Choose Business Type'
        className='max-w-[180px] ml-auto h-[50px] text-[12px] font-medium mb-[30px]'
      />
    </div>
  );
};
