export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const RESET_FORM_FIELDS = 'RESET_FORM_FIELDS';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const HANDLE_LOGIN_OFF = 'HANDLE_LOGIN_OFF';
export const SUBMIT_NEW_ACCOUNT = 'SUBMIT_NEW_ACCOUNT';

export const changeLoginField = (newValue, fieldName) => ({
  type: CHANGE_LOGIN_FIELD,
  newValue: newValue,
  fieldName: fieldName,
});

export const resetFormFields = () => ({
  type: RESET_FORM_FIELDS,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveAuthData = (token) => ({
  type: SAVE_AUTH_DATA,
  token: token,
});

export const saveUserData = (email, password, lastName, firstName, nickname, avatar, role, dateOfBirth, presentation) => ({
  type: SAVE_USER_DATA,
  email: email,
  password: password,
  lastName: lastName,
  firstName: firstName,
  nickname: nickname,
  avatar: avatar,
  role: role,
  dateOfBirth: dateOfBirth,
  presentation: presentation,
});

export const handleLoginOff = () => ({
  type: HANDLE_LOGIN_OFF,
});

export const submitNewAccount = () => ({
  type: SUBMIT_NEW_ACCOUNT,
});
