import { Link } from "react-router-dom";
import Button from "../../../../../../../components/Button";
import CustomInput from "../../../../../../../components/CustomInput";
import TextAreaInput from "../../../../../../../components/TextAreaInput";
import {
  BasicInformationContainer,
  Title,
  BasicInformationForm,
} from "./styles";

const BasicInformation = () => {
  return (
    <BasicInformationContainer>
      <Title>BASIC INFORMATION</Title>
      <BasicInformationForm>
        <TextAreaInput
          name=""
          label="Tell us about your business"
          placeholder="Type your business Name Here"
        />
        <CustomInput
          label="Support Email"
          name=""
          placeholder="Type your businees support mail Here"
        />
        <CustomInput
          label="Chargeback Email"
          name=""
          placeholder="Type your business chargeback mail Here"
        />
        <Button
          name="Save & Continue"
          className="bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold"
        />
      </BasicInformationForm>
      <div className="text-center my-5">
        <Link to="/" className="text-[16px] font-semibold leading-[20px] ">
          Do this later
        </Link>
      </div>
    </BasicInformationContainer>
  );
};

export default BasicInformation;
