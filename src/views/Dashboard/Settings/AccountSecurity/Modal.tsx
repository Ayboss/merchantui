import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import BorderDivider from '../BorderDIvider';
import { Popup, Button, CustomInput } from '../../../../components';
import { useChangePasswordMutation } from '../../../../services/hooks';

const schema = yup.object({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 characters minimum.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase char')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase char')
    .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).'),
  password2: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
  currentPassword: yup.string().required('Current password is required')
});

interface FormValues {
  password: string;
  password2: string;
  currentPassword: string;
}

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(schema)
  });
  const { mutateAsync, isLoading } = useChangePasswordMutation();

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    mutateAsync({
      ...values
    })
      .then(() => {
        toast.success('Password changed successfully');
        onClose();
      })
      .catch((error) => {
        if (Array.isArray(error?.response?.data?.errors)) {
          const errorMessages = error?.response?.data?.errors;

          errorMessages.forEach((error: any) =>
            toast.error(`${error?.fieldName} ${error?.message}`)
          );
        } else {
          toast.error(error?.response?.data?.responseMessage || error?.response?.data?.message);
        }
      });
  };

  return (
    <Popup title='Change Password' onClose={onClose}>
      <BorderDivider />
      <form onSubmit={handleSubmit(onSubmit)} className='mx-10 flex flex-col gap-5 pt-7 mb-10'>
        <CustomInput
          errorText={errors.currentPassword?.message}
          type='password'
          label='Current Password'
          {...register('currentPassword', {
            required: true,
            pattern: /^[0-9]+$/
          })}
        />
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
          className='bg-[#6231F4]  mt-7 w-[200px] h-[50px] rounded-[10px]  text-[11px] font-extrabold'
          name='Save New Password'
          type='submit'
          isBusy={isLoading}
        />
      </form>
    </Popup>
  );
};

export default Modal;
