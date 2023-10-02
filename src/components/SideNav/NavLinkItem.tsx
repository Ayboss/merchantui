import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { cn } from '../../utils/index';

export interface NavLinkItemPropsType {
  text: string;
  path: string;
  tag?: JSX.Element;
  icon: JSX.Element;
  className?: string;
  isAdminOrSupport?: boolean;
}

export const NavLinkItem: React.FC<NavLinkItemPropsType> = (props) => {
  const { icon, path, text, className, isAdminOrSupport } = props;

  if (isAdminOrSupport) {
    return (
      <div className='flex items-center p-[5px] text-[#444] text-[13px] font-medium'>
        <div className='flex text-[12px] items-center gap-[13px] tracking-wider'>
          {icon}
          {text}
        </div>
      </div>
    );
  }

  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          clsx(
            'flex items-center p-[5px] text-[#444] text-[13px] font-medium',
            isActive && 'text-[#6231F4] [&_path]:stroke-[#6231F4]',
            className
          )
        )
      }
      to={path}
    >
      <div className='flex text-[12px] items-center gap-[13px] tracking-wider'>
        {icon}
        {text}
      </div>
    </NavLink>
  );
};
