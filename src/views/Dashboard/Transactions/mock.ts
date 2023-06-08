import { TransactionCardPropsType } from './components';

export const MockTransactionCardDetails: TransactionCardPropsType[] = [
  {
    amount: 'N 5,489,902',
    title: 'Transaction Value',
    text: 'All Transactions volume for a specific duration'
  },
  {
    amount: '9,902',
    title: 'Transaction Volume',
    text: 'All Transactions value for a specific duration'
  },
  {
    amount: '2,902',
    title: 'Successful Transaction',
    text: 'All payment that was successfully transacted'
  },
  {
    amount: '2,902',
    title: 'Failed Transaction',
    text: 'All payment that was unsuccessfully transacted'
  }
];
