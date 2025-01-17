import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import SettingsTop from '../SettingsTop';
import ApiSVG from '../../../../assets/icons/api-icon.svg';
import Header from '../Header';
import BorderDivider from '../BorderDIvider';
import TwoRowText from '../PersonalInfo/TwoRowText';
import ResetIconSVG from '../../../../assets/icons/reset-icon.svg';
import { Button } from '../../../../components';
import { useGetApiKeys } from '../../../../services/hooks/useGetApiKeys';
import { useResetApiMutation } from '../../../../services/hooks';
import { CustomToastBody } from '../../../../components/CustomToastBody';

const CopyIcon = () => (
  <svg
    className=' cursor-pointer'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
  >
    <rect x='8' y='7.5' width='12' height='14' stroke='#6231F4' strokeLinejoin='round' />
    <path d='M4 17.5C4 17.5 4 4.5 4 3.5H16' stroke='#6231F4' strokeLinecap='round' />
  </svg>
);

const ApiKeys: React.FC = () => {
  const { data } = useGetApiKeys();

  const { mutateAsync, isLoading } = useResetApiMutation();

  const onCopy = () => {
    toast.success('Copied successfully');
  };

  const onReset = () => {
    mutateAsync()
      .then(() => {
        toast.custom(
          (t) => (
            <CustomToastBody
              text='API Keys reset was successful 🎉🎉'
              toastId={t.id}
              type='success'
              className='mt-[70px]  ml-[460px] w-[700px] '
            />
          ),
          {
            duration: 7000,
            position: 'top-center'
          }
        );
      })
      .catch((error: any) => {
        return toast.error(error?.response?.data?.error || error?.response?.data?.message);
      });
  };

  return (
    <React.Fragment>
      <SettingsTop />
      <div className='flex items-start'>
        <div className='w-[300px] h-[425px] bg-white rounded-[5px] border border-[#F4F4F5] flex flex-col items-center justify-center '>
          <img src={ApiSVG} alt='Payment Icon' className='h-[50px] w-[50px] mb-5' />
          <div className='bg-[#F5F5F8] w-[250px]  flex flex-col items-center py-5 px-5'>
            <h2 className='text-[16px] text-[#444] font-semibold mb-5'>About API Keys</h2>
            <p className='text-[16px] text-[#444] font-normal text-center pb-2'>
              Your API Client Credentials are an essential part of your business with us. Your API Key will be
              required before you can make calls to any of our services or receive payments linked
              to this account. This applies to both test and live transactions
            </p>
          </div>
        </div>
        <div className='w-[746px] h-[560px] bg-white rounded-[12px] ml-7 pt-8'>
          <Header title='Client IDs' />
          <BorderDivider />
          <div className='text-[16px] text-[444] mx-7 mt-7 mb-36'>
            <TwoRowText
              label='Test Client ID'
              value={data?.data?.sandboxClientId! ?? '* * * * * * * * * * * * * * * * * * * * * *'}
              render={
                <CopyToClipboard onCopy={onCopy} text={data?.data?.sandboxClientId!}>
                  <button>
                    <CopyIcon />
                  </button>
                </CopyToClipboard>
              }
            />
            <TwoRowText
              label='Live Client ID'
              value={data?.data?.liveClientId ?? '* * * * * * * * * * * * * * * * * * * * * *'}
              render={
                <CopyToClipboard onCopy={onCopy} text={data?.data?.liveClientId!}>
                  <button>
                    <CopyIcon />
                  </button>
                </CopyToClipboard>
              }
            />
          </div>
        </div>
        <div className='w-[746px] h-[560px] bg-white rounded-[12px] ml-7 pt-8'>
          <Header title='API Keys' />
          <BorderDivider />
          <div className='text-[16px] text-[444] mx-7 mt-7 mb-36'>
            <TwoRowText
              label='Test Secret Key'
              value={data?.data?.sandboxKey! ?? '* * * * * * * * * * * * * * * * * * * * * *'}
              render={
                <CopyToClipboard onCopy={onCopy} text={data?.data?.sandboxKey!}>
                  <button>
                    <CopyIcon />
                  </button>
                </CopyToClipboard>
              }
            />
            <TwoRowText
              label='Live Secret Key'
              value={data?.data?.liveKey ?? '* * * * * * * * * * * * * * * * * * * * * *'}
              render={
                <CopyToClipboard onCopy={onCopy} text={data?.data?.liveKey!}>
                  <button>
                    <CopyIcon />
                  </button>
                </CopyToClipboard>
              }
            />
          </div>
          <BorderDivider />

          <Button
            className='bg-[#6231F4] mt-10 ml-7 h-[45px] w-[188px] rounded-[10px]'
            isBusy={isLoading}
            onClick={onReset}
            name={
              <span className=' text-[11px] flex items-center gap-[10px] justify-center  font-extrabold'>
                <img src={ResetIconSVG} alt='Reset icon' />
                Reset Keys
              </span>
            }
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ApiKeys;
