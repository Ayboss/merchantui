import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Button, CustomInput } from '../../../../../../components';
import { useBvnMutation, BvnRequestPayloadType } from '../../../../../../services/hooks';
import { BvnWrapper, Header, Title, SubTitle, FormLabel, BvnForm } from './styles';

const Bvn = () => {
  const { register, handleSubmit } = useForm();
  const { isLoading, mutateAsync } = useBvnMutation();
  const navigate = useNavigate();

  const onSubmit = (values: unknown) => {
    mutateAsync(values as BvnRequestPayloadType)
      .then((data) => {
        toast.success(`Data entry ${data.responseMessage}`);
        navigate('/registered-business/others');
      })
      .catch((error) => {
        toast.error(error?.response?.data?.responseMessage);
      });
  };

  return (
    <BvnWrapper>
      <Header>
        <Title>BVN of Primary Officer </Title>
        <SubTitle>Manage your Business Registration Documents</SubTitle>
      </Header>
      <FormLabel>Board Resolution</FormLabel>
      <BvnForm onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label='BVN'
          placeholder='Enter your BVN Here'
          {...register('bvn', { required: true })}
        />
        <CustomInput
          label='BVN D.O.B'
          type='date'
          placeholder='Enter your BVN D.O.B Here'
          {...register('bvnDob', { required: true })}
        />
        <Button
          name='Save'
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          type='submit'
          isBusy={isLoading}
        />
      </BvnForm>
    </BvnWrapper>
  );
};

export default Bvn;
