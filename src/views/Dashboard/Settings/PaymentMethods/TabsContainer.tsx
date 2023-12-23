import React, { useState } from 'react';
import TabContent from './TabContent';
import PaymentChannels from './PaymentChannel';
import TransNotification from './TransactionNotification';
import TransactionFees from './TransactionFees';

type ActiveTabType = 'paymentChannels' | 'transactionFees' | 'transactionNotification';
const TabsContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTabType>('paymentChannels');

  const handleTabClick = (tab: ActiveTabType) => {
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
      <div>
        {activeTab === 'paymentChannels' && <PaymentChannels />}
        {activeTab === 'transactionFees' && <TransactionFees />}
        {activeTab === 'transactionNotification' && <TransNotification />}
      </div>
    </div>
  );
};

export default TabsContainer;
