import React from 'react';
import { Popup } from '../../../../components';
import { SettlementBankInfo } from '../../../KYC/steps/SettlementBankInfo';

interface AddBankProps {
  onClose: () => void;
}

const AddBank: React.FC<AddBankProps> = ({ onClose }) => {
  return (
    <Popup title='Settlement Bank Information' onClose={onClose}>
      <p className='text-[#6F7482] text-[16px] mb-10'>Setup your preferred bank for settlements</p>
      <SettlementBankInfo onClose={onClose} onlySettlmentInfo />
    </Popup>
  );
};

export default AddBank;
