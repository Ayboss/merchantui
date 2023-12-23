import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import CopySVG from '../../../../assets/icons/copy-icon.svg';
import { Button, CurrencyCardPicker, LoaderControl } from '../../../../components';
import { CustomToastBody } from '../../../../components/CustomToastBody';
import { useGetMerchantAccountQuery } from '../../../../services/hooks';
import FlexRow from './FlexRow';

const WalletDetailsCard: React.FC = () => {
  const { data: merchantAccount, isLoading: merchantAccountLoading } = useGetMerchantAccountQuery({
    page: 1,
    pageSize: 20
  });

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
    if (merchantAccount?.data?.content?.length! > 0) {
      setActiveWallet(merchantAccount?.data?.content[0]);
    }
  }, [merchantAccount?.data?.content]);

  if (merchantAccount?.data?.content?.length! < 1 && !merchantAccountLoading) {
    return (
      <div className='w-[450px] border border-[#E4E4E7] bg-white rounded-[5px] ml-10 px-6 py-10 '>
        <p className='text-[#444] text-[16px] font-semibold'>Virtual Account Details</p>
        <div className='border border-[#E4E4E7] mt-5 mb-5'></div>
        <FlexRow leftItem='No Wallet Found' rightItem='' />
        <div className='border border-[#E4E4E7] mt-3 mb-5'></div>
      </div>
    );
  }

  return (
    <div className='w-[450px] border border-[#E4E4E7] bg-white rounded-[5px] ml-10 px-6 py-10 '>
      <p className='text-[#444] text-[16px] font-semibold'>Virtual Account Details</p>
      <div className='border border-[#E4E4E7] mt-5 mb-5'></div>
      <LoaderControl
        loading={merchantAccountLoading}
        error={merchantAccountLoading}
        // overlay={merchantAccountLoading}
        errorTitle='Something went wrong'
        errorSubTitle='Sorry, try reloading'
        minHeight={'400px'}
        // errorControlOnClick={() => refetch()}
      >
        <div className='w-full overflow-x-auto overflow-y-clip my-4 grid grid-flow-col gap-[15px]'>
          {!merchantAccountLoading &&
            merchantAccount?.data?.content &&
            merchantAccount?.data?.content?.map((item: any) => (
              <CurrencyCardPicker
                key={item.accountNumber}
                currency={item.currencyCode}
                topText='Account Number'
                amount={item.accountNumber}
                active={item.accountNumber === activeWallet?.accountNumber}
                onClick={() => setActiveWallet(item)}
              />
            ))}
        </div>
        <div className='border border-[#E4E4E7] mt-5 mb-5'></div>
        <FlexRow leftItem='Bank Name' rightItem={activeWallet?.bankName} />
        <FlexRow leftItem='Account Number' rightItem={activeWallet?.accountNumber} />
        <FlexRow leftItem='Account Name' rightItem={activeWallet?.accountName} />
      </LoaderControl>

      <div className='border border-[#E4E4E7] mt-3 mb-5'></div>
      <CopyToClipboard
        onCopy={onCopy}
        text={`
          accountNumber: ${activeWallet?.accountNumber},
          bank: ${activeWallet?.bankName}
        `}
      >
        <Button
          isBusy={merchantAccountLoading}
          className='bg-[#6231F4] h-[45px] w-[390px] rounded-[6px]'
          name={
            <span className=' text-[13px] flex items-center gap-[10px] justify-center  font-extrabold'>
              <img src={CopySVG} alt='' />
              Copy Details
            </span>
          }
        />
      </CopyToClipboard>
    </div>
  );
};

export default WalletDetailsCard;
