import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const GET_API_QUERY_KEY = ['GET_API_QUERY_KEY'];

export type ApiKeysResponseType = {
  data: {
    liveKey: string;
    liveClientId: string;
    sandboxKey: string;
    sandboxClientId: string;
  };
};

export const useGetApiKeys = () => {
  const load = useCallback(async () => {
    const response = await apiInstance('merchant').get('/settings/api-keys/info', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data as ApiKeysResponseType;
  }, []);

  return useQuery({
    queryKey: GET_API_QUERY_KEY,
    queryFn: load,
    refetchOnWindowFocus: false
  });
};
