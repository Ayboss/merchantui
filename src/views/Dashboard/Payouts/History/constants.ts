import { HeadersPropsType } from '../../../../components';

export const RecentPayoutsHeader: Array<HeadersPropsType> = [
  {
    title: 'Status',
    responseMatch: 'transactionStatus'
  },
  {
    title: 'Paid To',
    responseMatch: 'narration'
  },
  {
    title: 'Amount',
    responseMatch: 'transactionAmount'
  },
  {
    title: 'Account Name',
    responseMatch: 'beneficiaryAccountName'
  },
  {
    title: 'Date',
    responseMatch: 'created'
  }
];

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
