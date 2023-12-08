import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export type TransactionPinRequestType = {
  oldPin: string;
  newPin: string;
  newPinConfirmation: string;
};
export const TRANSACTION_PIN_QUERY_KEY = ['TRANSACTION_PIN_QUERY_KEY'];

export const useTransactionPinMutation = () => {
  const load = useCallback(async (data: TransactionPinRequestType) => {
    const response = await apiInstance('payout').put('/change-merchant-pin', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: load,
    mutationKey: TRANSACTION_PIN_QUERY_KEY
  });
};
