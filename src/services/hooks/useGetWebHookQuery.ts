import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const GET_WEB_HOOK_QUERY_KEY = ['GET_WEB_HOOK_QUERY_KEY'];

export type WebHooksResponseType = {
  liveURL: string;
  testUrl: string;
};

export const useGetWebHooks = () => {
  const load = useCallback(async () => {
    const response = await apiInstance('merchant').get('/settings/webhooks', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data as WebHooksResponseType;
  }, []);

  return useQuery({
    queryKey: GET_WEB_HOOK_QUERY_KEY,
    queryFn: load,
    refetchOnWindowFocus: false
  });
};
