import React, { PropsWithChildren, useRef } from 'react';
import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useHover } from 'usehooks-ts';
import { cn } from '../../utils/index';

export interface NavLinkItemPropsType {
  text: string;
  path: string;
  tag?: JSX.Element;
  icon: JSX.Element;
  className?: string;
  isAdminOrSupport?: boolean;
  isDropdown?: boolean;
  dropdownItems?: Array<string>;
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
            isActive &&
              'text-[#6231F4] [&_path]:stroke-[#6231F4] [&_rect]:stroke-[#6231F4] bg-[#EEF2FF] rounded-sm',
            className
          )
        )
      }
      to={path}
      target={text === 'API Documentation' ? '_blank' : '_self'}
    >
      <div className='flex text-[12px] items-center gap-[13px] tracking-wider'>
        {icon}
        {text}
      </div>
    </NavLink>
  );
};

export const NavDropdownItem: React.FC<PropsWithChildren<NavLinkItemPropsType>> = ({
  icon,
  text,
  path,
  children
}) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const { pathname } = useLocation();

  return (
    <div ref={hoverRef}>
      <div
        className={cn(
          clsx(
            'flex cursor-pointer items-center p-[5px] text-[13px] font-medium  rounded-sm',
            (isHover || path === pathname) &&
              'text-[#6231F4] [&_path]:stroke-[#6231F4] [&_rect]:stroke-[#6231F4] bg-[#EEF2FF]'
          )
        )}
      >
        <div className='flex relative text-[12px] items-center gap-[13px] tracking-wider'>
          {icon}
          {text}
          <FontAwesomeIcon
            className={clsx(
              ' absolute top-[3px] right-[-20px] transition ',
              isHover && ' transform rotate-180'
            )}
            icon={faAngleDown}
          />
        </div>
      </div>
      {isHover && (
        <div className='w-full flex flex-col justify-center pb-3 pt-1 rounded-sm gap-2 px-9 items-start bg-[#EEF2FF]'>
          {children}
        </div>
      )}
    </div>
  );
};
