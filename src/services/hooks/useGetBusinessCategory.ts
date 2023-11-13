import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const getBusinessCategoryKey = ['getBusinessCategoryKey'];

export type BusinessCatgoryResponseType = {
  deleted: boolean;
  description: string;
  id: string;
  name: string;
};

export const useGetBusinessCategory = (config?: any) => {
  const load = useCallback(async (signal: AbortSignal) => {
    const response = await apiInstance('merchant').get('/business-categories', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      },
      signal
    });

    return response.data as {
      data: BusinessCatgoryResponseType[];
    };
  }, []);

  return useQuery(getBusinessCategoryKey, ({ signal }) => load(signal as AbortSignal), {
    ...config,
    refetchOnWindowFocus: true,
    keepPreviousData: true
  });
};
