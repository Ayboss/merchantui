import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';
import { LoginResponseType } from './types';

export const LOGIN_MUTATION_KEY = ['login'];
export const SIGNUP_MUTATION_KEY = ['signup'];
export const FORGOT_PASSWORD_MUTATION_KEY = ['forgotPassword'];
export const RESET_PASSWORD_MUTATION_KEY = ['resetPassword'];
export const CHANGE_PASSWORD_MUTATION_KEY = ['changePassword'];

export type LoginRequestPayloadType = {
  username: string;
  password: string;
};

export type SignupRequestPayloadType = {
  email: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  firstname: string;
  surname: string;
  name: string;
};

export type ForgotPasswordPayloadType = {
  email: string;
};

export type ResetPasswordPayloadType = {
  token: string;
  password: string;
  password2: string;
};

export const useLoginMuation = () => {
  const request = useCallback(async (data: LoginRequestPayloadType) => {
    const response = await apiInstance('auth').post('/accounts/login', data);

    return response.data as LoginResponseType;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: LOGIN_MUTATION_KEY
  });
};

export const useSignupMutation = () => {
  const request = useCallback(async (data: SignupRequestPayloadType) => {
    const response = await apiInstance('merchant').post('/register', data);

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: SIGNUP_MUTATION_KEY
  });
};

export const useForgotPasswordMutation = () => {
  const request = useCallback(async (data: ForgotPasswordPayloadType) => {
    const response = await apiInstance('auth').post(`/accounts/forgot-password/${data.email}`);

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: FORGOT_PASSWORD_MUTATION_KEY
  });
};

export const useResetPasswordMutation = () => {
  const request = useCallback(async (data: ResetPasswordPayloadType) => {
    const response = await apiInstance('auth').post('/accounts/reset-password', data);

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: RESET_PASSWORD_MUTATION_KEY
  });
};

export const useChangePasswordMutation = () => {
  const request = useCallback(async (data: any) => {
    const response = await apiInstance('auth').post('/accounts/change-password', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: CHANGE_PASSWORD_MUTATION_KEY
  });
};
