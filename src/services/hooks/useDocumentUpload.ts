import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export const UPLOAD_BUSINESS_MUTATION_KEY = ['upload-business-document'];

export const useUploadBusinessDocument = () => {
  const request = useCallback(async (data: any) => {
    const response = await apiInstance('merchant').post('/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: UPLOAD_BUSINESS_MUTATION_KEY
  });
};
