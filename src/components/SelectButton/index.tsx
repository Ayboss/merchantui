import { SelectButtonProps } from "./types";
import {
  SelectButtonContainer,
  SelectButtonIcon,
  ContentWrapper,
  Title,
  Subtitle,
  CheckboxIcon,
  activeStyle,
} from "./styles";
import { useState } from "react";

const SelectButton: React.FC<SelectButtonProps> = ({
  title,
  subtitle,
  onSelect,
  selectBtnIcon,
  activeButton,
}) => {
  return (
    <SelectButtonContainer
      className={activeButton === title ? activeStyle : ""}
      onClick={onSelect}
    >
      <SelectButtonIcon src={selectBtnIcon} />
      <ContentWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentWrapper>
      <CheckboxIcon></CheckboxIcon>
    </SelectButtonContainer>
  );
};

export default SelectButton;
