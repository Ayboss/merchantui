import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  AuthContainer,
  AuthForm,
  FormHeader,
  Title,
  Subtitle,
  FormBody,
  FormLink
} from '../styles';
import { useAuth } from '../../../hooks';
import { LoginRequestPayloadType, useLoginMuation } from '../../../services/hooks';
import { setToLocal } from '../../../utils';
import { AuthLayout } from '../../../layouts';
import { Button, CustomInput, PasswordInput } from '../../../components';

export const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { register, handleSubmit } = useForm();

  const { isLoading, mutateAsync } = useLoginMuation();

  const onSubmit = (values: unknown) => {
    mutateAsync(values as LoginRequestPayloadType)
      .then((data: any) => {
        setToLocal('user', JSON.stringify(data?.data));
        setAuth(data?.data);
        toast.success(data?.message);
        navigate(from, { replace: true });
      })
      .catch((error: any) => {
        toast.error(error?.response?.data?.message);
      });
  };

  return (
    <AuthLayout>
      <AuthContainer>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <FormHeader>
            <Title>Log in</Title>
            <Subtitle>Provide Credentials below to login to your account</Subtitle>
          </FormHeader>
          <FormBody>
            <CustomInput
              label='Email Address'
              type='email'
              placeholder='e.g yourmail@mail.com'
              {...register('username')}
            />
            <PasswordInput label='Password' placeholder='Password' {...register('password')} />
            <Link
              to='/forget-password'
              className='text-[#6231F4] font-semibold flex justify-end mt-3'
            >
              Forgot Password?
            </Link>{' '}
            <Button name='Login' isBusy={isLoading} type='submit' />
            <FormLink>
              Don’t have an account ?{' '}
              <Link to='/signup' className='font-bold'>
                Sign Up now !
              </Link>{' '}
            </FormLink>
          </FormBody>
        </AuthForm>
      </AuthContainer>
    </AuthLayout>
  );
};

export default Login;
