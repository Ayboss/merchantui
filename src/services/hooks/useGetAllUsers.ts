import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { apiInstance } from '..';

export const GET_ALL_USERS_QUERY_KEY = ['GET_ALL_USERS_QUERY_KEY'];

export type GetUsersResponseType = {
  data: {
    id: string;
    username: string;
    email: string;
    clientId: string;
    mobileNumber: string;
    firstName: string;
    lastName: string;
    verified: boolean;
    admin: boolean;
    superAdmin: boolean;
    deleted: boolean;
    created: string;
    updated: string;
  };
};

export const useGetAllUsers = () => {
  const load = useCallback(async () => {
    const response = await apiInstance('auth').get('/users/list', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data as GetUsersResponseType;
  }, []);

  return useQuery({
    queryKey: GET_ALL_USERS_QUERY_KEY,
    queryFn: load,
    refetchOnWindowFocus: false
  });
};
