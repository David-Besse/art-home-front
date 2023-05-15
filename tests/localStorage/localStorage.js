import jsdom from 'jsdom';
/**
 * @jest-environment jsdom
 */

// set user informations in localStorage
export const saveToLocalStorage = (user) => {
  jsdom.localStorage.setItem('user-arthome', JSON.stringify(user));
};

// get user informations from localStorage
export const getFromLocalStorage = () => {
  const user = jsdom.localStorage.getItem('user-arthome');
  return user ? JSON.parse(user) : null;
};
