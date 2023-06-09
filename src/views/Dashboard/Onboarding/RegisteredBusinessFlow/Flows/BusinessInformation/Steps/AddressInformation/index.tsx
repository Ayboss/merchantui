import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../BasicInformation/styles';
import { Button, TextAreaInput } from '../../../../../../../../components';
import { useKycDataContext } from '../../../../../../../../context/MerchantKycProvider';
import CountrySelect from '../../../../../../../../components/CountrySelect';
import StateSelect from '../../../../../../../../components/StateSelect';
import LgaSelect from '../../../../../../../../components/LgaSelect';
import { AddressInformationContainer, AddressInformationForm } from './styles';

const AddressInformation = ({ onNext }: any) => {
  const { kycData, setKycData } = useKycDataContext();
  // console.log(kycData);
  // console.log();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedcountryId, setSelectedCountryId] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedStateId, setSelectedStateId] = useState('');
  const [selectedLga, setSelectedLga] = useState('');
  const [address, setAddress] = useState('');
  // console.log(selectedCountry, selectedcountryId);
  // console.log(selectedState);
  // console.log(selectedLga);
  // console.log(address);

  const handleCountryChange = (id: string, values: string) => {
    setSelectedCountry(values);
    setSelectedCountryId(id);
  };
  const handleStaeChange = (id: string, values: string) => {
    setSelectedState(values);
    setSelectedStateId(id);
  };

  const handleSubmit = () => {
    setKycData({
      ...kycData,
      businessAddress: address,
      country: selectedCountry,
      state: selectedState,
      lga: selectedLga
    });
  };

  return (
    <AddressInformationContainer>
      <Title>ADDRESS</Title>
      <AddressInformationForm onSubmit={handleSubmit}>
        <CountrySelect
          label='Select country'
          placeholder='Enter your country'
          value={selectedCountry}
          onChange={(e) => handleCountryChange(e.id, e.name)}
        />
        <StateSelect
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
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          onClick={onNext}
        />
      </AddressInformationForm>
      <div className='text-center my-5'>
        <Link to='/' className='text-[16px] font-semibold leading-[20px] '>
          Do this later
        </Link>
      </div>
    </AddressInformationContainer>
  );
};

export default AddressInformation;
