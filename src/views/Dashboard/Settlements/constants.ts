import { HeadersPropsType } from '../../../components';

export const SETTLEMENT_LIST_HEADER: Array<HeadersPropsType> = [
  {
    title: 'Account Number',
    responseMatch: 'beneficiaryAccountNumber'
  },
  {
    title: 'Amount',
    responseMatch: 'amount'
  },
  {
    title: 'Fee',
    responseMatch: 'fee'
  },
  {
    title: 'Amount Paid',
    responseMatch: 'amountPaid'
  },
  {
    title: 'Channel',
    responseMatch: 'channel'
  },
  {
    title: 'Status',
    responseMatch: 'paymentStatus'
  },
  {
    title: 'Date',
    responseMatch: 'created'
  }
];
