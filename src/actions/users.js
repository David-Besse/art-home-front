export const CHANGE_INPUT_FIELD = 'CHANGE_INPUT_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const HANDLE_LOGIN_OFF = 'HANDLE_LOGIN_OFF';
export const SUBMIT_NEW_ACCOUNT = 'SUBMIT_NEW_ACCOUNT';
export const SUBMIT_PROFILE_UPDATE = 'SUBMIT_PROFILE_UPDATE';
export const SUBMIT_NEW_EXHIBITION = 'SUBMIT_NEW_EXHIBITION';
export const SAVE_USER_EXHIBITIONS_LIST = 'SAVE_USER_EXHIBITIONS_LIST';
export const SAVE_USER_DATA_FROM_LOCALSTORAGE = 'SAVE_USER_DATA_FROM_LOCALSTORAGE';

export const changeInputField = (newValue, fieldName) => ({
  type: CHANGE_INPUT_FIELD,
  newValue: newValue,
  fieldName: fieldName,
});

export const submitLogin = (userDataLogin, formRef) => ({
  type: SUBMIT_LOGIN,
  payload: userDataLogin,
  loginForm: formRef,
});

export const saveAuthData = (token) => ({
  type: SAVE_AUTH_DATA,
  token: token,
});

export const submitNewAccount = (newAccountData, formRef) => ({
  type: SUBMIT_NEW_ACCOUNT,
  payload: newAccountData,
  newAccountForm: formRef,
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

export const saveUserDataFromLocalStorage = ({
  nickname, lastname, firstname, avatar, birthday, presentation, role, email, logged, exhibitionDescription, exhibitionName, exhibitions, token,
}) => ({
  type: SAVE_USER_DATA_FROM_LOCALSTORAGE,
  nickname: nickname,
  lastName: lastname,
  firstName: firstname,
  avatar: avatar,
  birthday: birthday,
  presentation: presentation,
  role: role,
  email: email,
  logged: logged,
  exhibitionDescription: exhibitionDescription,
  exhibitionName: exhibitionName,
  exhibitions: exhibitions,
  token: token,
});
