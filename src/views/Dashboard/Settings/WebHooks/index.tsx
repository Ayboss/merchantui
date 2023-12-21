import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import SettingsTop from '../SettingsTop';
import WebHookSVG from '../../../../assets/icons/webhook-icon.svg';
import Header from '../Header';
import BorderDivider from '../BorderDIvider';
import SaveSVG from '../../../../assets/icons/save-icon.svg';
import { Button, LoaderControl } from '../../../../components';
import { useGetWebHooks, useWebHookMutation } from '../../../../services/hooks';
import { CustomToastBody } from '../../../../components/CustomToastBody';
import InputContainer from './InputContainer';

const WebHooks: React.FC = () => {
  const { data: initalWebhookData, isLoading: isGetWebhookLoading } = useGetWebHooks();

  const [webhookUrls, setWebhookUrls] = useState({
    liveUrl: '',
    testUrl: ''
  });

  useEffect(() => {
    if (initalWebhookData?.data?.liveUrl || initalWebhookData?.data?.testUrl) {
      setWebhookUrls({
        liveUrl: initalWebhookData?.data?.liveUrl,
        testUrl: initalWebhookData?.data?.testUrl
      });
    }
  }, [initalWebhookData?.data]);

  const { liveUrl, testUrl } = webhookUrls;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setWebhookUrls({
      ...webhookUrls,
      [name]: value
    });
  };

  const { mutateAsync, isLoading } = useWebHookMutation();

  const handleSubmit = () => {
    if (!liveUrl && !testUrl) {
      return;
    }

    mutateAsync({
      ...webhookUrls
    })
      .then(() => {
        toast.custom(
          (t) => (
            <CustomToastBody
              text='Webhook updated successfully 🎉🎉'
              toastId={t.id}
              type='success'
            />
          ),
          {
            duration: 7000,
            position: 'top-center'
          }
        );
      })
      .catch((error: any) => {
        if (Array.isArray(error?.response?.data?.errors)) {
          const errorMessages = error?.response?.data?.errors;

          errorMessages.forEach((error: any) =>
            toast.error(`${error?.fieldName} ${error?.message}`)
          );
        } else {
          toast.error(error?.response?.data?.responseMessage || error?.response?.data?.message);
        }
      });
  };

  // if (isGetWebhookLoading) {
  //   return <WebhooksSkeleton />;
  // }

  return (
    <React.Fragment>
      <SettingsTop />
      <div className='flex items-start'>
        <div className='w-[300px] h-[425px] bg-white rounded-[5px] border border-[#F4F4F5] flex flex-col items-center justify-center '>
          <img src={WebHookSVG} alt='Payment Icon' className='h-[50px] w-[50px] mb-5' />
          <div className='bg-[#F5F5F8] w-[250px]  flex flex-col items-center py-5 px-6'>
            <h2 className='text-[16px] text-[#444] font-semibold mb-5'>About Webhooks</h2>
            <p className='text-[16px] text-[#444] font-normal text-center pb-5'>
              This is useful for events that are not triggered by direct API requests, and the
              response needs to be known, (e.g. Transaction Status update). It is necessary for
              backend transactions
            </p>
          </div>
        </div>
        <div className='w-[746px] h-[633px] bg-white rounded-[12px] ml-7 pt-8'>
          <Header title='Webhooks' />
          <BorderDivider />
          <div className='text-[16px] text-[444] mx-7 mt-7 mb-12'>
            <p className='font-medium mb-4'>
              Connect API webhooks to notify your application when certain payment, inventory or{' '}
              <br />
              timecard even occur. notifications are typically sent within nanoseconds
              <br /> of the associated event.
            </p>
            <h3 className='font-bold mb-10'>Turn on to activate Webhooks</h3>
            <LoaderControl
              loading={isGetWebhookLoading}
              // error={isError}
              overlay={isGetWebhookLoading}
              errorTitle='Something went wrong'
              errorSubTitle="Sorry, we couldn't load your transactions, try reloading"
              minHeight={'400px'}
              // errorControlOnClick={() => refetch()}
            >
              <InputContainer
                name='liveUrl'
                label='Live Webhook'
                value={liveUrl}
                placeholder='https://livewebhookurl.com'
                onChange={onChange}
              />
              <InputContainer
                name='testUrl'
                label='Test Webhook'
                value={testUrl}
                placeholder='https://testwebhookurl.com'
                onChange={onChange}
              />
            </LoaderControl>
          </div>
          <BorderDivider />
          <Button
            className='bg-[#6231F4] ml-7 mt-8 w-[188px] h-[45px] rounded-[10px]'
            name={
              <span className=' text-[11px] flex items-center gap-[10px] justify-center  font-extrabold'>
                <img src={SaveSVG} alt='' />
                Save Changes
              </span>
            }
            type='button'
            isBusy={isLoading}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WebHooks;

export const WebhooksSkeleton: React.FC = () => {
  return (
    <div className='animate-pulse'>
      <div className='flex items-start space-x-7'>
        <div className='w-[300px] h-[425px] bg-gray-200 rounded-[5px]'></div>
        <div className='flex flex-col w-[746px] h-[633px] bg-gray-200 rounded-[12px] pt-8'>
          <div className='h-6 bg-gray-200 rounded w-1/4'></div>
          <div className='h-1 bg-gray-200 rounded w-full mt-4'></div>
          <div className='h-64 bg-gray-200 rounded w-full mt-7'></div>
          <div className='h-1 bg-gray-200 rounded w-full mt-12'></div>
          <div className='h-12 bg-gray-200 rounded w-1/4 mt-8 ml-7'></div>
        </div>
      </div>
    </div>
  );
};
