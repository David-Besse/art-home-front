export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const RESET_FORM_FIELDS = 'RESET_FORM_FIELDS';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const HANDLE_LOGIN_OFF = 'HANDLE_LOGIN_OFF';
export const SUBMIT_NEW_ACCOUNT = 'SUBMIT_NEW_ACCOUNT';
export const SUBMIT_PROFILE_UPDATE = 'SUBMIT_PROFILE_UPDATE';
export const SUBMIT_NEW_EXHIBITION = 'SUBMIT_NEW_EXHIBITION';
export const SAVE_USER_EXHIBITIONS_LIST = 'SAVE_USER_EXHIBITIONS_LIST';

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

export const submitNewAccount = () => ({
  type: SUBMIT_NEW_ACCOUNT,
});
export const saveUserData = ({
  nickname, lastname, firstname, avatar, dateOfBirth, presentation, role, email, exhibitions,
}) => ({
  type: SAVE_USER_DATA,
  nickname: nickname,
  lastName: lastname,
  firstName: firstname,
  avatar: avatar,
  birthday: dateOfBirth,
  presentation: presentation,
  role: role,
  email: email,
  exhibitions: exhibitions,
});

export const submitProfileUpdate = () => ({
  type: SUBMIT_PROFILE_UPDATE,
});

export const submitNewExhibition = () => ({
  type: SUBMIT_NEW_EXHIBITION,
});

export const saveUserExhibitionsList = (exhibitions) => ({
  type: SAVE_USER_EXHIBITIONS_LIST,
  exhibitions: exhibitions,
});

export const handleLoginOff = () => ({
  type: HANDLE_LOGIN_OFF,
});
