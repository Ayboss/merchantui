import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import CustomInput from '@/components/CustomInput';
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
  ForgotPasswordPayloadType,
  useForgotPasswordMutation,
} from '@/services/hooks/useAuthMutation';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const ForgetPassword = () => {
  const { register, handleSubmit } = useForm();
  const { isLoading, mutateAsync } = useForgotPasswordMutation();

  const onSubmit = (values: unknown) => {
    mutateAsync(values as ForgotPasswordPayloadType)
      .then((data) => {
        toast.success(data.data);
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
            <Title>Forget Password</Title>
            <Subtitle>
              Provide Credentials below to reset to your account
            </Subtitle>
          </FormHeader>
          <FormBody>
            <CustomInput
              label='Email Address'
              type='email'
              placeholder='e.g yourmail@mail.com'
              {...register('email')}
            />

            <Button name='Reset Password' isBusy={isLoading} type='submit' />
            <FormLink>
              <Link to='/login' className='font-semibold'>
                Login
              </Link>{' '}
            </FormLink>
          </FormBody>
        </AuthForm>
      </AuthContainer>
    </AuthLayout>
  );
};

export default ForgetPassword;
