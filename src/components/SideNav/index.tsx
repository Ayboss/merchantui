import React, { Dispatch, SetStateAction } from 'react';
import { faArrowRightFromBracket, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import Button, { inlineButtonClass } from '../Button';
import { PRIVATE_PATHS, REGULAR_PATHS } from '../../routes/paths';
import { useProfileQuery } from '../../services/hooks/useGetProfileQuery';
import { usePopupContext } from '../../context/PopupContext';
import { NavDropdownItem, NavLinkItem, NavLinkItemPropsType } from './NavLinkItem';
import { DashboardNavLinkItemIcon, NavGroupType, NavLinkList } from './constants';

export const DashboardSideNav = () => {
  const navigate = useNavigate();
  const NavGroups = Object.keys(NavLinkList) as unknown as NavGroupType[];

  const { data } = useProfileQuery();

  const { setShowInitiatePopup } = usePopupContext();

  const handleLogOut = () => {
    localStorage.removeItem('key');
    navigate(REGULAR_PATHS.LOGIN);
  };

  return (
    <div className='h-screen z-10 w-[280px] pl-[25px] pr-[20px] py-[30px] shadow-[0px_1px_0px_0px_rgba(18_32_59_0.09)] border-solid border-r border-[#E4E4E7]'>
      {!data?.data?.profileUpdated && (
        <Button
          onClick={() => navigate(PRIVATE_PATHS.KYC_VERIFICATION)}
          className='bg-[#6231F4] mb-[37px] mt-0 w-[186px] h-[45px] rounded-[10px]'
          name={
            <span className=' text-[11px] flex items-center gap-[10px] justify-center  font-extrabold'>
              <FontAwesomeIcon icon={faPlus} style={{ color: '#f9fafb' }} />
              Complete Registration
            </span>
          }
        />
      )}
      <NavLinkItem
        path={PRIVATE_PATHS.OVERVIEW}
        className=' mb-5'
        icon={DashboardNavLinkItemIcon}
        text='Dashboard'
      />
      {NavGroups.map((group, idx) => (
        // @ts-ignore
        <NavGroupItem
          setShowInitiatePopup={setShowInitiatePopup}
          group={group}
          key={`${group}-${idx}`}
          items={NavLinkList[group] || []}
        />
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

type NavGroupItemProps = {
  items: Partial<NavLinkItemPropsType>[];
  group: NavGroupType;
  setShowInitiatePopup: Dispatch<SetStateAction<boolean>>;
};

export const NavGroupItem: React.FC<NavGroupItemProps> = (props) => {
  const { group, items, setShowInitiatePopup } = props;

  // const isAdminOrSupport = group === 'Administration';

  return (
    <div className='w-full pt-5 relative pb-[25px] flex flex-col items-start gap-[15px] border-solid border-t border-[#E4E4E7]'>
      <p className=' uppercase flex items-center text-[10px] text-gray-400 font-bold tracking-[1px]'>
        {group}{' '}
      </p>
      {items.map((item, idx) => (
        <div key={`${group}-${idx}`} className={clsx('w-full')}>
          {item.isDropdown ? (
            // @ts-ignore
            <NavDropdownItem {...item}>
              <Button
                name={'Initiate Payout'}
                className={clsx(
                  inlineButtonClass,
                  'text-[12px] text-[#444] hover:text-[#6231F4]  font-medium'
                )}
                onClick={() => setShowInitiatePopup(true)}
              />
              <NavLink
                to={PRIVATE_PATHS.PAYOUT_HISTORY}
                className={'text-[#444] hover:text-[#6231F4] text-[12px] font-medium'}
              >
                Payout History
              </NavLink>
            </NavDropdownItem>
          ) : (
            // @ts-ignore
            <NavLinkItem {...item} />
          )}
        </div>
      ))}
    </div>
  );
};
