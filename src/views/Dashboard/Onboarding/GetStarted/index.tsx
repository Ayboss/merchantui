import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BusinessTypes, MerchantCategories } from '../../../../constants';
import { Button, SelectButton, SelectInput } from '../../../../components';
import { useKycDataContext } from '../../../../context/MerchantKycProvider';
import { BusinessActivation, Container, Title, SubTitle, FormWrapper } from './styles';

const GetStarted = () => {
  const navigate = useNavigate();
  const { setKycData } = useKycDataContext();
  const [merchchantBusinessType, setMerchchantBusinessType] = useState('');
  const [merchantBusinessCategory, setMerchantBusinessCategory] = useState('');

  const handleOnSubmit = () => {
    setKycData({
      businessType: merchchantBusinessType,
      businessCategory: merchantBusinessCategory
    });
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
              onSelect={() => setMerchchantBusinessType(businessType.title)}
              activeButton={merchchantBusinessType}
            />
          ))}
          <SelectInput
            label='Business Category'
            defaultOption='Ex: Financial Services '
            options={MerchantCategories}
            value={merchantBusinessCategory}
            onChange={(e) => setMerchantBusinessCategory(e.target.value)}
          />
          <Button
            name='Save & Proceed'
            disabled={!(merchchantBusinessType.length > 0 && merchantBusinessCategory.length > 0)}
            onClick={handleOnSubmit}
          />
        </FormWrapper>
      </Container>
    </BusinessActivation>
  );
};

export default GetStarted;
