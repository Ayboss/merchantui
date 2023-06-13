import React, { useState } from 'react';
import { AccordionItem } from '../../../../components';
import { SinglePayout } from './SinglePayout';

export const PayoutOptions: React.FC = () => {
  const [currentOption, setCurrentOption] = useState('single');

  return (
    <div className='w-full relative bg-[#ffffff] rounded-[4px] p-[30px] flex gap-[32px]'>
      <div className='max-w-[480px] w-full flex flex-col gap-[28px]'>
        <AccordionItem
          title='Single Payout'
          content='Beneficiaries Name, Beneficiaries Registered bank account and amount to be transferred are information required.'
          subtitle='Single Payout allows you to pay to a single account.'
          onClick={() => setCurrentOption('single')}
          active={currentOption === 'single'}
        />
        {/* <AccordionItem
          title='Bulk Payout'
          content='Beneficiaries Name, Beneficiaries Registered bank account and amount to be transferred are information required.'
          subtitle='Bulk Payout allows you to pay to a single account.'
          onClick={() => {}}
          active={currentOption === 'bulk'}
          className='blur-[2px]'
        /> */}
      </div>
      <div className='w-full max-w-[500px]'>
        <SinglePayout />
      </div>
    </div>
  );
};
