import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const GetBanksQueryKey = ['get-banks-query'];

export const getBanks = async () => {
  try {
    const response = await apiInstance('pay').get('/get-banks');

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const useGetBanksQuery = () => {
  return useQuery(GetBanksQueryKey, getBanks, {
    refetchOnWindowFocus: false
  });
};
