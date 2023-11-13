import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { ChildComponentsDefaultProps } from '..';
import { useProfileMutation } from '../../../services/hooks/useProfileMutation';
import { Button } from '../../../components';
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
      return toast.error('Please select a valid business type');
    }
    mutateAsync({
      // @ts-expect-error
      businessType
    })
      .then(() => {
        toast.success('Business Type selected successfully');
        handleNext?.();
      })
      .catch(() => toast.error('Error choosing business type. Please try again'));
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
