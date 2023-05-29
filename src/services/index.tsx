import axios from 'axios';

export const LoginApiInstance = axios.create({
  baseURL: 'https://sandbox.payonus.com/auth/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_PAYONUS_KEY}`,
  },
});

export const SignupApiInstance = axios.create({
  baseURL: 'https://sandbox.payonus.com/merchant/api/v1',
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${import.meta.env.VITE_PAYONUS_KEY}`,
  },
});
