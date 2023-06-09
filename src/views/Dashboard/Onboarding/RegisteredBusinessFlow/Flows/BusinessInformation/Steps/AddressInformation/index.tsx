import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CountryPicker } from 'country-react-select';
import { Title } from '../BasicInformation/styles';
import { Button, SelectInput, TextAreaInput } from '../../../../../../../../components';
import { AddressInformationContainer, AddressInformationForm } from './styles';
// import { useKycDataContext } from '../../../../../../../../context/MerchantKycProvider';

const AddressInformation = ({ onNext }: any) => {
  // const { kycData, setKycData } = useKycDataContext();
  // console.log(kycData);
  // console.log();
  const [selectedCountry, setSelectedCountry] = useState();

  return (
    <AddressInformationContainer>
      <Title>ADDRESS</Title>
      <AddressInformationForm>
        <CountryPicker value={selectedCountry} onChange={setSelectedCountry} />
        <SelectInput label='Select Country' defaultOption='Select your country' />
        <SelectInput label='Select State' defaultOption='Select your state' />
        <SelectInput label='Select L.G.A' defaultOption='select your L.G.A' />
        <TextAreaInput label='Address' name='address' placeholder='Input your address' />
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
