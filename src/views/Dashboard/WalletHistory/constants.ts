import { HeadersPropsType } from '../../../components';

export const WalletHistoryHeader: Array<HeadersPropsType> = [
  {
    title: 'Account No.',
    responseMatch: 'accountNumber'
  },
  {
    title: 'Currency',
    responseMatch: 'currency'
  },
  {
    title: 'Amount ',
    responseMatch: 'amount'
  },
  {
    title: 'Balance Before',
    responseMatch: 'balanceBefore'
  },
  {
    title: 'Balance After',
    responseMatch: 'balanceAfter'
  },
  {
    title: 'Type',
    responseMatch: 'transactionType'
  },
  {
    title: 'Date - Time',
    responseMatch: 'created'
  }
];
