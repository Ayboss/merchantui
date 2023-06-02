import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BusinessTypes } from '../../../../constants';
import { Button, SelectButton, SelectInput } from '../../../../components';
import { BusinessActivation, Container, Title, SubTitle, FormWrapper } from './styles';

const GetStarted = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const busineesCategoryList = [{ title: 'Businees1' }, { title: 'Businees2' }];

  const handleProceed = () => {
    navigate('/registered-business/business-information');
  };

  return (
    <BusinessActivation>
      <Container>
        <Title>
          What <span className='text-[#6231F4]'>Business type</span> do you operate ?
        </Title>
        <SubTitle>Select the business types that suits your current need.</SubTitle>
        <FormWrapper>
          {BusinessTypes.map((businessType: any, id: number) => (
            <SelectButton
              key={id}
              selectBtnIcon={businessType.selectIcon}
              title={businessType.title}
              subtitle={businessType.subtitle}
              onSelect={() => setSelectedOption(businessType.title)}
              activeButton={selectedOption}
            />
          ))}
          <SelectInput
            label='Business Category'
            defaultOption='Ex: Financial Services '
            options={busineesCategoryList}
          />
          <Button
            name='Save & Proceed'
            disabled={!(selectedOption.length > 0)}
            onClick={handleProceed}
          />
        </FormWrapper>
      </Container>
    </BusinessActivation>
  );
};

export default GetStarted;
