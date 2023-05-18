import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://sandbox.payonus.com/auth/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_PAYONUS_KEY}`,
  },
});
