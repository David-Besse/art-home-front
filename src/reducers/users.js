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
  dateOfBirth: '',
  presentation: '',
  avatar: '',
  exhibitions: [],
  artworks: [],
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
        // ! SECURITY : we erase identifiers
        email: '',
        password: '',
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        email: action.email,
        password: action.password,
        lastName: action.lastName,
        firstName: action.firstName,
        nickname: action.nickname,
        avatar: action.avatar,
        role: action.role,
        dateOfBirth: action.dateOfBirth,
        presentation: action.presentation,
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
        dateOfBirth: '',
        presentation: '',
      };
    default:
      return state;
  }
};

export default reducer;
