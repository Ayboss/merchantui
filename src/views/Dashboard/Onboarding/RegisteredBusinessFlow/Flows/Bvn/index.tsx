import {
  BvnWrapper,
  Header,
  Title,
  SubTitle,
  FormLabel,
  BvnForm,
} from './styles';
import CustomInput from '@/components/CustomInput';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';

const Bvn = () => {
  return (
    <BvnWrapper>
      <Header>
        <Title>BVN of Primary Officer </Title>
        <SubTitle>Manage your Business Registration Documents</SubTitle>
      </Header>
      <FormLabel>Board Resolution</FormLabel>
      <BvnForm>
        <CustomInput name='bvn' label='BVN' placeholder='Enter your BVN Here' />
        <CustomInput
          name='bvnDOB'
          label='BVN D.O.B'
          placeholder='Enter your BVN D.O.B Here'
        />
        <Button
          name='Save & Continue'
          className='bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold'
          onClick={() => {}}
        />
      </BvnForm>
      <div className='text-center my-5'>
        <Link to='/' className='text-[16px] font-semibold leading-[20px] '>
          Do this later
        </Link>
      </div>
    </BvnWrapper>
  );
};

export default Bvn;
