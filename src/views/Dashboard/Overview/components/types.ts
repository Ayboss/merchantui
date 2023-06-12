import { selectType } from '../types';

interface overviewType {
  transactionValue: string | '0';
  transactionVolume: string | '0';
  successfulTransaction: string | '0';
  failedTransaction: string | '0';
}

export interface CardContainerType {
  loading: boolean;
  data?: overviewType;
}

export type CardItemType = { amount: string; title: string }[];
export type TabItemType = { key: selectType; title: string }[];

export type formatMoneyType = string | '0';
