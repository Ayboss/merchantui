import axios from 'axios';

export const apiInstance = (
  instance:
    | 'settlement'
    | 'merchant'
    | 'payout'
    | 'payout/transfer'
    | 'auth'
    | 'pay'
    | 'settlement/transfer'
) => {
  return axios.create({
    baseURL: `${import.meta.env.VITE_PAYONUS_BASE_URL}/${instance}/api/v1`
  });
};
