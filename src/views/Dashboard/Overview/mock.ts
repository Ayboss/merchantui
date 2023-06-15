import { TabItemType } from './components/types';

export const TabItems: TabItemType = [
  {
    key: 'banktransfer',
    title: 'Bank Transfer'
  },
  {
    key: 'card',
    title: 'Card'
  },
  {
    key: 'ussd',
    title: 'USSD'
  },
  {
    key: 'qrcode',
    title: 'QR Code'
  }
];

export const pieDefault: { x: string; y: string }[] = [
  {
    x: 'BANKTRANSFER',
    y: '0'
  },
  {
    x: 'PAYOUTTRANSFERIN',
    y: '0'
  },
  {
    x: 'CARD',
    y: '0'
  }
];

// export const colorBars = ['#6231F4', '#F09636', '#F5C544', '#EB5757']
export const colorBars: { BANKTRANSFER: string; PAYOUTTRANSFERIN: string; CARD: string } = {
  BANKTRANSFER: '#6231F4',
  PAYOUTTRANSFERIN: '#F09636',
  CARD: '#EB5757'
};

export type colorKey = keyof typeof colorBars;
