import React from 'react';
import SettingsTop from '../SettingsTop';
import Header from '../Header';
import BorderDivider from '../BorderDIvider';
import InfoBox from './InfoBox';

const AccountSecurity = () => {
  return (
    <React.Fragment>
      <SettingsTop />
      <div className='w-[746px] h-[600px] bg-white rounded-[12px] pt-8'>
        <Header title='My Business' />
        <BorderDivider />
        <div className='px-7 mt-8'>
          <InfoBox title='Password' text='**********' buttonText='Change Password' />
          <InfoBox title='Transaction Pin' text='**********' buttonText='Change Pin' />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AccountSecurity;
