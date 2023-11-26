import React from 'react';
import SettingsTop from '../SettingsTop';
import AddSVG from '../../../../assets/icons/Add-icon.svg';

const ManageUsers = () => {
  return (
    <React.Fragment>
      <SettingsTop />
      <div className='flex items-center justify-between'>
        <div className='text-[#444444]'>
          <h3 className=' text-[21px] font-semibold mb-2'>Manage Users</h3>
          <p className=' text-[16px] font-medium'>Profiles who have access to your account</p>
        </div>
        <div className='flex items-center justify-center h-[40px] w-[156px] bg-[#6231F4] rounded-[6px] ml-7'>
          <img src={AddSVG} alt='' />
          <button className='py-4 text-white text-[14px] font-medium ml-2'>Add New Users</button>
        </div>
      </div>
      <div className='h-[600px] w-[1076px] bg-white rounded-[10px] border border-[#E4E4E7] mt-7'></div>
    </React.Fragment>
  );
};

export default ManageUsers;
