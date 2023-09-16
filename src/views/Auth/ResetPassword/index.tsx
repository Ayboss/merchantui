import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthForm, FormBody, FormHeader, Subtitle, Title } from '../styles';
import { ResetPasswordPayloadType, useResetPasswordMutation } from '../../../services/hooks';
import { AuthLayout } from '../../../layouts';
import { Button, CustomInput } from '../../../components';

const schema = yup.object({
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Must be a valid email address')
});

export const ResetPassword = () => {
  const key = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const { isLoading, mutateAsync } = useResetPasswordMutation();
  const tokenId = key.get('_key');

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
        toast.error(error?.response?.data?.message || error?.response?.data?.responseMessage);
      });
  };

  return (
    <AuthLayout>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <FormHeader className='mb-[40px]'>
          <Title className='text-[#444] text-[40px] font-bold'>Reset Password</Title>
          <Subtitle className='text-[18px] font-normal text-[#6F7482] tracking-[0.18px]'>
            Enter your email address to reset your password
          </Subtitle>
        </FormHeader>
        <FormBody>
          <CustomInput
            label='Email Address'
            placeholder='sample@email.com'
            errorText={errors.email?.message}
            {...register('email')}
          />
          <Button
            name='Reset Password'
            isBusy={isLoading}
            type='submit'
            className='text-[#FFF] text-base font-medium w-[210px]'
          />
        </FormBody>
      </AuthForm>
    </AuthLayout>
  );
};

export default ResetPassword;
