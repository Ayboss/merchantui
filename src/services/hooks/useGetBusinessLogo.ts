import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const GET_BUSINESS_LOGO_QUERY_KEY = ['GET_BUSINESS_LOGO_QUERY_KEY'];

export const useGetBusinessLogo = () => {
  const load = useCallback(async () => {
    const response = await apiInstance('merchant').get('/get-logo-url', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useQuery({
    queryKey: GET_BUSINESS_LOGO_QUERY_KEY,
    queryFn: load,
    refetchOnWindowFocus: false
  });
};
