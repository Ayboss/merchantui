import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { WhiteBGContainer } from '../../Overview/components/ListContainer';

import Providus from '../icons/providus.png';
import Globus from '../icons/globus.png';
import Wema from '../icons/wema.png';
import { cn } from '../../../../utils';

export type ServiceStatusInfoBoxType = {
  title: string;
};
export const ServiceStatusInfoBox = ({ title }: ServiceStatusInfoBoxType) => {
  return (
    <WhiteBGContainer className=' w-full max-w-[530px] px-5'>
      <h3 className=' text-[#444] text-base font-semibold leading-6'>{title}</h3>
      <div className='flex w-full items-center justify-between pt-[12px] mt-5 pb-[11px] pr-[38px] border-y-[1px] border-solid border-y-[#EBEBED]'>
        <p className='text-[#6F7482] text-[11px] leading-4 uppercase font-semibold'>
          Provider details{' '}
        </p>
        <p className='text-[#6F7482] text-[11px] leading-4 uppercase font-semibold'>Status</p>
      </div>
      <div className='flex flex-col items-start'>
        <ProviderStatusItem bank='Providus' type='Up' />
        <ProviderStatusItem bank='Globus' type='Down' />
        <ProviderStatusItem bank='Wema' type='Down' />
      </div>
    </WhiteBGContainer>
  );
};

export const ProviderStatusItem = ({
  type,
  bank
}: StatusIndicatorType & { bank: 'Wema' | 'Providus' | 'Globus' }) => {
  return (
    <div
      className={cn(
        clsx(
          'w-full flex items-center justify-between  border-b-[1px] border-solid border-b-[#EBEBED] py-[15px] pr-[48px]',
          type === 'Down' && 'pr-[30px]'
        )
      )}
    >
      <div className='flex items-start gap-[10px]'>
        <img src={ProviderIcons[bank]} alt='Service Provider' />
        <div className='flex flex-col items-start'>
          <h3 className='text-[#444] text-[14px] font-semibold leading-normal'>Providus Bank</h3>
          <p className='text-[#444] text-[14px] font-normal leading-normal'>
            Last Sync:{' '}
            <span className='text-[#444] text-[14px] font-medium leading-normal'>
              09 Sept, 2023 11:13:35
            </span>{' '}
          </p>
        </div>
      </div>
      <StatusIndicator type={type} />
    </div>
  );
};

export const ProviderIcons = {
  Providus,
  Globus,
  Wema
};

export type StatusIndicatorType = {
  type: 'Up' | 'Down';
};

export const StatusIndicator = ({ type = 'Down' }: StatusIndicatorType) => {
  const color = type === 'Down' ? '#EF4444' : '#22C55E';

  return (
    <div className='flex items-start gap-1'>
      {type === 'Up' && <FontAwesomeIcon style={{ color }} icon={faArrowUp} />}
      {type === 'Down' && <FontAwesomeIcon style={{ color }} icon={faArrowDown} />}
      <span
        className={clsx(
          ' font-medium text-[12px] text-[#22C55E]',
          type === 'Down' && 'text-[#EF4444]'
        )}
      >
        {type}{' '}
      </span>
    </div>
  );
};
