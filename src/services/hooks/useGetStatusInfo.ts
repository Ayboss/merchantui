import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const getStatusInfoKey = ['getStatusInfoKey'];

export type ServiceItemType = {
  serviceProvider: 'Wema Bank' | 'Globus Bank' | 'Providus Bank';
  lastUpdatedAt: string;
  status: 'UP' | 'DOWN';
};

export type ServiceStatusInfoResponseType = {
  responseCode: string;
  responseMessage: string;
  data: {
    callbacks: Array<ServiceItemType>;
    nameEnquires: Array<ServiceItemType>;
    accountCreations: Array<ServiceItemType>;
  };
};

export const useGetStatusInfo = (config?: any) => {
  const load = useCallback(async (signal: AbortSignal) => {
    const res = await apiInstance('pay').get('/status-pages/info', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      },
      signal
    });

    return res.data as ServiceStatusInfoResponseType;
  }, []);

  return useQuery(getStatusInfoKey, ({ signal }) => load(signal as AbortSignal), {
    refetchOnWindowFocus: true,
    cacheTime: 100000,
    ...config
  });
};
