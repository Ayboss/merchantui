import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

// export type TransactionItemType = {
//   accountNumber: null | number;
//   amount: number;
//   amountPaid: number;
//   balanceToPay: number;
//   channel: null | string;
//   code: null | string | number;
//   created: string | null;
//   currency: string;
//   customerEmail: string | null;
//   customerMobile: string | null;
//   customerName: string;
//   excessPayment: number;
//   id: string;
//   onusReference: string;
//   paymentStatus: 'PENDING' | 'SUCCESSFUL' | 'FAILED';
//   reference: string;
//   vat: null | number;
// };

// export type TransactionsResponseType = {
//   responseCode: string;
//   responseMessage: string;
//   success: boolean;
//   data: {
//     content: TransactionItemType[];
//     empty: boolean;
//     first: boolean;
//     last: boolean;
//     number: boolean;
//     numberOfElements: number;
//     pageable: {
//       offset: number;
//       pageNumber: number;
//       pageSize: number;
//       paged: boolean;
//       sort: {
//         empty: boolean;
//         sorted: boolean;
//         unsorted: boolean;
//       };
//       unpaged: boolean;
//     };
//     size: number;
//     totalElements: number;
//     totalPages: number;
//   };
// };

export type PayoutQueryParamsType = { page?: number; size?: number; sort?: Array<string> };

export const payoutQueryKey = ['payout-results'];

export const useGetPayoutsQuery = (query?: PayoutQueryParamsType, config?: any) => {
  const load = useCallback(async () => {
    const response = await apiInstance('settlement').get('/merchant-payouts', {
      params: query,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, [query]);

  return useQuery([...payoutQueryKey, query?.page], load, {
    ...config,
    refetchOnWindowFocus: false,
    keepPreviousData: true
  });
};
