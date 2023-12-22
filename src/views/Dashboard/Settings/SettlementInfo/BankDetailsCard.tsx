import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import CopyToClipboard from 'react-copy-to-clipboard';
import CopySVG from '../../../../assets/icons/copy-icon.svg';
import AddSVG from '../../../../assets/icons/Add-icon.svg';
import { Button, CurrencyCardPicker, LoaderControl } from '../../../../components';
import { useGetSettlementAccounts } from '../../../../services/hooks/useGetSettlementAccounts';
import { CustomToastBody } from '../../../../components/CustomToastBody';
import FlexRow from './FlexRow';
import EmptyWalletCard from './EmptyWallet';
import AddBank from './AddBank';

const BankDetailsCard: React.FC<any> = () => {
  const [isAddBankModalOpen, setIsAddBankModalOpen] = useState(false);

  const openAddBankModal = () => {
    setIsAddBankModalOpen(true);
  };

  const closeAddBankModal = () => {
    setIsAddBankModalOpen(false);
  };

  const { data: settlementDetails, isLoading: settlementDetailsLoading } =
    useGetSettlementAccounts();

  const [activeWallet, setActiveWallet] = useState<any>(null);

  const onCopy = () => {
    toast.custom(
      (t) => (
        <CustomToastBody
          text='Copied successfully 🎉🎉'
          toastId={t.id}
          type='success'
          className='mt-[140px]  ml-[690px] w-[400px] '
        />
      ),
      {
        duration: 7000,
        position: 'top-center'
      }
    );
  };

  useEffect(() => {
    if (settlementDetails?.data?.length! > 0) {
      setActiveWallet(settlementDetails?.data[0]);
    }
  }, [settlementDetails?.data]);

  if (!settlementDetailsLoading && settlementDetails?.data?.length! < 1) {
    return <EmptyWalletCard />;
  }

  return (
    <div className='w-[450px] border border-[#E4E4E7] bg-white rounded-[5px] ml-10 px-6 py-10 '>
      <p className='text-[#444] text-[16px] font-semibold'>My Bank Account Details</p>
      <div className='border border-[#E4E4E7] mt-5 mb-7'></div>
      <LoaderControl
        loading={settlementDetailsLoading}
        error={settlementDetailsLoading}
        // overlay={settlementDetailsLoading}
        errorTitle='Something went wrong'
        errorSubTitle='Sorry, try reloading'
        minHeight={'400px'}
        // errorControlOnClick={() => refetch()}
      >
        <div className='w-full overflow-x-auto overflow-y-clip my-4 grid grid-flow-col gap-[15px]'>
          {!settlementDetailsLoading &&
            settlementDetails?.data &&
            settlementDetails?.data?.map((item: any, idx: number) => (
              <CurrencyCardPicker
                key={item.accountNumber + '' + idx}
                currency={item.currencyCode}
                topText='Account Number'
                amount={item.accountNumber}
                active={item.accountNumber === activeWallet?.accountNumber}
                onClick={() => setActiveWallet(item)}
              />
            ))}
        </div>
        <div className='border border-[#E4E4E7] mt-5 mb-5'></div>
        <FlexRow leftItem='Bank Name' rightItem={activeWallet?.bank} />
        <FlexRow leftItem='Account Number' rightItem={activeWallet?.accountNumber} />
        <FlexRow leftItem='Account Name' rightItem={activeWallet?.accountName} />
      </LoaderControl>

      <div className='w-full flex gap-3 items-center'>
        <CopyToClipboard
          onCopy={onCopy}
          text={`accountNumber: ${activeWallet?.accountNumber}
                  bank: ${activeWallet?.bank}`}
        >
          <Button
            isBusy={settlementDetailsLoading}
            className='bg-[#6231F4] h-[45px] w-[50%] rounded-[6px]'
            name={
              <span className=' text-[13px] flex items-center gap-[10px] justify-center  font-extrabold'>
                <img src={CopySVG} alt='' />
                Copy Details
              </span>
            }
          />
        </CopyToClipboard>
        <Button
          onClick={openAddBankModal}
          className='bg-[#6231F4] h-[45px] w-[50%] rounded-[6px]'
          name={
            <span className=' text-[13px] flex items-center gap-[10px] justify-center  font-extrabold'>
              <img src={AddSVG} alt='' />
              Add Bank
            </span>
          }
        />
      </div>
      {isAddBankModalOpen && <AddBank onClose={closeAddBankModal} />}
    </div>
  );
};

export default BankDetailsCard;
