import { CardItemType, TabItemType } from './components/types';

export const TransactionsOverviews: CardItemType = [
  {
    amount: 'N 5,489,902',
    title: 'Transaction Value'
  },
  {
    amount: '9,902',
    title: 'Transaction Volume'
  },
  {
    amount: '2,902',
    title: 'Wallet Balance'
  },
  {
    amount: '2,902',
    title: 'Next Settlement'
  }
];

export const TabItems: TabItemType = [
  {
    key: 'card',
    title: 'Card'
  },
  {
    key: 'bank_transfer',
    title: 'Bank Transfer'
  },
  {
    key: 'ussd',
    title: 'USSD'
  },
  {
    key: 'qr_code',
    title: 'QR Code'
  }
];
