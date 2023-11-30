import React from 'react';
import SettingsTop from '../SettingsTop';
import ProfileCard from './ProfileCard';
import ProfileInfo from './ProfileInfo';

const PersonalInfo: React.FC = () => {
  return (
    <React.Fragment>
      <SettingsTop />
      <div className='flex items-start'>
        <ProfileCard />
        <ProfileInfo />
      </div>
    </React.Fragment>
  );
};

export default PersonalInfo;
