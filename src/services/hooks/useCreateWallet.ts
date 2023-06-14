import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const createWalletQueryKey = ['createWalletKey'];

export const useCreateMerchantWallet = () => {
  const load = useCallback(async () => {
    const response = await apiInstance('settlement').post(
      '/create-merchant-wallet',
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
        }
      }
    );

    return response.data;
  }, []);

  return useQuery(createWalletQueryKey, load, {
    refetchOnWindowFocus: false
  });
};
