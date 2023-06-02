import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import { useForm } from 'react-hook-form';
import PasswordInput from '@/components/PasswordInput';
import AuthLayout from '@/layouts/AuthLayout';
import {
  AuthContainer,
  AuthForm,
  FormBody,
  FormHeader,
  FormLink,
  Subtitle,
  Title,
} from '../styles';
import {
  ResetPasswordPayloadType,
  useResetPasswordMutation,
} from '@/services/hooks/useAuthMutation';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const key = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const { isLoading, mutateAsync } = useResetPasswordMutation();
  const tokenId = key.get('_key');

  const query = new URLSearchParams(useLocation().search);

  console.log(query.get('_key'));

  const onSubmit = (values: unknown) => {
    const fields = {
      ...(values as ResetPasswordPayloadType),
      token: tokenId,
    };
    mutateAsync(fields as ResetPasswordPayloadType)
      .then((data) => {
        toast.success(data?.data);
        navigate('/login', { replace: true });
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

  return (
    <AuthLayout>
      <AuthContainer>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <FormHeader>
            <Title>Reset Password</Title>
            <Subtitle>
              Provide Credentials below to reset to your account
            </Subtitle>
          </FormHeader>
          <FormBody>
            <PasswordInput
              label='New Password'
              placeholder='Password'
              {...register('password')}
            />
            <PasswordInput
              label='Confirm New Password'
              placeholder='Password'
              {...register('password2')}
            />
            <Button name='Reset Password' isBusy={isLoading} type='submit' />
          </FormBody>
        </AuthForm>
      </AuthContainer>
    </AuthLayout>
  );
};

export default ResetPassword;
