import { selectType } from '../types';
import { TransactionSummaryResponseType } from '../../../../services/hooks';

export interface CardContainerType {
  loading: boolean;
  summaryData?: TransactionSummaryResponseType;
}

export type CardItemType = { amount: string; title: string }[];
export type TabItemType = { key: selectType; title: string }[];
