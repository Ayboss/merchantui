import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export type VerifyBankAccountRequestType = {
  accountNumber: string;
  beneficiaryBank: string;
};

export const verifyBankAccountQueryKey = ['verify-Bank-Account'];

export const useVerifyBankAccount = () => {
  const load = useCallback(async (data: VerifyBankAccountRequestType) => {
    const response = await apiInstance('payout/transfer').post('/verify-bank-account', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: load,
    mutationKey: verifyBankAccountQueryKey
  });
};
