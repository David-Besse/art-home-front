import {
  TOGGLE_LOGIN_MODAL, CHANGE_INPUT_FIELDS_VALIDATION,
  TOGGLE_NEW_ACCOUNT_MODAL, SHOW_MESSAGE_INFORMATION,
  TOGGLE_ACCOUNT_CREATED_MODAL, TOGGLE_TERM_OF_USES_BOX,
  TOGGLE_EXHIBITION_CREATION_MODAL, TOGGLE_ARTWORK_CREATION_MODAL,
} from '../actions/modals';

export const initialState = {
  isLogModalOpened: false,
  isLogFormValidated: false,
  isNewAccountModalOpened: false,
  isMessageModalOpened: false,
  isMessageDisplayed: false,
  message: '',
  isCheckedTermOfUsesBox: false,
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
    case TOGGLE_ACCOUNT_CREATED_MODAL:
      return {
        ...state,
        isMessageModalOpened: !state.isMessageModalOpened,
      };
    case TOGGLE_TERM_OF_USES_BOX:
      return {
        ...state,
        isCheckedTermOfUsesBox: !state.isCheckedTermOfUsesBox,
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
