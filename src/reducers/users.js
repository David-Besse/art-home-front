import { CHANGE_LOGIN_FIELD, SAVE_AUTH_DATA, HANDLE_LOGIN_OFF } from '../actions/users';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  nickname: '',
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    case SAVE_AUTH_DATA:
      return {
        ...state,
        logged: true,
        nickname: action.nickname,
        token: action.token,
        // ! security : we erase the identifiers of the state
        email: '',
        password: '',
      };
    case HANDLE_LOGIN_OFF:
      return {
        ...state,
        pseudo: '',
        logged: false,
        token: '',
      };
    default:
      return state;
  }
};

export default reducer;
