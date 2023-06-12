import React from 'react';
import fileIcon from '../../assets/icons/documents-icon.svg';
import deleteIcon from '../../assets/icons/delete-icon.svg';
import {
  BusinessDocumentWrapper,
  BusinessDocumentLabel,
  DocumentContainer,
  FileIcon,
  Container,
  DocumentName,
  DocumentSize,
  DeleteIcon,
  FlexContainer
} from './styles';
import { BusinessDocumentProps } from './types';

export const BusinessDocument: React.FC<BusinessDocumentProps> = ({
  label,
  name,
  format,
  onDelete
}) => {
  return (
    <BusinessDocumentWrapper>
      <BusinessDocumentLabel>{label}</BusinessDocumentLabel>
      <DocumentContainer>
        <FlexContainer>
          <FileIcon src={fileIcon} alt='File icon' />
          <Container>
            <DocumentName>{name}</DocumentName>
            <DocumentSize>{format}</DocumentSize>
          </Container>
        </FlexContainer>
        <DeleteIcon src={deleteIcon} alt='Delte icon' onClick={onDelete} />
      </DocumentContainer>
    </BusinessDocumentWrapper>
  );
};

export default BusinessDocument;
