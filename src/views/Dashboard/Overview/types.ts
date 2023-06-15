import { CardItemType } from './components/types';

export interface CardContainerType {
  items: CardItemType;
}

export interface TabItemType {
  $current: string;
  $selected: string;
}

export type selectType = 'card' | 'bank_transfer' | 'ussd' | 'qr_code';
