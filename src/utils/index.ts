import clsx from 'clsx';
import { parseISO, format } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import imageCompression from 'browser-image-compression';
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

export const formatNumber = (value: number, mfd?: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: mfd ?? 2,
    maximumFractionDigits: mfd ?? 2,
    useGrouping: true
  }).format(value);
};

export async function compressImage(file: File) {
  try {
    const compressedFile = await imageCompression(file, {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    });

    return compressedFile;
  } catch (error) {
    console.error(error);
  }
}
