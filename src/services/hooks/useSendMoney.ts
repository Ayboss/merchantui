import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export const sendMoneyQueryKey = ['sendMoneyQuery'];

export type SendMoneyRequestType = {
  beneficiaryAccountName: string;
  beneficiaryAccountNumber: string;
  beneficiaryBankName: string;
  beneficiaryBankCode: string;
  sourceAccountNumber: string;
  transactionAmount: string;
  currencyCode: string;
  narration: string;
};

export const useSendMoney = () => {
  const load = useCallback(async (data: SendMoneyRequestType) => {
    const response = await apiInstance('settlement/admin').post('/send-money', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: load,
    mutationKey: sendMoneyQueryKey
  });
};
