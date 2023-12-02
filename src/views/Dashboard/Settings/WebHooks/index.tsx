import React, { useState } from 'react';
import SettingsTop from '../SettingsTop';
import WebHookSVG from '../../../../assets/icons/webhook-icon.svg';
import Header from '../Header';
import BorderDivider from '../BorderDIvider';
import SaveSVG from '../../../../assets/icons/save-icon.svg';
import { Button } from '../../../../components';
import InputContainer from './InputContainer';

const WebHooks: React.FC = () => {
  const [liveWebhookUrl, setLiveWebhookUrl] = useState('');
  const [testWebhookUrl, setTestWebhookUrl] = useState('');

  const handleWebhookUrlChange1 = (newValue: string) => {
    setLiveWebhookUrl(newValue);
  };

  const handleWebhookUrlChange2 = (newValue: string) => {
    setTestWebhookUrl(newValue);
  };

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
            <InputContainer
              label='Live Webhook'
              value={liveWebhookUrl}
              placeholder='https://livewebhookurl.com'
              onSave={handleWebhookUrlChange1}
            />
            <InputContainer
              label='Test Webhook'
              value={testWebhookUrl}
              placeholder='https://testwebhookurl.com'
              onSave={handleWebhookUrlChange2}
            />
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
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WebHooks;
