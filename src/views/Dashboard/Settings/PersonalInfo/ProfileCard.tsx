import React from 'react';
import ProfileImage from '../../../../assets/img/profile-image.jpg';

const ProfileCard: React.FC<{}> = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center w-[300px] h-[423px] rounded-[5px] bg-white border border-solid border-[#F5F5F8] mr-6 pt-6'>
        <img src={ProfileImage} alt='' className='h-[120px] w-[120px] rounded-[120px]' />
        <p className='text-[20px] text-[#444] font-semibold mt-5 mb-2'>Irikefe Anthony</p>
        <p className='text-[13px] text-[#A1A1AA] font-medium'>IrikefeAnthony@example.com</p>
        <div className='h-[40px] w-[180px] bg-[#6231F4] rounded-[10px] flex items-center justify-center mt-7'>
          <button className=' py-4 text-white text-[13px] font-bold'>Upload New Photo</button>
        </div>
        <div className='mt-5 w-[250px] h-[62px] bg-[#F5F5F8] flex justify-center items-center'>
          <p className='text-[#A1A1AA] text-center text-[11px]'>
            Larger images will be resized automatically. Maximym upload size is 1 MB
          </p>
        </div>
      </div>
      <p className='text-[#A1A1AA] text-[14px] font-bold mt-5 text-center mr-5'>
        Member Since: 03 August, 2023
      </p>
    </div>
  );
};

export default ProfileCard;
