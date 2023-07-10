import axios from 'axios';

export const SignupApiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_PAYONUS_BASE_URL}/merchant/api/v1`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const MerchantApiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_PAYONUS_BASE_URL}/merchant/api/v1`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const apiInstance = (instance: string) => {
  return axios.create({
    baseURL: `${import.meta.env.VITE_PAYONUS_BASE_URL}/${instance}/api/v1`
  });
};
