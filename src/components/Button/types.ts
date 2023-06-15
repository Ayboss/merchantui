import { MouseEventHandler } from 'react';

export type ButtonPropsType = {
  name: string | JSX.Element;
  className?: string;
  isBusy?: boolean;
  onClick?: (() => void) | MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  type?: any;
  icon?: any;
};
