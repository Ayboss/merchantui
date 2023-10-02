import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';
import { CommonTableQueryType } from './types';

export type PayoutItemType = {
  beneficiaryAccountNumber: string;
  beneficiaryBank: string;
  beneficiaryBankCode: string;
  created: string;
  currencyCode: string;
  id: string;
  lastTransactionRequeryTimestamp: string;
  narration: string;
  transactionAmount: number;
  transactionReference: string;
  transactionStatus: string;
  transactionStatusVerified: boolean;
  responseCode: string;
  responseMessage: string;
  sessionId: string;
};

export type PayoutHistoryResponseType = CommonTableQueryType<PayoutItemType>;

export type PayoutQueryParamsType = {
  page?: number;
  size?: number;
  sort?: Array<string>;
  reference?: string;
};

export const payoutQueryKey = ['payout-results'];

export const useGetPayoutsQuery = (query?: PayoutQueryParamsType, config?: any) => {
  const load = useCallback(
    async (signal: AbortSignal) => {
      const response = await apiInstance('settlement').get('/merchant-payouts', {
        params: query,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
        },
        signal
      });

      return response.data as PayoutHistoryResponseType;
    },
    [query]
  );

  return useQuery([...payoutQueryKey, query?.page], ({ signal }) => load(signal as AbortSignal), {
    ...config,
    refetchOnWindowFocus: false,
    keepPreviousData: true
  });
};
