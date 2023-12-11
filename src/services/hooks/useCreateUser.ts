import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export type CreateUserRequestPayloadType = {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type CreateUsersResponseType = {
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

export const CREATE_USER_QUERY_KEY = ['CREATE_USER_QUERY_KEY'];

export const useCreateUser = () => {
  const request = useCallback(async (data: CreateUserRequestPayloadType) => {
    const response = await apiInstance('auth').post('/api/v1/users/create', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data as CreateUsersResponseType;
  }, []);

  return useMutation({
    mutationKey: ['CREATE_USER_QUERY_KEY'],
    mutationFn: request
  });
};
