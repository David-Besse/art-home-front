export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const HANDLE_LOGIN_OFF = 'HANDLE_LOGIN_OFF';

export const changeLoginField = (newValue, fieldName) => ({
  type: CHANGE_LOGIN_FIELD,
  newValue: newValue,
  fieldName: fieldName,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveAuthData = (nickname, token, role) => ({
  type: SAVE_AUTH_DATA,
  nickname: nickname,
  token: token,
  role: role,
});

export const handleLoginOff = () => ({
  type: HANDLE_LOGIN_OFF,
});
