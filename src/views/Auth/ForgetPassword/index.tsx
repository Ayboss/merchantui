import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import {
  AuthContainer,
  AuthForm,
  FormBody,
  FormHeader,
  FormLink,
  Subtitle,
  Title
} from '../styles';
import { ForgotPasswordPayloadType, useForgotPasswordMutation } from '../../../services/hooks';
import { AuthLayout } from '../../../layouts/AuthLayout';
import { Button, CustomInput } from '../../../components';

export const ForgetPassword = () => {
  const { register, handleSubmit } = useForm();
  const { isLoading, mutateAsync } = useForgotPasswordMutation();

  const onSubmit = (values: unknown) => {
    mutateAsync(values as ForgotPasswordPayloadType)
      .then((data: any) => {
        toast.success(data.data);
      })
      .catch((error: any) => {
        toast.error(error?.response?.data?.message || error?.response?.data?.responseMessage);
      });
  };

  return (
    <AuthLayout>
      <AuthContainer>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <FormHeader className='mb-[40px]'>
            <Title className='text-[#444] text-[40px] font-bold'>Forget Password</Title>
            <Subtitle className='text-[18px] font-normal text-[#6F7482] tracking-[0.18px]'>
              Enter your email address to reset your password
            </Subtitle>
          </FormHeader>
          <FormBody>
            <CustomInput
              label='Email Address'
              type='email'
              placeholder='e.g yourmail@mail.com'
              {...register('email')}
            />

            <Button
              name='Reset Password'
              isBusy={isLoading}
              type='submit'
              className='bg-[#D3D3D3] text-[#2A2A2A] lg:bg-[#6231F4] lg:text-[#fff]'
            />
            <FormLink>
              <Link to='/login' className='text-[#FFF] text-base font-medium w-[210px]'>
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
