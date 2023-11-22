import React from 'react';
import { SettingItems } from './constants/';
import SettingsCard from './SettingsCard';

const Settings = () => {
  return (
    <div>
      <h1 className='mb-8 text-[#444] text-[32px] font-medium'>Account Settings</h1>
      <div className='flex flex-wrap'>
        {SettingItems.map((item, index) => (
          <SettingsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Settings;
