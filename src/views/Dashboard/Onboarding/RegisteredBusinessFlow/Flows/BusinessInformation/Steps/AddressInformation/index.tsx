import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Title } from '../BasicInformation/styles';
import {
  Button,
  TextAreaInput,
  CountrySelectInput,
  StateSelectInput,
  LgaSelect
} from '../../../../../../../../components';
import { useKycDataContext } from '../../../../../../../../context/MerchantKycProvider';

import {
  useProfileMutation,
  ProfileRequestPayloadType
} from '../../../../../../../../services/hooks/useProfileMutation';
import { AddressInformationContainer, AddressInformationForm } from './styles';

const AddressInformation = ({ onNext, setCurrentStep }: any) => {
  setCurrentStep('2');
  const { kycData, setKycData } = useKycDataContext();
  const { isLoading, mutateAsync } = useProfileMutation();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedcountryId, setSelectedCountryId] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedStateId, setSelectedStateId] = useState('');
  const [selectedLga, setSelectedLga] = useState('');
  const [address, setAddress] = useState('');

  const handleCountryChange = (id: string, values: string) => {
    setSelectedCountry(values);
    setSelectedCountryId(id);
  };
  const handleStaeChange = (id: string, values: string) => {
    setSelectedState(values);
    setSelectedStateId(id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync(kycData as ProfileRequestPayloadType)
      .then((data) => {
        toast.success(`Data entry ${data?.responseMessage}`);
        onNext();
      })
      .catch((error) => {
        toast.error(error?.response?.data?.responseMessage);
      });
  };

  useEffect(() => {
    setKycData({
      ...kycData,
      businessAddress: address,
      country: selectedCountry,
      state: selectedState,
      lga: selectedLga
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, selectedState, selectedLga, address]);

  return (
    <AddressInformationContainer>
      <Title>ADDRESS</Title>
      <AddressInformationForm onSubmit={handleSubmit}>
        <CountrySelectInput
          label='Select country'
          placeholder='Enter your country'
          value={selectedCountry}
          onChange={(e) => handleCountryChange(e.id, e.name)}
        />
        <StateSelectInput
          label='Select State'
          placeholder='Enter your state'
          value={selectedState}
          onChange={(e) => handleStaeChange(e.id, e.name)}
          country={selectedcountryId}
        />
        <LgaSelect
          label='Select L.G.A'
          placeholder='Enter your L.G.A'
          value={selectedLga}
          onChange={(e) => setSelectedLga(e.name)}
          country={selectedcountryId}
          state={selectedStateId}
        />

        <TextAreaInput
          label='Address'
          placeholder='Input your address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button
          name='Save & Continue'
          isBusy={isLoading}
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          type='submit'
          disabled={!(selectedCountry.length > 0 && selectedState.length > 0 && address.length > 0)}
        />
      </AddressInformationForm>
    </AddressInformationContainer>
  );
};

export default AddressInformation;
