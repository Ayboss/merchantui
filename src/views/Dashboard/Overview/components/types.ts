import { selectType } from '../types';
import { TransactionSummaryResponseType } from '../../../../services/hooks';
import { ChartResponseType } from '../../../../services/hooks/useOverviewQuery';

export interface CardContainerType {
  loading: boolean;
  summaryData?: TransactionSummaryResponseType;
}

export type CardItemType = { amount: string; title: string }[];
export type TabItemType = { key: selectType; title: string }[];

export interface PieCartType {
  startDate: string;
  endDate: string;
}

export interface LineChartType {
  data?: ChartResponseType;
}

export interface CardTransactionType {
  startDate: string;
  endDate: string;
  type: string;
}
