import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';
import { queryClient } from '../../main';
import { GET_API_QUERY_KEY } from './useGetApiKeys';

export const RESET_API_QUERY_KEY = ['RESET_API_QUERY_KEY'];

export const useResetApiMutation = () => {
  const load = useCallback(async () => {
    const response = await apiInstance('merchant').post(
      '/settings/api-keys/reset',
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
        }
      }
    );

    return response.data;
  }, []);

  return useMutation({
    mutationFn: load,
    mutationKey: RESET_API_QUERY_KEY,
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: GET_API_QUERY_KEY
      });
    }
  });
};
