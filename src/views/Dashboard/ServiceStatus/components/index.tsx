import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { WhiteBGContainer } from '../../Overview/components/ListContainer';

import Providus from '../icons/providus.png';
import Globus from '../icons/globus.png';
import Wema from '../icons/wema.png';
import { cn, formatDate } from '../../../../utils';
import { ServiceItemType } from '../../../../services/hooks/useGetStatusInfo';

export type ServiceStatusInfoBoxType = {
  title: string;
  data?: Array<ServiceItemType>;
  isLoading: boolean;
};
export const ServiceStatusInfoBox = ({ title, data, isLoading }: ServiceStatusInfoBoxType) => {
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
        {isLoading && <ProviderStatusSkeletalItem />}
        {!isLoading &&
          data?.map((item) => <ProviderStatusItem key={item.serviceProvider} {...item} />)}
      </div>
    </WhiteBGContainer>
  );
};

export const ProviderStatusItem = ({
  status,
  serviceProvider,
  lastUpdatedAt
}: StatusIndicatorType & { serviceProvider: 'Wema Bank' | 'Providus Bank' | 'Globus Bank' } & {
  lastUpdatedAt: string;
}) => {
  return (
    <div
      className={cn(
        clsx(
          'w-full flex items-center justify-between  border-b-[1px] border-solid border-b-[#EBEBED] py-[15px] pr-[48px]',
          status === 'DOWN' && 'pr-[30px]'
        )
      )}
    >
      <div className='flex items-start gap-[10px]'>
        <img src={ProviderIcons[serviceProvider]} alt='Service Provider' />
        <div className='flex flex-col items-start'>
          <h3 className='text-[#444] text-[14px] font-semibold leading-normal'>Providus Bank</h3>
          <p className='text-[#444] text-[14px] font-normal leading-normal'>
            Last Sync:{' '}
            <span className='text-[#444] text-[14px] font-medium leading-normal'>
              {formatDate(lastUpdatedAt, 'dd MMM, yyyy HH:mm:ss')}
            </span>{' '}
          </p>
        </div>
      </div>
      <StatusIndicator status={status} />
    </div>
  );
};

export const ProviderIcons = {
  'Providus Bank': Providus,
  'Globus Bank': Globus,
  'Wema Bank': Wema
};

export type StatusIndicatorType = {
  status: 'UP' | 'DOWN';
};

export const StatusIndicator = ({ status = 'DOWN' }: StatusIndicatorType) => {
  const color = status === 'DOWN' ? '#EF4444' : '#22C55E';

  return (
    <div className='flex items-start gap-1'>
      {status === 'UP' && <FontAwesomeIcon style={{ color }} icon={faArrowUp} />}
      {status === 'DOWN' && <FontAwesomeIcon style={{ color }} icon={faArrowDown} />}
      <span
        className={clsx(
          ' font-medium text-[12px] text-[#22C55E]',
          status === 'DOWN' && 'text-[#EF4444]'
        )}
      >
        {status}{' '}
      </span>
    </div>
  );
};

export const ProviderStatusSkeletalItem = () => {
  return (
    <div className='w-full flex items-center justify-between border-b-[1px] border-solid border-b-[#EBEBED] py-[15px] pr-[48px] animate-pulse'>
      <div className='flex items-start gap-[10px]'>
        <div className='w-10 h-10 bg-gray-300 rounded'></div>
        <div className='flex flex-col items-start'>
          <div className='h-4 bg-gray-300 rounded w-3/4'></div>
          <div className='h-3 mt-2 bg-gray-300 rounded w-1/2'></div>
        </div>
      </div>
      <div className='h-4 w-16 bg-gray-300 rounded'></div>
    </div>
  );
};
