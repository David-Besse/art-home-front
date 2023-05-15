// set informations in localStorage
export const saveToLocalStorage = (keyName, data) => {
  localStorage.setItem(keyName, JSON.stringify(data));
};

// get informations from localStorage
export const getFromLocalStorage = (keyName) => {
  const values = localStorage.getItem(keyName);
  return values ? JSON.parse(values) : null;
};

// remove informations from localstorage
export const removeFromLocalStorage = (keyName) => {
  localStorage.removeItem(keyName);
};
