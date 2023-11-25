import React from 'react';

import ToggleSwitch from '../ToggleContent2';

const TransactionFees: React.FC = () => {
  return (
    <React.Fragment>
      <h2 className='text-[#444] text-[16px] font-semibold mb-4'>Who pays the Transaction Fees?</h2>
      <p className='text-[#444] text-[16px] font-normal mb-5'>
        By default, you bear the transaction fee on each transaction.
        <br /> You have the option to charge it to the customer.
      </p>
      <ToggleSwitch title='Turn on to charge Customer' text='Charge to Customer' />
    </React.Fragment>
  );
};

export default TransactionFees;
