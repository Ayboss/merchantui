import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export type webHookRequestType = {
  liveUrl: string;
  testUrl: string;
};
export const WEB_HOOK_QUERY_KEY = ['WEB_HOOK_QUERY_KEY'];

export const useWebHookMutation = () => {
  const load = useCallback(async (data: webHookRequestType) => {
    const response = await apiInstance('merchant').post('/settings/webhooks', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: load,
    mutationKey: WEB_HOOK_QUERY_KEY
  });
};
