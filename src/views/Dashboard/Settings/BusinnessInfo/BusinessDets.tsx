import React, { useState } from 'react';
import TwoRowText from '../PersonalInfo/TwoRowText';
import EditIcon from '../../../../assets/img/edit_Icon.png';
import { Button } from '../../../../components';
import Modal from './Modal';

const ProfileInfo: React.FC<{}> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='w-[746px] h-[600px] rounded-[5px] bg-white border border-solid border-[#F5F5F8]'>
      <p className='pt-7 pl-7 text-[#444] text-[21px] font-semibold'>My Business</p>
      <div className='border border-solid border-[#F5F6FA] my-3'></div>
      <div className='px-7'>
        <div className='flex items-center w-full'>
          <div className='w-1/2 mr-4'>
            <TwoRowText label='Business Name' value='Global Ventures' />
          </div>
          <div className='w-1/2'>
            <TwoRowText label='Business Registration Number' value='1234567' />
          </div>
        </div>
        <div className='flex items-center w-full'>
          <div className='w-1/2 mr-4'>
            <TwoRowText label='Business Country' value='Nigeria' />
          </div>
          <div className='w-1/2'>
            <TwoRowText label='Business State/Region' value='Lagos' />
          </div>
        </div>
        <TwoRowText label='Business Address' value='123, Sample street, Lagos ' />
        <TwoRowText
          label='Business Description'
          value='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
        />
      </div>
      <div className='border border-solid border-[#F5F6FA] my-3'></div>
      <Button
        onClick={() => handleEditClick()}
        className='bg-[#6231F4] ml-7 mt-5 w-[188px] h-[45px] rounded-[10px]'
        name={
          <span className=' text-[11px] flex items-center gap-[10px] justify-center  font-extrabold'>
            <img src={EditIcon} alt='' />
            Edit Description
          </span>
        }
      />
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default ProfileInfo;
