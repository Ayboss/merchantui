import { CardItemType } from './components/types';

export interface CardContainerType {
  items: CardItemType;
}

export interface TabItemType {
  $current: string;
  $selected: string;
}

export type selectType = 'card' | 'banktransfer' | 'ussd' | 'qrcode';
export interface selectedDateType {
  startDate: string;
  endDate: string;
}
