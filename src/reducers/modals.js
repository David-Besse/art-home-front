import {
  TOGGLE_LOGIN_MODAL, CHANGE_INPUT_FIELDS_VALIDATION,
  TOGGLE_NEW_ACCOUNT_MODAL, SHOW_MESSAGE_INFORMATION,
  TOGGLE_INFORMATION_MODAL,
  TOGGLE_EXHIBITION_CREATION_MODAL, TOGGLE_ARTWORK_CREATION_MODAL,
} from '../actions/modals';

export const initialState = {
  isLogModalOpened: false,
  isLogFormValidated: false,
  isNewAccountModalOpened: false,
  isMessageModalOpened: false,
  isMessageDisplayed: false,
  message: '',
  isAccountCreationModalOpened: false,
  isArtworkCreationModalOpened: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        isLogModalOpened: !state.isLogModalOpened,
      };
    case CHANGE_INPUT_FIELDS_VALIDATION:
      return {
        ...state,
        isLogFormValidated: action.payload,
      };
    case TOGGLE_NEW_ACCOUNT_MODAL:
      return {
        ...state,
        isNewAccountModalOpened: !state.isNewAccountModalOpened,
      };
    case SHOW_MESSAGE_INFORMATION:
      return {
        ...state,
        isMessageDisplayed: action.display,
        message: action.message,
      };
    case TOGGLE_INFORMATION_MODAL:
      return {
        ...state,
        isMessageModalOpened: !state.isMessageModalOpened,
      };
    case TOGGLE_EXHIBITION_CREATION_MODAL:
      return {
        ...state,
        isAccountCreationModalOpened: !state.isAccountCreationModalOpened,
      };
    case TOGGLE_ARTWORK_CREATION_MODAL:
      return {
        ...state,
        isArtworkCreationModalOpened: !state.isArtworkCreationModalOpened,
      };
    default:
      return state;
  }
};

export default reducer;
