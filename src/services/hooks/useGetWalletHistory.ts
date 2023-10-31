import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';
import { CommonTableQueryType } from './types';

export type WalletHistroyItemType = {
  narration: string;
  amount: number;
  balanceBefore: string;
  balanceAfter: string;
  transactionType: string;
  currency: string;
  paymentDate: string;
  created: string;
  accountNumber: string;
  payoutTransactionReference: string;
  payoutReference: string;
};

export const getWalletHistoryQueryKey = ['get_wallet_history_query_key'];

export type WalletHistoryResponseType = CommonTableQueryType<WalletHistroyItemType>;

export const useGetWalletHistory = (
  params?: { page: number; pageSize?: number },
  useNewService?: boolean
) => {
  const load = useCallback(async () => {
    const response = await apiInstance(`${useNewService ? 'payout' : 'settlement'}`).get(
      '/merchant-wallet-history',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
        },
        params
      }
    );

    return response.data;
  }, [params, useNewService]);

  return useQuery([...getWalletHistoryQueryKey, params?.page, useNewService], load, {
    refetchOnWindowFocus: true,
    keepPreviousData: true
  });
};
