export const CHANGE_INPUT_FIELD = 'CHANGE_INPUT_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CHANGE_USER_LOGGIN = 'CHANGE_USER_LOGGIN';
export const HANDLE_LOGIN_OFF = 'HANDLE_LOGIN_OFF';
export const WIPE_USER_DATA = 'WIPE_USER_DATA';
export const SUBMIT_NEW_ACCOUNT = 'SUBMIT_NEW_ACCOUNT';
export const SUBMIT_PROFILE_UPDATE = 'SUBMIT_PROFILE_UPDATE';
export const SAVE_USER_DATA_FROM_LOCALSTORAGE = 'SAVE_USER_DATA_FROM_LOCALSTORAGE';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

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

export const getUserProfile = (userToken) => ({
  type: GET_USER_PROFILE,
  userToken: userToken,
});

export const saveUserData = ({
  nickname, lastname, firstname, avatar, birthday, presentation, role, email, favorites,
}) => ({
  type: SAVE_USER_DATA,
  nickname: nickname,
  lastName: lastname,
  firstName: firstname,
  avatar: avatar,
  birthday: birthday,
  presentation: presentation,
  role: role,
  email: email,
  favorites: favorites,
});

export const changeUserLoggin = (value) => ({
  type: CHANGE_USER_LOGGIN,
  logged: value,
});

export const submitProfileUpdate = () => ({
  type: SUBMIT_PROFILE_UPDATE,
});

export const handleLoginOff = () => ({
  type: HANDLE_LOGIN_OFF,
});

export const wipeUserData = () => ({
  type: WIPE_USER_DATA,
});

export const saveUserDataFromLocalStorage = ({
  nickname, lastName, firstName, avatar, birthday, presentation, role, email, logged, token, favorites,
}) => ({
  type: SAVE_USER_DATA_FROM_LOCALSTORAGE,
  nickname: nickname,
  lastName: lastName,
  firstName: firstName,
  avatar: avatar,
  birthday: birthday,
  presentation: presentation,
  role: role,
  email: email,
  logged: logged,
  token: token,
  favorites: favorites,
});

export const addFavorites = (pictureSlug) => ({
  type: ADD_FAVORITES,
  payload: pictureSlug,
});

export const removeFavorites = (pictureSlug) => ({
  type: REMOVE_FAVORITES,
  payload: pictureSlug,
});
