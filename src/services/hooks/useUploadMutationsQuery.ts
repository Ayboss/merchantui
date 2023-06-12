import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export const UPLOAD_MUTATION_KEY = ['upload'];

export type UploadRequestPayloadType = {
  id?: string;
  boardResolution?: string;
  companyProfile?: string;
  companyCacCertificate?: string;
  fomrO2?: string;
  fromO7?: string;
  businessLogo?: string;
};

export const useUploadMutationsQuery = () => {
  const request = useCallback(async (data: UploadRequestPayloadType) => {
    const response = await apiInstance('merchant').post('/upload', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: UPLOAD_MUTATION_KEY
  });
};
