import React from 'react';
import activeCheckIcon from '../../assets/icons/checked-icon.svg';
import { SelectButtonProps } from './types';
import {
  SelectButtonContainer,
  SelectButtonIcon,
  ContentWrapper,
  Title,
  Subtitle,
  CheckboxIcon,
  activeStyle,
  FlexContainer
} from './styles';

export const SelectButton: React.FC<SelectButtonProps> = ({
  title,
  subtitle,
  onSelect,
  selectBtnIcon,
  activeButton,
  value
}) => {
  return (
    <SelectButtonContainer className={activeButton === value ? activeStyle : ''} onClick={onSelect}>
      <FlexContainer>
        <SelectButtonIcon src={selectBtnIcon} />
        <ContentWrapper>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </ContentWrapper>
      </FlexContainer>
      <CheckboxIcon
        // className={activeButton === title ? checkboxActive : ""}
        style={{
          backgroundImage: activeButton === value ? `url(${activeCheckIcon})` : 'none',
          backgroundPosition: 'center'
        }}
      ></CheckboxIcon>
    </SelectButtonContainer>
  );
};

export default SelectButton;
