import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthForm, FormBody, FormHeader, Title } from '../styles';
import { ResetPasswordPayloadType, useResetPasswordMutation } from '../../../services/hooks';
import { AuthLayout } from '../../../layouts';
import { Button, CustomInput } from '../../../components';

const schema = yup.object({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 characters minimum.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase char')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase char')
    .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).'),
  password2: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
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
        navigate('/login');
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
          {/* <Subtitle className='text-[18px] font-normal text-[#6F7482] tracking-[0.18px]'>
            Enter your new password
          </Subtitle> */}
        </FormHeader>
        <FormBody className='gap-5 flex flex-col'>
          <CustomInput
            errorText={errors.password?.message}
            type='password'
            label='New Password'
            {...register('password', {
              required: true,
              pattern: /^[0-9]+$/
            })}
          />
          <CustomInput
            errorText={errors.password2?.message}
            type='password'
            label='Confirm Password'
            {...register('password2', {
              required: true,
              pattern: /^[0-9]+$/
            })}
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
