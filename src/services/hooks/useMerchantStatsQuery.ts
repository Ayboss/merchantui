import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const getMerchantStatsQueryyKey = ['paymentSummaryQueryKey'];

export const useMerchantStatsQuery = (config?: any) => {
  const load = useCallback(async (signal: AbortSignal) => {
    const res = await apiInstance('settlement').get('/get-merchant-payouts-stats', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      },
      signal
    });

    return res.data;
  }, []);

  return useQuery(getMerchantStatsQueryyKey, ({ signal }) => load(signal as AbortSignal), {
    refetchOnWindowFocus: false,
    cacheTime: 100000,
    ...config
  });
};
