import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export type CreateSettlementAccountRequestPayloadType = {
  bankCode: string;
  accountNumber: string;
  accountName: string;
  bank: string;
};

export const createSettlementAccountQueryKey = ['create-merchant-settlement-account'];

export const useCreateSettlementAccount = () => {
  const request = useCallback(async (data: CreateSettlementAccountRequestPayloadType) => {
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
    mutationKey: createSettlementAccountQueryKey,
    mutationFn: request
  });
};
