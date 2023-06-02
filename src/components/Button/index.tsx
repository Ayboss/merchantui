import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ButtonPropsType } from './types';
import { CustomButton } from './styles';

export const Button: React.FC<ButtonPropsType> = (props) => {
  const { name, onClick, isBusy, disabled, className, type } = props;

  return (
    <CustomButton
      onClick={isBusy ? undefined : onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      {isBusy ? <FontAwesomeIcon icon={faSpinner} spinPulse /> : name}
    </CustomButton>
  );
};

export default Button;
