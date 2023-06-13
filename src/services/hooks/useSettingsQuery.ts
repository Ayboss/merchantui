import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { apiInstance } from '..';

export const SETTINGS_MUTATION_KEY = ['settings'];

export type SettingsRequestPayloadType = {
  otpApprovalEmail?: string;
  settlementReportEmail?: string;
  transactionReceiptEmail?: string;
  phoneNumber?: string;
  generalContactEmail?: string;
  chargeBackEmail?: string;
  supportEmail?: string;
  contractProducts?: string;
  settlementDestination?: string;
  testWebhookUrl?: string;
  liveWebhookUrl?: string;
  linkedInUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  websiteUrl?: string;
};

export const useSettingsMutation = () => {
  const request = useCallback(async (data: SettingsRequestPayloadType) => {
    const response = await apiInstance('merchant').post('/settings', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('key')?.replace(/"/g, '')}`
      }
    });

    return response.data;
  }, []);

  return useMutation({
    mutationFn: request,
    mutationKey: SETTINGS_MUTATION_KEY
  });
};
