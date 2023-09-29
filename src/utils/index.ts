import clsx from 'clsx';
import { parseISO, format } from 'date-fns';
import { twMerge } from 'tailwind-merge';
export function cn(classNames: string) {
  return twMerge(clsx(classNames));
}

export const getFromLocal = (key: string) => {
  if (localStorage) {
    const value = localStorage.getItem(key);

    return value;
  }
};

export const setToLocal = (key: string, value: any) => {
  if (localStorage) {
    localStorage.setItem(key, value);
  }
};

export const getFromSession = (key: string) => {
  if (sessionStorage) {
    const value = sessionStorage.getItem(key);

    return value;
  }
};

export const setToSession = (key: string, value: any) => {
  if (sessionStorage) {
    sessionStorage.setItem(key, value);
  }
};

export const formatDate = (date: string | null, dateFormat?: string) => {
  if (!date) {
    return 'Nil';
  }
  const parsedDate = parseISO(date);

  return format(parsedDate, dateFormat ?? 'dd-MM-yyyy');
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true
  }).format(value);
};
