import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export const RESET_API_QUERY_KEY = ['RESET_API_QUERY_KEY'];

export const useResetApiMutation = () => {
  const load = useCallback(async (data: any) => {
    const response = await apiInstance('payout').put('/api/settings/api-keys/reset', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: load,
    mutationKey: RESET_API_QUERY_KEY
  });
};
