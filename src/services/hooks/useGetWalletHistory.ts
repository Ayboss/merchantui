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
};

export const getWalletHistoryQueryKey = ['get_wallet_history_query_key'];

export type WalletHistoryResponseType = CommonTableQueryType<WalletHistroyItemType>;

export const useGetWalletHistory = (params?: { page: number; pageSize?: number }) => {
  const load = useCallback(async () => {
    const response = await apiInstance('settlement').get('/merchant-wallet-history', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      },
      params
    });

    return response.data;
  }, [params]);

  return useQuery([...getWalletHistoryQueryKey, params?.page], load, {
    refetchOnWindowFocus: true,
    keepPreviousData: true
  });
};
