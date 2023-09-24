import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import clsx from 'clsx';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthForm, FormHeader, Title, Subtitle, FormBody, FormGroup } from '../styles';
import { SignupRequestPayloadType, useSignupMutation } from '../../../services/hooks';
import { AuthLayout } from '../../../layouts';
import { Button, CustomInput, inlineButtonClass } from '../../../components';
import { REGULAR_PATHS } from '../../../routes/paths';
import { Checkbox } from '../../../components/CheckboxInput/styles';

const schema = yup.object({
  firstname: yup.string().required(),
  surname: yup.string().required(),
  phone: yup
    .string()
    .matches(/^\+\d+$/, 'Must be a valid phone number starting with your country code'),
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Must be a valid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 characters minimum.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase char')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase char')
    .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
});

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const [checked, setChecked] = useState(false);
  const { isLoading, mutateAsync } = useSignupMutation();
  const navigate = useNavigate();

  const onSubmit = (values: unknown) => {
    if (!checked) {
      toast.error(
        'You must agree to the Terms of Service and Privacy Policy of Payonus before proceeding'
      );

      return;
    }

    const { email, firstname, surname, password, passwordConfirmation, phone } =
      values as SignupRequestPayloadType;

    const data = {
      password,
      passwordConfirmation,
      email,
      phone,
      firstname,
      lastname: surname,
      name: firstname,
      approvedForProcessing: true,
      sendEmail: true
    };

    mutateAsync({
      ...data
    } as unknown as SignupRequestPayloadType)
      .then((data: any) => {
        toast.success(data?.responseMessage);
        navigate('/login', { replace: true });
      })
      .catch((error: any) => {
        toast.error(error?.response?.data?.message || error?.response?.data?.responseMessage);
      });
  };

  return (
    <AuthLayout>
      <AuthForm className='w-full max-w-[500px]' onSubmit={handleSubmit(onSubmit)}>
        <FormHeader className='mb-[40px]'>
          <Title className='text-[#444] text-[40px] font-bold'>Sign Up</Title>
          <Subtitle className='text-[18px] font-normal text-[#6F7482] tracking-[0.18px]'>
            Have an account?{' '}
            <Button
              type={'link'}
              name={'Sign In'}
              href={REGULAR_PATHS.LOGIN}
              className={clsx('text-[#5329D3]', inlineButtonClass)}
            />{' '}
          </Subtitle>
        </FormHeader>
        <FormBody className='flex flex-col gap-7'>
          <FormGroup className=' items-baseline'>
            <CustomInput
              label='First Name'
              type='text'
              placeholder='Enter first name'
              errorText={errors.firstname?.message}
              {...register('firstname')}
              className='w-full'
            />
            <CustomInput
              label='Surname'
              type='text'
              placeholder='Enter Surname'
              errorText={errors.surname?.message}
              {...register('surname')}
              className='w-full'
            />
          </FormGroup>
          <CustomInput
            label='Phone number'
            type='text'
            errorText={errors.phone?.message}
            placeholder='+234 999 111 1111'
            {...register('phone')}
          />
          <CustomInput
            label=' Email Address'
            type='email'
            errorText={errors.email?.message}
            placeholder='sample@mail.com'
            {...register('email')}
          />
          <CustomInput
            label='Password'
            placeholder='Password'
            type='password'
            errorText={errors.password?.message}
            {...register('password')}
          />
          <CustomInput
            label='Confirm Password'
            placeholder='confirm password'
            type='password'
            errorText={errors.passwordConfirmation?.message}
            {...register('passwordConfirmation')}
          />
        </FormBody>

        <div className='flex w-fit  mt-5 gap-2'>
          <Checkbox
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
            id='agreeTerms'
            className='border-[#B8BCCA] cursor-pointer'
            type='checkbox'
          />
          <label
            htmlFor='agreeTerms'
            className='text-sm select-none text-neutral-700 cursor-pointer font-medium leading-tight'
          >
            I agree to the{' '}
            <Button
              type={'link'}
              name={'Terms of Service'}
              href={REGULAR_PATHS.LOGIN}
              className={clsx(inlineButtonClass, 'text-[#5329D3] underline font-normal')}
            />{' '}
            and{' '}
            <Button
              type={'link'}
              name={'Privacy Policy of Payonus'}
              href={REGULAR_PATHS.LOGIN}
              className={clsx(inlineButtonClass, 'text-[#5329D3] underline font-normal')}
            />{' '}
            .
          </label>
        </div>
        <Button
          name='Create account'
          isBusy={isLoading}
          type='submit'
          className='text-[#FFF] text-base font-medium w-[210px]'
        />
      </AuthForm>
    </AuthLayout>
  );
};

export default Signup;
