import React from 'react';
import SettingsTop from '../SettingsTop';
import BusinessCard from './BusinessCard';
import BusinessDets from './BusinessDets';

const BusinessInfo: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <SettingsTop />
      <div className='flex items-start'>
        <BusinessCard />
        <BusinessDets />
      </div>
    </React.Fragment>
  );
};

export default BusinessInfo;
