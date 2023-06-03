import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  AuthContainer,
  AuthForm,
  FormHeader,
  Title,
  Subtitle,
  FormBody,
  FormLink,
  FormGroup
} from '../styles';
import { SignupRequestPayloadType, useSignupMutation } from '../../../services/hooks';
import { AuthLayout } from '../../../layouts';
import { Button, CheckboxInput, CustomInput, PasswordInput } from '../../../components';

export const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { isLoading, mutateAsync } = useSignupMutation();
  const navigate = useNavigate();

  const onSubmit = (values: unknown) => {
    mutateAsync(values as SignupRequestPayloadType)
      .then((data: any) => {
        toast.success(data?.responseMessage);
        navigate('/login', { replace: true });
      })
      .catch((error: any) => {
        toast.error(error?.response?.data?.message);
      });
  };

  return (
    <AuthLayout>
      <AuthContainer className='min-h-screen'>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <FormHeader>
            <Title>Create an account</Title>
            <Subtitle>Provide information below to create an account</Subtitle>
          </FormHeader>
          <FormBody>
            <CustomInput
              label='Business Name'
              type='text'
              placeholder='Enter business name'
              {...register('name', { required: true })}
            />
            <FormGroup>
              <CustomInput
                label='First Name'
                type='text'
                placeholder='Enter first name'
                {...register('firstname', { required: true })}
              />
              <CustomInput
                label='Last Name'
                type='text'
                placeholder='Enter last name'
                {...register('lastname', { required: true })}
              />
            </FormGroup>
            <CustomInput
              label='Work Email Address'
              type='email'
              placeholder='Enter business email address'
              {...register('email', { required: true })}
            />
            <CustomInput
              label='Phone Number'
              type='text'
              placeholder='enter phone number'
              {...register('phone', { required: true })}
            />
            <PasswordInput
              label='Password'
              placeholder='Password'
              {...register('password', { required: true })}
            />
            <PasswordInput
              label='Confirm Password'
              placeholder='confirm password'
              {...register('passwordConfirmation', { required: true })}
            />

            <CheckboxInput />
            <Button
              name='Create account'
              isBusy={isLoading}
              type='submit'
              className='bg-[#D3D3D3] text-[#2A2A2A] lg:bg-[#6231F4] lg:text-[#fff]'
            />
            <FormLink>
              Already have an account ?{' '}
              <Link to='/login' className='font-bold'>
                Sign In
              </Link>
            </FormLink>
          </FormBody>
        </AuthForm>
      </AuthContainer>
    </AuthLayout>
  );
};

export default Signup;
