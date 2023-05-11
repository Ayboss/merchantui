import BusinessDocument from "../../../../../components/BusinessDocument";
import {
  RegistrationDocumentsWrapper,
  Header,
  Title,
  Subtitle,
  FormWrapper,
  DocumentList,
  DocumentPreviewBtn,
  PreviewIcon,
  UploadLabel,
} from "./styles";
import IconPreview from "../../../../../assets/icons/preview-icon.svg";
import UploadInput from "../../../../../components/UploadInput";
import Button from "../../../../../components/Button";
import { Link } from "react-router-dom";

const BusinessDocuments = () => {
  return (
    <RegistrationDocumentsWrapper>
      <Header>
        <Title>Business Registration Documents</Title>
        <Subtitle>Manage your Business Registration Documents</Subtitle>
      </Header>
      <DocumentList>
        <BusinessDocument
          label="board resolution"
          name="Board Resolution Document"
        />
      </DocumentList>
      <DocumentPreviewBtn>
        <PreviewIcon src={IconPreview} />
        <span>See Document Sample</span>
      </DocumentPreviewBtn>
      <FormWrapper>
        <UploadLabel>Company Profile*</UploadLabel>
        <UploadInput />
        <Button
          name="Save & Continue"
          className="bg-[#D3D3D3] text-[#2A2A2A] text-[16px] font-bold"
          onClick={() => {}}
        />
      </FormWrapper>
      <div className="text-center my-5">
        <Link to="/" className="text-[16px] font-semibold leading-[20px] ">
          Do this later
        </Link>
      </div>
    </RegistrationDocumentsWrapper>
  );
};

export default BusinessDocuments;
