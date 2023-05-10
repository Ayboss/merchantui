import BusinessDocument from "../../../../../components/BusinessDocument";
import {
  RegistrationDocumentsWrapper,
  Header,
  Title,
  Subtitle,
  FormWrapper,
  DocumentList,
} from "./styles";

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
      <FormWrapper></FormWrapper>
    </RegistrationDocumentsWrapper>
  );
};

export default BusinessDocuments;
