import { HeadersPropsType } from '../../../../components';

export const PAYOUT_HISTORY_HEADER: Array<HeadersPropsType> = [
  {
    title: 'Account Name',
    responseMatch: 'beneficiaryAccountName'
  },
  {
    title: 'Account Number',
    responseMatch: 'beneficiaryAccountNumber'
  },
  {
    title: 'Bank Name',
    responseMatch: 'beneficiaryBank'
  },
  {
    title: 'Amount',
    responseMatch: 'transactionAmount'
  },
  {
    title: 'Narration',
    responseMatch: 'narration'
  },
  {
    title: 'Status',
    responseMatch: 'transactionStatus'
  },
  {
    title: 'Date',
    responseMatch: 'created'
  }
];
