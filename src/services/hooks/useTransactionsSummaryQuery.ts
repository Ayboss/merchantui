import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const transactionsSummaryQueryKey = 'transactionsSumary';

export type TransactionSummaryResponseType = {
  data: {
    transactionValue: number;
    transactionVolume: number;
    successfulTransaction: number;
    failedTransaction: number;
  };
  responseCode?: string;
  responseMessage?: string;
  success?: boolean;
};

export const useTransactionsSummaryQuery = (config?: any) => {
  const load = useCallback(async (signal: AbortSignal) => {
    const res = await apiInstance('pay').get('/transaction-stats', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      },
      signal
    });

    return res.data as TransactionSummaryResponseType;
  }, []);

  return useQuery(transactionsSummaryQueryKey, ({ signal }) => load(signal as AbortSignal), {
    refetchOnWindowFocus: false,
    initialData: {
      data: {
        transactionValue: 0,
        transactionVolume: 0,
        successfulTransaction: 0,
        failedTransaction: 0
      }
    },
    ...config
  });
};
