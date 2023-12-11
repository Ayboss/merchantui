import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export type DeleteUserRequestPayloadType = {
  userId: string;
};

export type DeleteUserResponseType = {
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

export const DELETE_USER_QUERY_KEY = ['DELETE_USER_QUERY_KEY'];

export const useDeleteUser = () => {
  const request = useCallback(async (data: DeleteUserRequestPayloadType) => {
    const response = await apiInstance('auth').delete(`/api/v1/users/delete/${data.userId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data as DeleteUserResponseType;
  }, []);

  return useMutation({
    mutationKey: DELETE_USER_QUERY_KEY,
    mutationFn: request
  });
};
