import { useCallback } from 'react';
import { LoginApiInstance, SignupApiInstance } from '..';
import { useMutation } from 'react-query';
import { LoginResponseType } from './types';

export const LOGIN_MUTATION_KEY = ['login'];
export const SIGNUP_MUTATION_KEY = ['signup'];

export type LoginRequestPayloadType = {
  username: string;
  password: string;
};

export type SignupRequestPayloadType = {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  firstName: string;
  lastName: string;
};

export const useLoginMuation = () => {
  const request = useCallback(async (data: LoginRequestPayloadType) => {
    const response = await LoginApiInstance.post('/accounts/login', data);
    return response.data as LoginResponseType;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: LOGIN_MUTATION_KEY,
  });
};

export const useSignupMutation = () => {
  const request = useCallback(async (data: SignupRequestPayloadType) => {
    const response = await SignupApiInstance.post('/register', data);
    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: SIGNUP_MUTATION_KEY,
  });
};
