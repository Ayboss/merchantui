import React from 'react';
import { getFromLocal } from '../../../../utils';
import { UserDetails } from '../../../../services/hooks/types';
import TwoRowText from './TwoRowText';

const ProfileInfo: React.FC<{}> = () => {
  const user = JSON.parse(getFromLocal('user') as string) as unknown as UserDetails;

  return (
    <div
      style={{
        boxShadow: '0px 4px 9px 0px rgba(13, 68, 178, 0.10)'
      }}
      className='w-[746px] h-[600px] rounded-[5px] bg-white border border-solid border-[#F5F5F8]'
    >
      <p className='pt-7 pl-7 text-[#444] text-[21px] font-semibold'>My Profile</p>
      <div className='border border-solid border-[#F5F6FA] my-3'></div>
      <div className='px-7'>
        <TwoRowText label='First Name' value={user?.firstName} />
        <TwoRowText label='Surname' value={user?.lastName} />
        <TwoRowText label='Contact Number' value={user?.mobileNumber} />
        <TwoRowText label='Email Address' value={user?.email} />
      </div>
    </div>
  );
};

export default ProfileInfo;
