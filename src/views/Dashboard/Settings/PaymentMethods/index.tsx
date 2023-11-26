import React from 'react';
import SettingsTop from '../SettingsTop';
import PaymentSVG from '../../../../assets/icons/payment-icon.svg';
import TabsContainer from './TabsContainer';
// import Header from '../Header';

const PaymentMethods = () => {
  return (
    <React.Fragment>
      <SettingsTop />
      <div className='flex items-start'>
        <div className='w-[300px] h-[281px] bg-white rounded-[5px] border border-[#F4F4F5] flex flex-col items-center justify-center '>
          <img src={PaymentSVG} alt='Payment Icon' className='h-[50px] w-[50px] mb-5' />
          <div className='bg-[#F5F5F8] w-[250px] h-[161px] flex flex-col items-center justify-center py-5 px-2'>
            <h2 className='text-[16px] text-[#444] font-semibold mb-5'>About Payment Options</h2>
            <p className='text-[16px] text-[#444] font-normal text-center'>
              Choose the various channels that you would like to receive payments on
            </p>
          </div>
        </div>
        <div className='w-[746px] h-[754px] bg-white rounded-[12px] ml-7 pt-8'>
          <h3 className='text-[#444] text-[21px] pl-7 mb-10 font-semibold'>
            Payment Configuration
          </h3>
          <TabsContainer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentMethods;
