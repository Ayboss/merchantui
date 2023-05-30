import { useCallback } from 'react';
import { LoginApiInstance, SignupApiInstance } from '..';
import { useMutation } from 'react-query';
import { LoginResponseType } from './types';

export const LOGIN_MUTATION_KEY = ['login'];
export const SIGNUP_MUTATION_KEY = ['signup'];
export const FORGOT_PASSWORD_MUTATION_KEY = ['forgotPassword'];
<<<<<<< HEAD
export const RESET_PASSWORD_MUTATION_KEY = ['resetPassword'];
=======
>>>>>>> ceb3283 (UPDATES: forgot-password endpoint connection)

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

export type ForgotPasswordPayloadType = {
  email: string;
};

<<<<<<< HEAD
export type ResetPasswordPayloadType = {
  token: string;
  password: string;
  password2: string;
  currentPassword: string;
};

=======
>>>>>>> ceb3283 (UPDATES: forgot-password endpoint connection)
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

export const useForgotPasswordMutation = () => {
  const request = useCallback(async (data: ForgotPasswordPayloadType) => {
    const response = await LoginApiInstance.post(
      `/accounts/forgot-password/${data.email}`
    );
    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: FORGOT_PASSWORD_MUTATION_KEY,
  });
};

export const useResetPasswordMutation = () => {
  const request = useCallback(async (data: ResetPasswordPayloadType) => {
    const response = await LoginApiInstance.post(
      '/accounts/reset-password',
      data
    );
    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: RESET_PASSWORD_MUTATION_KEY,
  });
};
