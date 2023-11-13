import React, { useState } from 'react';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import { Button } from '../../../components';
import { cn } from '../../../utils';
import { ChildComponentsDefaultProps } from '..';
import { useProfileMutation } from '../../../services/hooks/useProfileMutation';
import {
  BusinessCatgoryResponseType,
  useGetBusinessCategory
} from '../../../services/hooks/useGetBusinessCategory';

const BusinessTypes = [null, null, null, null, null];

export const ChooseBusinessCategory: React.FC<Partial<ChildComponentsDefaultProps>> = ({
  handleNext
}) => {
  const [activeBox, setActiveBox] = useState(-1);

  const { mutateAsync, isLoading } = useProfileMutation();

  const { data: businessCategoryData, isLoading: isBusinessCategoryLoading } =
    useGetBusinessCategory();

  const handleSubmitClick = () => {
    if (activeBox < 0) {
      return toast.error('Please select a valid business category');
    }
    mutateAsync({
      businessCategory: businessCategoryData?.data![activeBox].name,
      categoryId: businessCategoryData?.data![activeBox].id
    })
      .then(() => {
        toast.success('Business Category selected successfully');
        handleNext?.();
      })
      .catch(() => toast.error('Error choosing business category. Please try again'));
  };

  return (
    <div className='w-full flex flex-col max-h-[800px] overflow-auto items-start gap-5'>
      {isBusinessCategoryLoading &&
        BusinessTypes.map((_, index) => <BusinessCategoryItemSkeleton key={index} />)}
      {!isBusinessCategoryLoading &&
        businessCategoryData?.data?.map((item: BusinessCatgoryResponseType, index: number) => (
          <BusinessItemRadio
            isActive={activeBox === index}
            onClick={() => setActiveBox(index)}
            key={item.name}
            {...item}
          />
        ))}

      <Button
        onClick={handleSubmitClick}
        isBusy={isLoading}
        name='Choose Business Category'
        className='max-w-[180px] ml-auto h-[50px] text-[12px] font-medium mb-[30px]'
      />
    </div>
  );
};

type BusinessItemRadioPropType = {
  onClick: () => void;
  isActive: boolean;
} & Partial<BusinessCatgoryResponseType>;

export const BusinessItemRadio: React.FC<BusinessItemRadioPropType> = ({
  name,
  onClick,
  isActive
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        clsx(
          'bg-white border-[2px] p-[13px] items-start border-gray-200 rounded-lg relative  h-16 w-full flex gap-[15px] cursor-pointer',
          isActive && 'border-[#4A3AFF]'
        )
      )}
      onKeyDown={() => {}}
    >
      <input
        type='radio'
        onChange={onClick}
        checked={isActive}
        className='h-3 w-3 border-[#B8BCCA] cursor-pointer'
      />
      <div className='flex flex-col gap-1'>
        <h3 className='text-[#444] text-[15px] font-semibold leading-none '>{name}</h3>
      </div>
    </div>
  );
};

export const BusinessCategoryItemSkeleton = () => {
  return (
    <div className='w-full flex items-center justify-between bg-gray-200 rounded-lg relative h-10 gap-[15px] animate-pulse'>
      <div className='h-3 w-3 border-[#B8BCCA]]'></div>
      <div className='flex flex-col gap-1'>
        <h3 className='text-[#444] text-[15px] font-semibold leading-none '></h3>
        <p className='text-[#444] text-[12px] font-normal'></p>
      </div>
    </div>
  );
};
