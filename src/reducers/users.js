import {
  CHANGE_INPUT_FIELD,
  SAVE_AUTH_DATA, SAVE_USER_DATA,
  HANDLE_LOGIN_OFF,
  SAVE_USER_DATA_FROM_LOCALSTORAGE,
  WIPE_USER_DATA,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  CHANGE_USER_LOGGIN,
} from '../actions/users';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  nickname: '',
  token: '',
  role: '',
  lastName: '',
  firstName: '',
  birthday: '',
  presentation: '',
  avatar: '',
  favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_FIELD:
      return {
        ...state,
        [action.fieldName]: action.newValue,
      };
    case SAVE_AUTH_DATA:
      return {
        ...state,
        logged: true,
        token: action.token,
        // ! SECURITY : we erase password
        password: '',
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        email: action.email,
        lastName: action.lastName,
        firstName: action.firstName,
        nickname: action.nickname === null ? '' : action.nickname,
        avatar: action.avatar === null ? '' : action.avatar,
        birthday: action.birthday === null ? '1900-01-01' : new Date(action.birthday).toISOString().split('T')[0],
        presentation: action.presentation === null ? '' : action.presentation,
        role: action.role,
        favorites: action.favorites,
      };
    case CHANGE_USER_LOGGIN:
      return {
        ...state,
        logged: action.logged,
      };
    case HANDLE_LOGIN_OFF:
      return {
        ...state,
        logged: false,
      };
    case WIPE_USER_DATA:
      return {
        ...state,
        email: '',
        password: '',
        nickname: '',
        token: '',
        role: '',
        lastName: '',
        firstName: '',
        birthday: '',
        presentation: '',
        avatar: '',
        favorites: [],
      };
    case SAVE_USER_DATA_FROM_LOCALSTORAGE:
      return {
        ...state,
        nickname: action.nickname,
        lastName: action.lastName,
        firstName: action.firstName,
        avatar: action.avatar,
        birthday: action.birthday,
        presentation: action.presentation,
        role: action.role,
        email: action.email,
        logged: action.logged,
        token: action.token,
        favorites: action.favorites,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((elem) => elem !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
