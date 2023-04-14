import { CHANGE_LOGIN_MODAL_STATE, CHANGE_NEW_ACCOUNT_MODAL_STATE } from '../actions/modals';

export const initialState = {
  isLogModalOpened: false,
  isNewAccountModalOpened: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_MODAL_STATE:
      return {
        ...state,
        isLogModalOpened: !state.isLogModalOpened,
      };
    case CHANGE_NEW_ACCOUNT_MODAL_STATE:
      return {
        ...state,
        isNewAccountModalOpened: !state.isNewAccountModalOpened,
      };
    default:
      return state;
  }
};

export default reducer;
