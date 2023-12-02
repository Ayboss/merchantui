import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';
import { queryClient } from '../../main';
import { GET_BUSINESS_LOGO_QUERY_KEY } from './useGetBusinessLogo';

export const UPLOAD_BUSINESS_LOGO_MUTATION_KEY = ['upload-business-logo'];

export const useUploadBusinessLogo = () => {
  const request = useCallback(async (data: any) => {
    const response = await apiInstance('merchant').post('/upload-business-logo', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: UPLOAD_BUSINESS_LOGO_MUTATION_KEY,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: GET_BUSINESS_LOGO_QUERY_KEY
      });
    }
  });
};
