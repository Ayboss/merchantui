import {
  BusinessDocumentWrapper,
  BusinessDocumentLabel,
  DocumentContainer,
  FileIcon,
  Container,
  DocumentName,
  DocumentSize,
  DeleteIcon,
  FlexContainer,
} from "./styles";
import fileIcon from "../../assets/icons/documents-icon.svg";
import deleteIcon from "../../assets/icons/delete-icon.svg";

interface BusinessDocumentProps {
  label: string;
  name: string;
}

const BusinessDocument: React.FC<BusinessDocumentProps> = ({ label, name }) => {
  return (
    <BusinessDocumentWrapper>
      <BusinessDocumentLabel>{label}</BusinessDocumentLabel>
      <DocumentContainer>
        <FlexContainer>
          <FileIcon src={fileIcon} alt="File icon" />
          <Container>
            <DocumentName>{name}</DocumentName>
            <DocumentSize>JPEG, 20MB</DocumentSize>
          </Container>
        </FlexContainer>
        <DeleteIcon src={deleteIcon} alt="Delte icon" />
      </DocumentContainer>
    </BusinessDocumentWrapper>
  );
};

export default BusinessDocument;