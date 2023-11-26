import React, { useState } from 'react';
import SaveSVG from '../../../../assets/icons/save-icon.svg';
import TabContent from './TabContent';
import PaymentChannels from './PaymentChannel';
import TransNotification from './TransactionNotification';
import TransactionFees from './TransactionFees';
const TabsContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'paymentChannels' | 'transactionFees' | 'transactionNotification'
  >('paymentChannels');

  const handleTabClick = (
    tab: 'paymentChannels' | 'transactionFees' | 'transactionNotification'
  ) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className='flex mb-7'>
        <TabContent
          label='Payment Channels'
          active={activeTab === 'paymentChannels'}
          onClick={() => handleTabClick('paymentChannels')}
        />
        <TabContent
          label='Transaction Fees'
          active={activeTab === 'transactionFees'}
          onClick={() => handleTabClick('transactionFees')}
        />
        <TabContent
          label='Transaction Notification'
          active={activeTab === 'transactionNotification'}
          onClick={() => handleTabClick('transactionNotification')}
        />
      </div>
      <div className='border border-[#E4E4E7] mt-3 mb-8'></div>
      <div className='content ml-7 mr-7'>
        {activeTab === 'paymentChannels' && <PaymentChannels />}
        {activeTab === 'transactionFees' && <TransactionFees />}
        {activeTab === 'transactionNotification' && <TransNotification />}
      </div>
      <div className='border border-[#E4E4E7] mt-14 mb-8'></div>
      <div className='flex items-center justify-center h-[45px] w-[188px] bg-[#6231F4] rounded-[6px] ml-7'>
        <img src={SaveSVG} alt='' />
        <button className='py-4 text-white text-[14px] font-medium ml-2'>Save Changes</button>
      </div>
    </div>
  );
};

export default TabsContainer;
