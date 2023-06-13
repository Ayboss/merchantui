import { HeadersPropsType } from '../../../components';

export const TransactionsHeader: Array<HeadersPropsType> = [
  {
    title: 'S/N',
    responseMatch: 'index'
  },
  {
    title: 'Transaction ID',
    responseMatch: 'onusReference'
  },
  {
    title: 'Channel',
    responseMatch: 'channel'
  },
  {
    title: 'Amount ',
    responseMatch: 'amount'
  },
  {
    title: 'Email',
    responseMatch: 'customerEmail'
  },
  {
    title: 'Customer Name',
    responseMatch: 'customerName'
  },
  {
    title: 'Date ',
    responseMatch: 'created'
  },
  {
    title: 'Status',
    responseMatch: 'paymentStatus'
  }
];
