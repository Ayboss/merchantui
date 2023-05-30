import React, { useRef, useState } from 'react';
import {
  AuthContainer,
  AuthForm,
  FormHeader,
  Title,
  Subtitle,
  FormBody,
  FormLink,
  FormGroup,
} from '../styles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import AuthLayout from '../../../layouts/AuthLayout';
import CustomInput from '../../../components/CustomInput';
import PasswordInput from '../../../components/PasswordInput';
import Button from '../../../components/Button';
import CheckboxInput from '../../../components/CheckboxInput';
import { Link, useNavigate } from 'react-router-dom';
import {
  SignupRequestPayloadType,
  useSignupMutation,
} from '../../../services/hooks/useAuthMutation';
import { toast } from 'react-toastify';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState, watch } = useForm();
  const { isLoading, mutateAsync } = useSignupMutation();
  const navigate = useNavigate();
  const { errors } = formState;
  const password = useRef({});
  password.current = watch('password', '');

  //submit request
  const onSubmit = (values: unknown) => {
    mutateAsync(values as SignupRequestPayloadType)
      .then((data) => {
        toast.success(data?.responseMessage);
        navigate('/login', { replace: true });
      })
      .catch((error) => {
        toast.error(error?.message);
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
              // ref={register({
              //   validate: value => value === password.current || "The passwords do not match"
              // })}
            />

            <CheckboxInput />
            <Button name='Create account' isBusy={isLoading} type='submit' />
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
