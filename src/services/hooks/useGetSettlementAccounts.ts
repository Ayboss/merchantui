import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';
import { queryClient } from '../../main';
import { createSettlementAccountQueryKey } from './useCreateSettlementAccount';

export const getSettlementAccounts = ['getSettlementAccounts'];

export const useGetSettlementAccounts = () => {
  const load = useCallback(async () => {
    const response = await apiInstance('settlement').get('/list-merchant-settlement-accounts', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useQuery(getSettlementAccounts, load, {
    refetchOnWindowFocus: false,
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: createSettlementAccountQueryKey
      });
    }
  });
};
