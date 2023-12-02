import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';
import { queryClient } from '../../main';
import { getMerchantProfileKey } from './useGetProfileQuery';

export const PROFILE_MUTATION_KEY = ['profile-update'];

export type ProfileRequestPayloadType = {
  businessType: 'REGISTERED' | 'STARTER';
  businessCategory: string;
  businessInformation: string;
  businessAddress: string;
  tin: string;
  country: string;
  state: string;
  lga: string;
  categoryId: string;
};

export const useProfileMutation = () => {
  const request = useCallback(async (data: Partial<ProfileRequestPayloadType>) => {
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
    mutationKey: PROFILE_MUTATION_KEY,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: getMerchantProfileKey
      });
    },
    onMutate: async (newProfile) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries([getMerchantProfileKey, newProfile.businessInformation]);

      // Snapshot the previous value
      const previousProfile = queryClient.getQueryData([
        getMerchantProfileKey,
        newProfile.businessInformation
      ]);

      // Optimistically update to the new value
      queryClient.setQueryData([getMerchantProfileKey, newProfile.businessInformation], newProfile);

      // Return a context object with the snapshotted value
      return { previousProfile, newProfile };
    },
    // If the mutation fails, use the context we returned above
    onError: (_err, newTodo, context) => {
      queryClient.setQueryData(
        [getMerchantProfileKey, context?.newProfile.businessInformation],
        context?.previousProfile
      );
    }
  });
};
