import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { ButtonPropsType } from './types';
import { CustomButton } from './styles';

export const inlineButtonClass = 'inline-block p-0 m-0 h-auto w-auto bg-transparent font-semibold';

export const Button: React.FC<ButtonPropsType> = (props) => {
  const { name, onClick, isBusy, disabled, className, type, icon, href = '/' } = props;

  return (
    <>
      {type === 'link' ? (
        <Link to={href} className={clsx('inline-block cursor-pointer', className)}>
          {isBusy ? <FontAwesomeIcon icon={icon ?? faSpinner} spinPulse /> : name}
        </Link>
      ) : (
        <CustomButton
          onClick={isBusy ? undefined : onClick}
          disabled={disabled}
          className={className}
          type={type}
        >
          {isBusy ? <FontAwesomeIcon icon={icon ?? faSpinner} spinPulse /> : name}
        </CustomButton>
      )}
    </>
  );
};

export default Button;
