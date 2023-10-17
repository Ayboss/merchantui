import React from 'react';
import { WalletHistroyItemType } from '../../../services/hooks/useGetWalletHistory';
import { TwoRowInfo } from '../Transactions/components';
import { Popup, StatusTag, statusMap } from '../../../components';

export type WalletHistoryItemType = Partial<WalletHistroyItemType> & { onClose: () => void };

export const WalletHistoryItem: React.FC<WalletHistoryItemType> = (props) => {
  const {
    onClose,
    created,
    amount,
    accountNumber,
    balanceAfter,
    balanceBefore,
    narration,
    transactionType
  } = props;

  return (
    <Popup onClose={onClose}>
      <div className='p-[40px]'>
        <h3 className='text-[#333333] tracking-[2px] uppercase text-[24px] font-semi-bold'>
          Wallet Summary
        </h3>
        <p className='text-[#403A45] font-normal text-[14px]'>
          Below are information for this transaction
        </p>
        <div className='flex flex-col gap-[20px] w-full mt-[40px] mb-[50px]'>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo topText='Account Number' bottomText={accountNumber} align='items-start' />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            {/* @ts-ignore */}
            <TwoRowInfo element={<StatusTag type={statusMap[transactionType]} />} />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo topText='Amount' bottomText={`${amount ?? 0}`} align='items-start' />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo
              topText='Balance Before'
              bottomText={`${balanceBefore ?? 0}`}
              align='items-start'
            />
            <TwoRowInfo
              topText='Balance After'
              bottomText={`${balanceAfter ?? 0}`}
              align='items-start'
            />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo topText=' Date / Time' bottomText={`${created}`} align='items-start' />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo topText='Narration' bottomText={`${narration}`} align='items-start' />
          </div>
        </div>
      </div>
    </Popup>
  );
};
