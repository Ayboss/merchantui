import { selectType } from '../types';

export interface CardContainerType {
  items: CardItemType;
}

export type CardItemType = { amount: string; title: string }[];
export type TabItemType = { key: selectType; title: string }[];
