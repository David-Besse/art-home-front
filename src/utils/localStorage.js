// set user informations in localStorage
export const saveUserToLocalStorage = (user) => {
  localStorage.setItem('user-arthome', JSON.stringify(user));
};

// get user informations from localStorage
export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user-arthome');
  return user ? JSON.parse(user) : null;
};
