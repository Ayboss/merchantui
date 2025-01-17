import React from 'react';
import { SettingItems } from './constants/';
import SettingsCard from './SettingsCard';

const Settings: React.FC = () => {
  return (
    <div>
      <h1 className='mb-8 text-[#444] text-[25px] font-medium'>Account Settings</h1>
      <div className='flex flex-wrap'>
        {SettingItems.map((item) => (
          <SettingsCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Settings;
