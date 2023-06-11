import { HeadersPropsType } from '../../../../components';

export const MOCK_PAYOUT_HISTORY_HEADER: Array<HeadersPropsType> = [
  {
    title: 'Account Name',
    responseMatch: 'accountName'
  },
  {
    title: 'Account Number',
    responseMatch: 'accountNumber'
  },
  {
    title: 'Bank Name',
    responseMatch: 'bankName'
  },
  {
    title: 'Amount',
    responseMatch: 'amount'
  },
  {
    title: 'Status',
    responseMatch: 'status'
  }
];

export const MOCK_PAYOUT_DATA = [
  {
    accountName: 'Adebayo Ojo',
    accountNumber: '0130329630',
    bankName: 'Access Bank',
    amount: 'N 200,000.00',
    status: 'Successful'
  },
  {
    accountName: 'Adebayo Ojo',
    accountNumber: '0130329630',
    bankName: 'Access Bank',
    amount: 'N 200,000.00',
    status: 'Pending'
  },
  {
    accountName: 'Adebayo Ojo',
    accountNumber: '0130329630',
    bankName: 'Access Bank',
    amount: 'N 200,000.00',
    status: 'Successful'
  },
  {
    accountName: 'Adebayo Ojo',
    accountNumber: '0130329630',
    bankName: 'Access Bank',
    amount: 'N 200,000.00',
    status: 'Pending'
  },
  {
    accountName: 'Adebayo Ojo',
    accountNumber: '0130329630',
    bankName: 'Access Bank',
    amount: 'N 200,000.00',
    status: 'Failed'
  },
  {
    accountName: 'Adebayo Ojo',
    accountNumber: '0130329630',
    bankName: 'Access Bank',
    amount: 'N 200,000.00',
    status: 'Successful'
  }
];
