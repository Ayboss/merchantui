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
