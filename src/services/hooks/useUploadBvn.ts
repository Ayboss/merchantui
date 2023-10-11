import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export type UploadBvnRequestPayloadType = {
  bvn: string;
  bvnDob: string;
};

export const useUploadBvn = () => {
  const request = useCallback(async (data: UploadBvnRequestPayloadType) => {
    const response = await apiInstance('merchant').post('/bvn', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationKey: ['upload-bvn'],
    mutationFn: request
  });
};
