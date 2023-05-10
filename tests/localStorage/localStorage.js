import jsdom from 'jsdom';
/**
 * @jest-environment jsdom
 */

// set user informations in localStorage
export const saveUserToLocalStorage = (user) => {
  jsdom.localStorage.setItem('user-arthome', JSON.stringify(user));
};

// get user informations from localStorage
export const getUserFromLocalStorage = () => {
  const user = jsdom.localStorage.getItem('user-arthome');
  return user ? JSON.parse(user) : null;
};
