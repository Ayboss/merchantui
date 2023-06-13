import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Title } from '../BasicInformation/styles';
import { Button, CustomInput, URLInput } from '../../../../../../../../components';
import {
  SettingsRequestPayloadType,
  useSettingsMutation
} from '../../../../../../../../services/hooks';
import {
  SocialInformationContainer,
  SocialInformationForm,
  Container,
  FlexWrapper
} from './styles';

import LinkedInIcon from '@/assets/icons/linkedIn-icon.svg';
import TwitterIcon from '@/assets/icons/twitter-icon.svg';
import InstagramIcon from '@/assets/icons/instagram-icon.svg';
import FacebookIcon from '@/assets/icons/facebook-icon.svg';

const SocialInformation = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { isLoading, mutateAsync } = useSettingsMutation();

  const onSubmit = (values: SettingsRequestPayloadType) => {
    mutateAsync(values)
      .then((data) => {
        toast.success(`Data entry ${data?.responseMessage}`);
        navigate('/');
      })
      .catch((error: any) => {
        toast.error(error.message);
      });
  };

  return (
    <SocialInformationContainer>
      <SocialInformationForm onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Title>WEBSITE</Title>
          <CustomInput
            label='website'
            type='url'
            placeholder='Type your business website here'
            {...register('websiteUrl', { required: true })}
          />
        </Container>
        <Container>
          <Title className='mt-10'>SOCIAL MEDIA</Title>
          <FlexWrapper>
            <URLInput
              label='LinkedIn'
              placeholder='input link here'
              icon={LinkedInIcon}
              {...register('linkedInUrl', { required: true })}
            />
            <URLInput
              label='Twiter'
              placeholder='input link here'
              icon={TwitterIcon}
              {...register('twitterUrl', { required: true })}
            />
          </FlexWrapper>
          <FlexWrapper>
            <URLInput
              label='Instagram'
              placeholder='input link here'
              icon={InstagramIcon}
              {...register('instagramUrl', { required: true })}
            />
            <URLInput
              label='Facebook'
              placeholder='input link here'
              icon={FacebookIcon}
              {...register('facebookUrl', { required: true })}
            />
          </FlexWrapper>
        </Container>
        <Button
          name='Save & Continue'
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          isBusy={isLoading}
          type='submit'
        />
      </SocialInformationForm>
    </SocialInformationContainer>
  );
};

export default SocialInformation;
