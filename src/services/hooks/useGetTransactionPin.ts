import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const GET_TRANSACTION_PIN_QUERY_KEY = ['GET_TRANSACTION_PIN_QUERY_KEY'];

export type TransactionPinResponseType = {
  oldPin: string;
  newPin: string;
  newPinConfirmation: string;
};

export const useGetTransactionPin = () => {
  const load = useCallback(async () => {
    const response = await apiInstance('merchant').get('/change-merchant-pin', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data as TransactionPinResponseType;
  }, []);

  return useQuery({
    queryKey: GET_TRANSACTION_PIN_QUERY_KEY,
    queryFn: load,
    refetchOnWindowFocus: false
  });
};
