import { MouseEventHandler } from "react";

export type ButtonPropsType = {
  name: string | JSX.Element;
  className?: string;
  isBusy?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};
