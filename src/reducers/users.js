import {
  CHANGE_LOGIN_FIELD,
  SAVE_AUTH_DATA, SAVE_USER_DATA,
  HANDLE_LOGIN_OFF,
  RESET_FORM_FIELDS,
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
  exhibitions: [],
  exhibition: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.fieldName]: action.newValue,
      };
    case RESET_FORM_FIELDS:
      return {
        ...state,
        email: '',
        password: '',
        lastName: '',
        firstName: '',
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
        nickname: action.nickname,
        avatar: action.avatar,
        birthday: action.birthday === null ? '1900-01-01' : action.birthday,
        presentation: action.presentation,
        role: action.role,
        exhibitions: action.exhibitions,
      };
    case HANDLE_LOGIN_OFF:
      return {
        ...state,
        logged: false,
        token: '',
        email: '',
        password: '',
        lastName: '',
        firstName: '',
        nickname: '',
        avatar: '',
        role: '',
        birthday: '',
        presentation: '',
        exhibitions: [],
        exhibition: [],
      };
    default:
      return state;
  }
};

export default reducer;
