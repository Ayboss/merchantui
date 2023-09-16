import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export interface NavLinkItemPropsType {
  text: string;
  path: string;
  tag?: JSX.Element;
  icon: JSX.Element;
  className?: string;
}

export const NavLinkItem: React.FC<NavLinkItemPropsType> = (props) => {
  const { icon, path, text, tag, className } = props;

  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          'flex items-center p-[5px] text-[#444] text-[13px] font-medium',
          isActive && 'text-[#6231F4] [&_path]:stroke-[#6231F4]',
          className
        )
      }
      to={path}
    >
      <div className='flex items-center gap-[13px] tracking-wider'>
        {icon}
        {text}
      </div>
      {tag && tag}
    </NavLink>
  );
};
