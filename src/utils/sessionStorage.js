// set informations in sessionStorage
export const saveToSessionStorage = (keyName, data) => {
  sessionStorage.setItem(keyName, JSON.stringify(data));
};

// get informations from sessionStorage
export const getFromSessionStorage = (keyName) => {
  const values = sessionStorage.getItem(keyName);
  return values ? JSON.parse(values) : null;
};

// remove informations from sessionStorage
export const removeFromSessionStorage = (keyName) => {
  sessionStorage.removeItem(keyName);
};
