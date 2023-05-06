import { SelectButtonProps } from "./types";
import {
  SelectButtonContainer,
  SelectButtonIcon,
  ContentWrapper,
  Title,
  Subtitle,
  CheckboxIcon,
  activeStyle,
  FlexContainer,
  checkboxActive,
} from "./styles";
import { useState } from "react";
import activeCheckIcon from "../../assets/icons/checked-icon.svg";

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
          backgroundImage:
            activeButton === title ? `url(${activeCheckIcon})` : "none",
          backgroundPosition: "center",
        }}
      ></CheckboxIcon>
    </SelectButtonContainer>
  );
};

export default SelectButton;
