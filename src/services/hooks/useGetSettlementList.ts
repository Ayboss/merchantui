import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';
import { CommonTableQueryType } from './types';

export type SettlementItemType = {
  id: string;
  amount: number;
  amountPaid: number;
  fee: number;
  accountNumber: string;
  channel: string;
  reference: string;
  onusReference: string;
  currency: string;
  paymentStatus: string;
  created: string;
};

export type SettlementListResponseType = CommonTableQueryType<SettlementItemType>;

export type SettlementQueryParamsType = { page?: number; size?: number; sort?: Array<string> };

export const settlementQueryKey = ['settlement-results'];

export const useGetSettlementQuery = (query?: SettlementQueryParamsType, config?: any) => {
  const load = useCallback(
    async (signal: AbortSignal) => {
      const response = await apiInstance('settlement').get('/merchant-payouts', {
        params: query,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
        },
        signal
      });

      return response.data as SettlementListResponseType;
    },
    [query]
  );

  return useQuery(
    [...settlementQueryKey, query?.page],
    ({ signal }) => load(signal as AbortSignal),
    {
      ...config,
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  );
};
