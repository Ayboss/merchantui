import React from 'react';
import ToggleSwitch from '../ToggleContent';
const TransNotification: React.FC = () => {
  return (
    <React.Fragment>
      <ToggleSwitch
        title='Merchant Receipt'
        text='Notify me on each payment made by customer (email)'
      />
      <ToggleSwitch
        title='Customer Receipt'
        text='Send email receipt on each successful payment by customer'
      />
    </React.Fragment>
  );
};

export default TransNotification;
