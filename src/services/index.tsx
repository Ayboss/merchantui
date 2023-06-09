import axios from 'axios';

export const SignupApiInstance = axios.create({
  baseURL: 'https://sandbox.payonus.com/merchant/api/v1',
  headers: {
<<<<<<< HEAD
    'Content-Type': 'application/json'
=======
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_PAYONUS_KEY}`
>>>>>>> 3d60195 (feat: kyc flowapi connection)
  }
});

export const MerchantApiInstance = axios.create({
  baseURL: 'https://sandbox.payonus.com/merchant/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const apiInstance = (instance: string) => {
  return axios.create({
    baseURL: `https://sandbox.payonus.com/${instance}/api/v1`
  });
};
