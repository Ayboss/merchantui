import React from 'react';
import SettingsTop from '../SettingsTop';
import ApiSVG from '../../../../assets/icons/api-icon.svg';
import Header from '../Header';
import BorderDivider from '../BorderDIvider';
import TwoRowText from '../PersonalInfo/TwoRowText';
import ResetIconSVG from '../../../../assets/icons/reset-icon.svg';
import CopyIconSVG from '../../../../assets/icons/copy-icon.svg';
import { Button } from '../../../../components';

const ApiKeys: React.FC = () => {
  return (
    <React.Fragment>
      <SettingsTop />
      <div className='flex items-start'>
        <div className='w-[300px] h-[425px] bg-white rounded-[5px] border border-[#F4F4F5] flex flex-col items-center justify-center '>
          <img src={ApiSVG} alt='Payment Icon' className='h-[50px] w-[50px] mb-5' />
          <div className='bg-[#F5F5F8] w-[250px]  flex flex-col items-center py-5 px-5'>
            <h2 className='text-[16px] text-[#444] font-semibold mb-5'>About API Keys</h2>
            <p className='text-[16px] text-[#444] font-normal text-center pb-2'>
              Your API Keys are an essential part of your business with us. Your API Key will be
              required before you can make calls to any of our services or receive payments linked
              to this account. This applies to both test and live transactions
            </p>
          </div>
        </div>
        <div className='w-[746px] h-[560px] bg-white rounded-[12px] ml-7 pt-8'>
          <Header title='API Keys' />
          <BorderDivider />
          <div className='text-[16px] text-[444] mx-7 mt-7 mb-36'>
            <TwoRowText
              label='Test Secret Key'
              value='000123_zxcfgvhbjkldewfyujiyokjhgnbmdfghRYSGS567890'
              image={CopyIconSVG}
            />
            <TwoRowText
              label='Live Secret Key'
              value='000123_zxcfgvhbjkldewfyujiyokjhgnbmdfghRYSGS567890'
              image={CopyIconSVG}
            />
          </div>
          <BorderDivider />

          <Button
            className='bg-[#6231F4] mt-10 ml-7 h-[45px] w-[188px] rounded-[10px]'
            name={
              <span className=' text-[11px] flex items-center gap-[10px] justify-center  font-extrabold'>
                <img src={ResetIconSVG} alt='Reset icon' />
                Reset Keys
              </span>
            }
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ApiKeys;
