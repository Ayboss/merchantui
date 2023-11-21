import React from 'react';
import SettingsTop from '../SettingsTop';
import ProfileCard from './ProfileCard';
import ProfileInfo from './ProfileInfo';

const PersonalInfo: React.FC<{}> = () => {
  return (
    <div>
      <SettingsTop />
      <div className='flex items-start'>
        <ProfileCard />
        <ProfileInfo />
      </div>
    </div>
  );
};

export default PersonalInfo;
