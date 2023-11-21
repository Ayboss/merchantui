import React from 'react';
const ProfileInfo: React.FC<{}> = () => {
  return (
    <div className='w-[746px] h-[600px] rounded-[5px] bg-white border border-solid border-[#F5F5F8]'>
      <p className='pt-7 pl-7 text-[#444] text-[21px] font-semibold'>My Profile</p>
      <div className='border border-solid border-[#F5F6FA] my-3'></div>
      <div className='px-7'>
        <div className='mb-6'>
          <label className='text-[10px] text-[#6F7482] font-medium mb-1'>First Name</label>
          <p className='bg-[#FAFAFB] w-full border border-solid border-[#F5F6FA] rounded p-2 text-[#444444]'>
            Anthony
          </p>
        </div>
        <div className='mb-6'>
          <label className='text-[10px] text-[#6F7482] font-medium mb-1'>Surname</label>
          <p className='bg-[#FAFAFB] w-full border border-solid border-[#F5F6FA] rounded p-2 text-[#444444]'>
            Irikefe
          </p>
        </div>
        <div className='mb-6'>
          <label className='text-[10px] text-[#6F7482] font-medium mb-1'>Contact Number</label>
          <p className='bg-[#FAFAFB] w-full border border-solid border-[#F5F6FA] rounded p-2 text-[#444444]'>
            +2346767676767
          </p>
        </div>
        <div className='mb-6'>
          <label className='text-[10px] text-[#6F7482] font-medium mb-1'>Email Address</label>
          <p className='bg-[#FAFAFB] w-full border border-solid border-[#F5F6FA] rounded p-2 text-[#444444]'>
            irikefeAnthony@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
