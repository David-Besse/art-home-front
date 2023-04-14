import { CHANGE_LOGIN_MODAL_STATE } from '../actions/modals';

export const initialState = {
  isLogModalOpened: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_MODAL_STATE:
      return {
        ...state,
        isLogModalOpened: !state.isLogModalOpened,
      };
    default:
      return state;
  }
};

export default reducer;
