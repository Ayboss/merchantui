import SelectButton from "../../../components/SelectButton";
import {
  BusinessActivation,
  Container,
  Title,
  SubTitle,
  FormWrapper,
} from "./styles";
import { BusinessTypes } from "../../../constants";
import { useState } from "react";
import SelectInput from "../../../components/SelectInput";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const busineesCategoryList = [{ title: "Businees1" }, { title: "Businees2" }];

  const handleProceed = () => {
    navigate("/registered-business/business-information");
  };

  return (
    <BusinessActivation>
      <Container>
        <Title>
          What <span className="text-[#6231F4]">Business type</span> do you
          operate ?
        </Title>
        <SubTitle>
          Select the business types that suits your current need.
        </SubTitle>
        <FormWrapper>
          {BusinessTypes.map((businessType) => (
            <SelectButton
              selectBtnIcon={businessType.selectIcon}
              title={businessType.title}
              subtitle={businessType.subtitle}
              onSelect={() => setSelectedOption(businessType.title)}
              activeButton={selectedOption}
            />
          ))}
          <SelectInput
            label="Business Category"
            defaultOption="Ex: Financial Services "
            options={busineesCategoryList}
          />
          <Button
            name="Save & Proceed"
            disabled={selectedOption.length > 0 ? false : true}
            onClick={handleProceed}
          />
        </FormWrapper>
      </Container>
    </BusinessActivation>
  );
};

export default GetStarted;
