import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export const PROFILE_MUTATION_KEY = ['profile'];

export type ProfileRequestPayloadType = {
  businessType: string;
  businessCategory: string;
  businessInformation: string;
  businessAddress: string;
  tin: string;
  country: string;
  state: string;
  lga: string;
};

export const useProfileMutation = () => {
  const request = useCallback(async (data: ProfileRequestPayloadType) => {
    const response = await apiInstance('merchant').post('/profile', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: PROFILE_MUTATION_KEY
  });
};
