import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';
import { CommonTableQueryType } from './types';

export type TransactionsRequestType = {
  page: number;
  size?: number;
  sort?: Array<string>;
};

export type TransactionItemType = {
  accountNumber: null | number;
  amount: number;
  amountPaid: number;
  balanceToPay: number;
  channel: null | string;
  code: null | string | number;
  created: string | null;
  paymentStartDate: string | null;
  currency: string;
  customerEmail: string | null;
  customerMobile: string | null;
  customerName: string;
  excessPayment: number;
  id: string;
  onusReference: string;
  paymentStatus: 'PENDING' | 'SUCCESSFUL' | 'FAILED' | 'Successful' | 'SUCCESS';
  reference: string;
  vat: null | number;
};

export type TransactionsResponseType = CommonTableQueryType<TransactionItemType>;

export type TransactionsQueryParamsType = { page?: number; size?: number; sort?: Array<string> };

export const transactionsQueryKey = ['transactions-results'];

export const useGetTransactionsQuery = (query?: TransactionsQueryParamsType, config?: any) => {
  const load = useCallback(
    async (signal: AbortSignal) => {
      const response = await apiInstance('pay').get('/transactions', {
        params: query,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
        },
        signal
      });

      return response.data as TransactionsResponseType;
    },
    [query]
  );

  return useQuery(
    [...transactionsQueryKey, query?.page],
    ({ signal }) => load(signal as AbortSignal),
    {
      ...config,
      refetchOnWindowFocus: true,
      keepPreviousData: true
    }
  );
};
