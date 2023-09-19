import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Button, EmptyContent, inlineButtonClass } from '../../../components';
import { AlertBar } from '../../../components/AlertBar';
import { PRIVATE_PATHS } from '../../../routes/paths';
import { CardContainer } from './components';
import { ListContainer, WhiteBGContainer } from './components/ListContainer';
const Overview = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex w-full justify-between mb-[14px]'>
        <AlertBar
          text='Please Complete your KYC'
          cta={
            <Button
              name={'Complete KYC'}
              className={clsx(inlineButtonClass, 'text-[#F2B00F] text-base font-medium underline')}
            />
          }
        />
      </div>
      <div className='flex flex-col gap-5 w-full'>
        <CardContainer />
        <div className='flex items-start gap-5 '>
          <ListContainer
            type='transactions'
            className=' w-[70%]'
            renderCta={(className) => (
              <Button
                className={clsx(className)}
                type='link'
                href={PRIVATE_PATHS.TRANSACTIONS}
                name={
                  <span className='text-[#B8BCCA] text-[12px] font-medium'>
                    See All Transactions{' '}
                    <FontAwesomeIcon icon={faAngleRight} style={{ color: '#b8bcca' }} />
                  </span>
                }
              />
            )}
          >
            <EmptyContent />
          </ListContainer>
          <WhiteBGContainer className='w-[30%]'></WhiteBGContainer>
        </div>
        <div className='flex items-start gap-5 '>
          <ListContainer
            type='payouts'
            className=' w-[70%]'
            renderCta={(className) => (
              <Button
                className={clsx(className)}
                type='link'
                href={PRIVATE_PATHS.PAYOUT_HISTORY}
                name={
                  <span className='text-[#B8BCCA] text-[12px] font-medium'>
                    See All Settlements{' '}
                    <FontAwesomeIcon icon={faAngleRight} style={{ color: '#b8bcca' }} />
                  </span>
                }
              />
            )}
          >
            <EmptyContent />
          </ListContainer>
          <WhiteBGContainer className='w-[30%]'></WhiteBGContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview;
