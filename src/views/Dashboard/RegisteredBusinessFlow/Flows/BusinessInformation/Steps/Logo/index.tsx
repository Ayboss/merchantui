import { Link } from "react-router-dom";
import Button from "../../../../../../../components/Button";
import UploadInput from "../../../../../../../components/UploadInput";
import { Title } from "../BasicInformation/styles";
import { LogoInformationContainer, LogoInformationForm } from "./styles";

const LogoInformation = ({ onNext }: any) => {
  return (
    <LogoInformationContainer>
      <Title>BUSINESS LOGO</Title>
      <LogoInformationForm>
        <UploadInput />
        <Button
          name="Save & Continue"
          className="bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold"
          onClick={onNext}
        />
      </LogoInformationForm>
      <div className="text-center my-5">
        <Link to="/" className="text-[16px] font-semibold leading-[20px] ">
          Do this later
        </Link>
      </div>
    </LogoInformationContainer>
  );
};

export default LogoInformation;
