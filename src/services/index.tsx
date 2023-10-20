import axios from 'axios';

export const apiInstance = (instance: string) => {
  return axios.create({
    baseURL: `${import.meta.env.VITE_PAYONUS_BASE_URL}/${instance}/api/v1`
  });
};
