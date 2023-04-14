import { CHANGE_LOGIN_FIELD, SAVE_AUTH_DATA, HANDLE_LOGIN_OFF } from '../actions/users';

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
        nickname: action.nickname,
        token: action.token,
        role: action.role,
        // ! SECURITY : we erase identifiers
        email: '',
        password: '',
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
