import React from 'react';
import { Popup } from '../../../../../components';

export const TransactionItem: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Popup onClose={onClose}>
      <div className='p-[40px]'>Hello</div>
    </Popup>
  );
};
