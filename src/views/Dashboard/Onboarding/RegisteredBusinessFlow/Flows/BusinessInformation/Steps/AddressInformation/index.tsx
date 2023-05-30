import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import SelectInput from '@/components/SelectInput';
import TextAreaInput from '@/components/TextAreaInput';
import { Title } from '../BasicInformation/styles';
import { AddressInformationContainer, AddressInformationForm } from './styles';

const AddressInformation = ({ onNext }: any) => {
  return (
    <AddressInformationContainer>
      <Title>ADDRESS</Title>
      <AddressInformationForm>
        <SelectInput
          label='Select Country'
          defaultOption='Select your country'
        />
        <SelectInput label='Select State' defaultOption='Select your state' />
        <SelectInput label='Select L.G.A' defaultOption='select your L.G.A' />
        <TextAreaInput
          label='Address'
          name='address'
          placeholder='Input your address'
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
