import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const getMerchantWalletBalanceQueryKey = ['merchant_wallet_balance_query_key'];

export type MerchantWalletBalanceType = {
  responseCode: string;
  responseMessage: string;
  data: Array<{
    accountNumber: string;
    balance: number;
    currency: 'NGN';
    status: string;
    created: string;
    lastUpdated: string;
  }>;
  success: boolean;
};

export const useGetMerchantWalletBalanceQuery = () => {
  const load = useCallback(async () => {
    const response = await apiInstance('payout').get('/merchant-accounts-balances', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data as MerchantWalletBalanceType;
  }, []);

  return useQuery(getMerchantWalletBalanceQueryKey, load, {
    refetchOnWindowFocus: false
  });
};
