import React from 'react';
import { getFromLocal } from '../../../../utils';
import { UserDetails } from '../../../../services/hooks/types';

const ProfileCard: React.FC<{}> = () => {
  const user = JSON.parse(getFromLocal('user') as string) as unknown as UserDetails;

  return (
    <div>
      <div className='flex flex-col justify-center items-center w-[300px] h-[423px] rounded-[5px] bg-white border border-solid border-[#F5F5F8] mr-6 pt-6'>
        <img src='' alt='' className='h-[120px] w-[120px] rounded-[120px]' />
        <p className='text-[20px] text-[#444] font-semibold mt-5 mb-2'>
          {user?.firstName} {user?.lastName}
        </p>
        <p className='text-[13px] text-[#A1A1AA] font-medium'>{user?.email}</p>
        <div className='h-[40px] w-[180px] bg-[#6231F4] rounded-[10px] flex items-center justify-center mt-7'>
          <button className=' py-4 text-white text-[13px] font-bold'>Upload New Photo</button>
        </div>
        <div className='mt-5 w-[250px] h-[62px] bg-[#F5F5F8] flex justify-center items-center'>
          <p className='text-[#A1A1AA] text-center text-[11px]'>
            Larger images will be resized automatically. Maximum upload size is 1 MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
