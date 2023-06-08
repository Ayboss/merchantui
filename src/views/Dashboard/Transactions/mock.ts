import { HeadersPropsType } from '../../../components';
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

export const MockTransactionsHeader: Array<HeadersPropsType> = [
  {
    title: 'S/N',
    responseMatch: 'index'
  },
  {
    title: 'Transaction ID',
    responseMatch: 'id'
  },
  {
    title: 'Transaction Type',
    responseMatch: 'type'
  },
  {
    title: 'Transaction Amount ',
    responseMatch: 'amount'
  },
  {
    title: 'Email Address',
    responseMatch: 'email'
  },
  {
    title: 'Transaction Date ',
    responseMatch: 'date'
  },
  {
    title: 'Status',
    responseMatch: 'status'
  }
];

export const MockTransactionsData = [
  {
    index: '1',
    id: '#73612837472',
    type: 'Cards',
    amount: 'N 120,000',
    email: 'adebello@gmail.com',
    date: '12-02-2023',
    status: 'N 120,000'
  },
  {
    index: '2',
    id: '#73612837472',
    type: 'Ussd',
    amount: 'N 120,000',
    email: 'adebello@gmail.com',
    date: '12-02-2023',
    status: 'N 120,000'
  },
  {
    index: '3',
    id: '#73612837472',
    type: 'QR Code',
    amount: 'N 120,000',
    email: 'adebello@gmail.com',
    date: '12-02-2023',
    status: 'N 120,000'
  },
  {
    index: '4',
    id: '#73612837472',
    type: 'Transfers',
    amount: 'N 120,000',
    email: 'adebello@gmail.com',
    date: '12-02-2023',
    status: 'N 120,000'
  },
  {
    index: '5',
    id: '#73612837472',
    type: 'Cards',
    amount: 'N 120,000',
    email: 'adebello@gmail.com',
    date: '12-02-2023',
    status: 'N 120,000'
  },
  {
    index: '6',
    id: '#73612837472',
    type: 'Cards',
    amount: 'N 120,000',
    email: 'adebello@gmail.com',
    date: '12-02-2023',
    status: 'N 120,000'
  }
];
