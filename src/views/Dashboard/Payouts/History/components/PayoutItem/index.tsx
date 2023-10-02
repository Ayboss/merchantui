import React, { useMemo } from 'react';
import { PayoutItemType } from '../../../../../../services/hooks';
import { Popup } from '../../../../../../components';
import { TwoRowInfo } from '../../../../Transactions/components';

export type PopupPayoutItemType = Partial<PayoutItemType> & { onClose: () => void };

export const PayoutItem: React.FC<PopupPayoutItemType> = (props) => {
  const {
    onClose,
    transactionStatus,
    transactionReference,
    transactionAmount,
    created,
    narration,
    beneficiaryAccountNumber,
    beneficiaryBank,
    responseCode,
    responseMessage,
    sessionId
  } = props;

  const statusColor = useMemo(() => {
    switch (transactionStatus) {
      case 'SUCCESSFUL':
      case 'Successful':
        return 'text-[#3DA536]';
      case 'FAILED':
        return 'text-[#DC362E]';
      case 'PENDING':
        return 'text-[#D6A32E]';
      default:
        return 'text-[rgba(149, 149, 149, 1)]';
    }
  }, [transactionStatus]);

  return (
    <Popup onClose={onClose}>
      <div className='p-[40px]'>
        <h3 className='text-[#333333] tracking-[2px] uppercase text-[24px] font-semi-bold'>
          Payout Detail
        </h3>
        <p className='text-[#403A45] font-normal text-[14px]'>
          Below are information for this payout
        </p>
        <div className='flex flex-col gap-[20px] w-full mt-[40px] mb-[50px]'>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo
              topText='Transaction Reference'
              bottomText={transactionReference}
              align='items-start'
            />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo
              element={
                <p className={`${statusColor} text-[14px] font-medium`}>{transactionStatus}</p>
              }
            />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo
              topText='Transaction Amount'
              bottomText={`${transactionAmount ?? 0}`}
              align='items-start'
            />
            <TwoRowInfo topText='Transaction Date' bottomText={created ?? ''} align='items-end' />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo
              topText='Beneficiary Account Number'
              bottomText={beneficiaryAccountNumber ?? ''}
              align='items-start'
            />
            <TwoRowInfo topText='Beneficiary Bank' bottomText={beneficiaryBank} align='items-end' />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo topText='Narration' bottomText={narration ?? ''} align='items-start' />
            <TwoRowInfo topText='Response Code' bottomText={responseCode} align='items-end' />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo topText='Session ID' bottomText={sessionId} align='items-start' />
          </div>
          <div className='flex border-solid border-b-[1px] border-[rgba(151, 151, 151, 0.147956)] w-full pb-[16px] justify-between items-center'>
            <TwoRowInfo
              topText='Response Message'
              bottomText={responseMessage}
              align='items-start'
            />
          </div>
        </div>
      </div>
    </Popup>
  );
};
