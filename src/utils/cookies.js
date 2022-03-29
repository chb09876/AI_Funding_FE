export const getItem = (key) => {
  const cookies = document.cookie.split('; ');
  return cookies.reduce((total, currentCookie) => {
    const [storedKey, storedValue] = currentCookie.split('=');
    return key === storedKey ? decodeURIComponent(storedValue) : total;
  }, '');
};

export const setItem = (key, value, numberOfDays) => {
  if (!!numberOfDays) {
    const now = new Date();
    now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);
    document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`;
  } else {
    // session cookie
    document.cookie = `${key}=${value}; path=/`;
  }
};

export const deleteItem = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
};
