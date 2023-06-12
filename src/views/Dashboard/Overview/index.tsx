import React from 'react';
import { CardContainer } from './components';
import { TransactionsOverviews } from './mock';

const Overview = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      <CardContainer items={TransactionsOverviews} />
    </div>
  );
};

export default Overview;
