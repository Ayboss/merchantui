import { HeadersPropsType } from '../../../components';

export const RecentTransactionsHeader: Array<HeadersPropsType> = [
  {
    title: 'Status',
    responseMatch: 'paymentStatus'
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
    title: 'Transaction ID',
    responseMatch: 'onusReference'
  }
];

export const TransactionsHeader: Array<HeadersPropsType> = [
  ...RecentTransactionsHeader,
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
  }
];
