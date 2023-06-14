import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const getMerchantAccountQueryKey = ['merchant_account_query_key'];

export const useGetMerchantAccountQuery = (params: { page: number; pageSize: number }) => {
  const load = useCallback(async () => {
    const response = await apiInstance('settlement').get('/merchant-payout-accounts', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      },
      params
    });

    return response.data;
  }, [params]);

  return useQuery(getMerchantAccountQueryKey, load, {
    refetchOnWindowFocus: false
  });
};
