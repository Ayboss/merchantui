import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const getBankQueryKey = ['getBanks'];

export const useGetBanksQuery = () => {
  const load = useCallback(async () => {
    const response = await apiInstance('settlement').get('/get-list-of-banks', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useQuery(getBankQueryKey, load, {
    refetchOnWindowFocus: false,
    cacheTime: 20000000
  });
};
