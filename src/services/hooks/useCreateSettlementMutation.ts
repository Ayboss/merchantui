import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export const CREATE_SETTLEMENT_MUTATION_KEY = ['create-settlement-key'];

export type SettlementRequestPayloadType = {
  accountName: string;
  accountNumber: string;
  bank: string;
  bankCode: string;
};

export const useCreateSettlementMutation = () => {
  const request = useCallback(async (data: SettlementRequestPayloadType) => {
    const response = await apiInstance('settlement').post(
      '/create-merchant-settlement-account',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
        }
      }
    );

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: CREATE_SETTLEMENT_MUTATION_KEY
  });
};
