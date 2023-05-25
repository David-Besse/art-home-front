// set informations in localStorage
export const saveToLocalStorage = (keyName, data) => {
  // Retrieve existing data from localStorage
  const existingData = JSON.parse(localStorage.getItem(keyName)) || {};

  // Merge existing data with new data
  const mergedData = { ...existingData, ...data };

  // Save merged data to localStorage
  localStorage.setItem(keyName, JSON.stringify(mergedData));
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
