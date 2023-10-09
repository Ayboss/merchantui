import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';
import { MerchantProfileResponseType } from './types';

export const getMerchantProfileKey = ['getMerchantProfileKey'];

export const useProfileQuery = (config?: any) => {
  const load = useCallback(async (signal: AbortSignal) => {
    const res = await apiInstance('merchant').get('/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      },
      signal
    });

    return res.data as MerchantProfileResponseType;
  }, []);

  return useQuery(getMerchantProfileKey, ({ signal }) => load(signal as AbortSignal), {
    refetchOnWindowFocus: false,
    cacheTime: 100000,
    ...config
  });
};
