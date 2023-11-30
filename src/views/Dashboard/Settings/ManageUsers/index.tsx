import React from 'react';
import SettingsTop from '../SettingsTop';
import AddSVG from '../../../../assets/icons/Add-icon.svg';
import { Button } from '../../../../components';
import TableComponent from './Constants';

const ManageUsers: React.FC = () => {
  return (
    <React.Fragment>
      <SettingsTop />
      <div className='flex items-center justify-between'>
        <div className='text-[#444444]'>
          <h3 className=' text-[21px] font-semibold mb-2'>Manage Users</h3>
          <p className=' text-[16px] font-medium'>Profiles who have access to your account</p>
        </div>
        <Button
          className='bg-[#6231F4] mt-10 ml-7 h-[40px] w-[156px] rounded-[10px]'
          name={
            <span className=' text-[14px] flex items-center gap-[10px] justify-center  font-extrabold'>
              <img src={AddSVG} alt='Reset icon' />
              Add New Users
            </span>
          }
        />
      </div>
      <div className='h-[600px] w-[1076px] bg-white rounded-[10px] border border-[#E4E4E7] mt-7'>
        <div className='ml-8 mr-10 pt-5'>
          <TableComponent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ManageUsers;
