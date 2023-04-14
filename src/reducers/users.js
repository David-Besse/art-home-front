import {
  CHANGE_LOGIN_FIELD, SAVE_AUTH_DATA, SAVE_USER_DATA, HANDLE_LOGIN_OFF,
} from '../actions/users';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  nickname: '',
  token: '',
  role: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.fieldName]: action.newValue,
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
        nickname: action.nickname,
        role: action.role,
      };
    case HANDLE_LOGIN_OFF:
      return {
        ...state,
        nickname: '',
        logged: false,
        token: '',
        role: '',
      };
    default:
      return state;
  }
};

export default reducer;
