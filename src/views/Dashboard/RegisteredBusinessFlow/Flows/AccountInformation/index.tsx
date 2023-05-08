import {
  AccountInformationWrapper,
  Header,
  Title,
  SubTitle,
  FormLabel,
  AccountInformationForm,
} from "./styles";
import CustomInput from "../../../../../components/CustomInput";
import SelectInput from "../../../../../components/SelectInput";
import Button from "../../../../../components/Button";
import { Link } from "react-router-dom";

const AccountInformation = () => {
  return (
    <AccountInformationWrapper>
      <Header>
        <Title>Account Information</Title>
        <SubTitle>Manage your business information</SubTitle>
      </Header>

      <FormLabel>CORPORATE BANK ACCOUNT</FormLabel>
      <AccountInformationForm>
        <SelectInput label="Bank Name" defaultOption="Select your bank" />
        <CustomInput
          label="Account Number"
          placeholder="Enter your account number"
        />
        <CustomInput
          label="Account Name"
          placeholder="Enter your account name"
        />
        <Button
          name="Save & Continue"
          className="bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold"
          onClick={() => {}}
        />
      </AccountInformationForm>
      <div className="text-center my-5">
        <Link to="/" className="text-[16px] font-semibold leading-[20px] ">
          Do this later
        </Link>
      </div>
    </AccountInformationWrapper>
  );
};

export default AccountInformation;
