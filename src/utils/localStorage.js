// set user informations in localStorage
export const saveToLocalStorage = (keyName, data) => {
  localStorage.setItem(keyName, JSON.stringify(data));
};

// get user informations from localStorage
export const getFromLocalStorage = (keyName) => {
  const values = localStorage.getItem(keyName);
  return values ? JSON.parse(values) : null;
};

// remove user informations from localstorage
export const removeFromLocalStorage = (keyName) => {
  localStorage.removeItem(keyName);
};
