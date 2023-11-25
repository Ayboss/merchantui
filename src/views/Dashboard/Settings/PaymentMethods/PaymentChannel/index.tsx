import React from 'react';
import ToggleSwitch from '../ToggleContent';

const PaymentChannels: React.FC = () => {
  return (
    <React.Fragment>
      <ToggleSwitch title='Card Payment' />
      <ToggleSwitch title='Bank Transfer' />
      <ToggleSwitch title='USSD Payment' />
      <ToggleSwitch title='MOMO Payment' />
    </React.Fragment>
  );
};

export default PaymentChannels;
