import React, { useState } from 'react';
import AddSVG from '../../../../assets/icons/Add-icon.svg';
import Cloud from '../../../../assets/img/Cloud.png';
import { Button } from '../../../../components';
import AddBank from './AddBank';

const EmptyWalletCard: React.FC = () => {
  const [isAddBankModalOpen, setIsAddBankModalOpen] = useState(false);

  const openAddBankModal = () => {
    setIsAddBankModalOpen(true);
  };

  const closeAddBankModal = () => {
    setIsAddBankModalOpen(false);
  };

  return (
    <div className='w-[450px] border border-[#E4E4E7] bg-white rounded-[5px] ml-10 px-6 py-10 '>
      <p className='text-[#444] text-[16px] font-semibold'>My Bank Details</p>
      <div className='border border-[#E4E4E7] mt-5 mb-7'></div>
      <div className='flex flex-col items-center justify-center'>
        <img src={Cloud} alt='' />
        <p className='mt-3 text-[#6F7482] text-[11px]'>Nothing to show yet</p>
        <p className='mt-1 text-[#6F7482] text-[11px]'>Add a bank account annd start transacting</p>
      </div>
      <div className='border border-[#E4E4E7] mt-3 mb-5'></div>
      <Button
        onClick={openAddBankModal}
        className='bg-[#6231F4] h-[45px] w-[390px] rounded-[6px]'
        name={
          <span className=' text-[13px] flex items-center gap-[10px] justify-center  font-extrabold'>
            <img src={AddSVG} alt='' />
            Add Bank
          </span>
        }
      />
      {isAddBankModalOpen && <AddBank onClose={closeAddBankModal} />}
    </div>
  );
};

export default EmptyWalletCard;
