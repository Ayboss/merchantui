import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContainer, AuthForm, FormBody, FormHeader, Subtitle, Title } from '../styles';
import { ResetPasswordPayloadType, useResetPasswordMutation } from '../../../services/hooks';
import { AuthLayout } from '../../../layouts';
import { Button, PasswordInput } from '../../../components';

export const ResetPassword = () => {
  const key = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { isLoading, mutateAsync } = useResetPasswordMutation();
  const tokenId = key.get('_key');

  // const query = new URLSearchParams(useLocation().search);

  const onSubmit = (values: unknown) => {
    const fields = {
      ...(values as ResetPasswordPayloadType),
      token: tokenId
    };

    mutateAsync(fields as ResetPasswordPayloadType)
      .then((data: any) => {
        toast.success(data?.data);
        navigate('/login', { replace: true });
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
            <Title>Reset Password</Title>
            <Subtitle>Provide Credentials below to reset to your account</Subtitle>
          </FormHeader>
          <FormBody>
            <PasswordInput label='New Password' placeholder='Password' {...register('password')} />
            <PasswordInput
              label='Confirm New Password'
              placeholder='Password'
              {...register('password2')}
            />
            <Button
              name='Reset Password'
              isBusy={isLoading}
              type='submit'
              className='bg-[#D3D3D3] text-[#2A2A2A] lg:bg-[#6231F4] lg:text-[#fff]'
            />
          </FormBody>
        </AuthForm>
      </AuthContainer>
    </AuthLayout>
  );
};

export default ResetPassword;
