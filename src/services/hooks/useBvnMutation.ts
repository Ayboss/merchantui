import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export const BVN_MUTATION_KEY = ['bvn'];

export type BvnRequestPayloadType = {
  bvn: string;
  bvnDob: string;
};

export const useBvnMutation = () => {
  const request = useCallback(async (data: BvnRequestPayloadType) => {
    const response = await apiInstance('merchant').post('/bvn', data);

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: BVN_MUTATION_KEY
  });
};
