import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import { useForm } from 'react-hook-form';
import PasswordInput from '../../../components/PasswordInput';
import AuthLayout from '../../../layouts/AuthLayout';
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
} from '../../../services/hooks/useAuthMutation';

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const { isLoading, mutateAsync } = useResetPasswordMutation();

  const onSubmit = (values: unknown) => {
    mutateAsync(values as ResetPasswordPayloadType)
      .then((data) => {
        console.log();
      })
      .catch((error) => {
        console.log(error);
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
              {...register('password')}
            />
            <Button name='Reset Password' isBusy={loading} type='submit' />
          </FormBody>
        </AuthForm>
      </AuthContainer>
    </AuthLayout>
  );
};

export default ResetPassword;
