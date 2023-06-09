import React, { useMemo } from 'react';
import { Popup } from '../../../../../components';
import { TransactionItemType } from '../../../../../services/hooks';

export type PopupTransactionItemType = Partial<TransactionItemType> & { onClose: () => void };

export const TransactionItem: React.FC<PopupTransactionItemType> = (props) => {
  const {
    onClose,
    id,
    paymentStatus,
    channel,
    customerName,
    customerEmail,
    created,
    amount,
    balanceToPay,
    onusReference
  } = props;

  const statusColor = useMemo(() => {
    switch (paymentStatus) {
      case 'SUCCESSFUL':
        return 'text-[#3DA536]';
      case 'FAILED':
        return 'text-[#DC362E]';
      case 'PENDING':
        return 'text-[#D6A32E]';
      default:
        return 'text-[rgba(149, 149, 149, 1)]';
    }
  }, [paymentStatus]);

  return (
    <Popup onClose={onClose}>
      <div className='p-[40px]'>
        <h3 className='text-[#333333] tracking-[2px] uppercase text-[24px] font-semi-bold'>
          Transaction Summary
        </h3>
        <p className='text-[#403A45] font-normal text-[14px]'>
          Below are information for this transaction
        </p>
        <div className='flex flex-col gap-[20px] w-full mt-[40px] mb-[50px]'>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo topText='Transaction ID' bottomText={id} align='items-start' />
            <TwoRowInfo
              element={<p className={`${statusColor} text-[14px] font-medium`}>{paymentStatus}</p>}
            />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo topText='Transaction type' bottomText={channel ?? ''} align='items-start' />
            <TwoRowInfo topText='Customer Name' bottomText={customerName} align='items-end' />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo
              topText='Email Address'
              bottomText={customerEmail ?? ''}
              align='items-start'
            />
            <TwoRowInfo topText='Transaction Date' bottomText={created ?? ''} align='items-end' />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo
              topText='Transaction Amount'
              bottomText={`₦${amount ?? 0}`}
              align='items-start'
            />
            <TwoRowInfo
              topText='Balance to Pay'
              bottomText={`₦${balanceToPay ?? 0}`}
              align='items-start'
            />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo
              topText='Transaction Reference'
              bottomText={onusReference}
              align='items-start'
            />
          </div>
        </div>
      </div>
    </Popup>
  );
};

export type TwoRowInfoPropType = {
  topText?: string | number;
  bottomText?: string | number;
  align?: 'items-start' | 'items-end';
  element?: JSX.Element | null;
};

export const TwoRowInfo: React.FC<TwoRowInfoPropType> = (props) => {
  const { topText, bottomText, align, element } = props;

  return (
    <>
      {!element ? (
        <div className={`flex flex-col ${align}`}>
          <p className='text-[#959595] overflow-ellipsis max-w-[200px] text-[14px] whitespace-nowrap font-normal'>
            {topText}
          </p>
          <p className='text-[#252122] font-medium text-[14px]'>{bottomText}</p>
        </div>
      ) : (
        element
      )}
    </>
  );
};
