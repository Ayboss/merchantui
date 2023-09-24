import React from 'react';
import { faArrowRightFromBracket, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import { PRIVATE_PATHS, REGULAR_PATHS } from '../../routes/paths';
import { NavLinkItem, NavLinkItemPropsType } from './NavLinkItem';
import { DashboardNavLinkItemIcon, NavGroupType, NavLinkList } from './constants';

export const DashboardSideNav = () => {
  const navigate = useNavigate();
  const NavGroups = Object.keys(NavLinkList) as unknown as NavGroupType[];

  const handleLogOut = () => {
    localStorage.removeItem('key');
    navigate(REGULAR_PATHS.LOGIN);
  };

  return (
    <div className='h-screen w-[280px] pl-[44px] pr-[22px] py-[30px] shadow-[0px_1px_0px_0px_rgba(18_32_59_0.09)] border-solid border-r border-[#E4E4E7]'>
      <Button
        className='bg-[#6231F4] mb-[37px] mt-0 w-[186px] rounded-[10px]'
        name={
          <span className=' text-[13px] flex items-center gap-[10px] justify-center  font-extrabold'>
            <FontAwesomeIcon icon={faPlus} style={{ color: '#f9fafb' }} />
            Add New Business
          </span>
        }
      />
      <NavLinkItem
        path={PRIVATE_PATHS.OVERVIEW}
        className=' mb-5'
        icon={DashboardNavLinkItemIcon}
        text='Dashboard'
      />
      {NavGroups.map((group, idx) => (
        // @ts-ignore
        <NavGroupItem group={group} key={`${group}-${idx}`} items={NavLinkList[group]} />
      ))}
      <div className='border-solid border-t border-[#E4E4E7] w-full mt-[20px] pb-[30px]'>
        <Button
          className='bg-[#F04949] w-[186px] rounded-[6px] h-10'
          onClick={handleLogOut}
          name={
            <span className=' text-[13px] flex items-center gap-[10px] justify-center  font-extrabold'>
              <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: '#ffffff' }} />
              Logout
            </span>
          }
        />
      </div>
    </div>
  );
};

export const NavGroupItem: React.FC<
  { items: Partial<NavLinkItemPropsType>[] } & { group: NavGroupType }
> = (props) => {
  const { group, items } = props;

  return (
    <div className='w-full pt-5 pb-[25px] flex flex-col items-start gap-[15px] border-solid border-t border-[#E4E4E7]'>
      <p className=' uppercase text-[10px] text-gray-400 font-bold tracking-[1px]'>{group}</p>
      {items.map((item, idx) => (
        // @ts-ignore
        <NavLinkItem key={`${group}-${idx}`} {...item} />
      ))}
    </div>
  );
};
