import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export type CreateTransactionPinRequestPayloadType = {
  pin: string;
  pinConfirmation: string;
};

export const useCreateTransactionPin = () => {
  const request = useCallback(async (data: CreateTransactionPinRequestPayloadType) => {
    const response = await apiInstance('settlement').post('/create-merchant-pin', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationKey: ['create-pin'],
    mutationFn: request
  });
};
