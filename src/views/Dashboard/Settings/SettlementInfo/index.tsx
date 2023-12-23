import React, { useState } from 'react';
import SettingsTop from '../SettingsTop';
import { useGetMerchantAccountQuery } from '../../../../services/hooks';
import RadioButton from './RadioButtonContainer';
import { options } from './constants';
import WalletDetailsCard from './WalletDetailsCard';
import BankDetailsCard from './BankDetailsCard';

const SetlmentInfo: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const { data: merchantAccount } = useGetMerchantAccountQuery({
    page: 1,
    pageSize: 20
  });

  const handleOptionChange = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <React.Fragment>
      <SettingsTop />
      <h2>Manage Settlemenets</h2>
      <p>How do you want to recieve settlement</p>
      <div className='flex items-start mt-5'>
        <div className='radiobutton'>
          <RadioButton options={options} onChange={handleOptionChange} />
        </div>
        {selectedOption === 0 && <WalletDetailsCard />}
        {selectedOption === 1 && <BankDetailsCard merchantAccount={merchantAccount} />}
      </div>
    </React.Fragment>
  );
};

export default SetlmentInfo;
