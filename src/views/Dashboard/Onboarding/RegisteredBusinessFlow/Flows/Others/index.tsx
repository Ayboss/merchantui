import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Button, CustomInput } from '../../../../../../components';
import { useSettingsMutation, SettingsRequestPayloadType } from '../../../../../../services/hooks';
import { OthersWrapper, Header, Title, SubTitle, OthersForm } from './styles';

const Others = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { isLoading, mutateAsync } = useSettingsMutation();

  const onSubmit = (values: unknown) => {
    mutateAsync(values as SettingsRequestPayloadType)
      .then((data) => {
        toast.success(`Data entry ${data?.responseMessage}`);
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <OthersWrapper>
      <Header>
        <Title>Others</Title>
        <SubTitle>Manage your business information here</SubTitle>
      </Header>
      <OthersForm onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label='Phone Number'
          type='phone'
          placeholder='Enter your business phone'
          {...register('phoneNumer', { required: true })}
        />
        <CustomInput
          label='Support Email'
          type='email'
          placeholder='Enter your business support email'
          {...register('supportEmail', { required: true })}
        />
        <CustomInput
          label='Chargeback Email'
          type='email'
          placeholder='Enter your business chargeback email'
          {...register('chargeBackEmail')}
        />
        <CustomInput
          label='Settlement Email'
          type='email'
          placeholder='Enter your business settlement email'
          {...register('settlementReportEmail')}
        />
        <CustomInput
          label='OTP Approval Email'
          type='email'
          placeholder='Enter your business approval email'
          {...register('otpApprovalEmail')}
        />
        <Button
          name='Save'
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          type='submit'
          isBusy={isLoading}
        />
      </OthersForm>
    </OthersWrapper>
  );
};

export default Others;
