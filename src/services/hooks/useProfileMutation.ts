import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';
import { getFromLocal } from '../../utils';

export const PROFILE_MUTATION_KEY = ['profile'];
const token = getFromLocal('user');

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
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: PROFILE_MUTATION_KEY
  });
};
