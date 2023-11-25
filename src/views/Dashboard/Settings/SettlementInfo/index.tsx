import React, { useState } from 'react';
import SettingsTop from '../SettingsTop';
import RadioButton from './RadioButtonContainer';
import { options } from './constants/Constants';
import WalletDetailsCard from './WalletDetailsCard';
import BankDetailsCard from './BankDetailsCard';

const SetlmentInfo: React.FC<{}> = () => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const handleOptionChange = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <React.Fragment>
      <SettingsTop />
      <h2>Manage Settlemenets</h2>
      <p>How do you want to recieve settlement</p>
      <div className='flex items-start mt-5'>
        <div className='radiobbutton'>
          <RadioButton options={options} onChange={handleOptionChange} />
        </div>
        {selectedOption === 0 && <WalletDetailsCard />}
        {selectedOption === 1 && <BankDetailsCard />}
      </div>
    </React.Fragment>
  );
};

export default SetlmentInfo;
