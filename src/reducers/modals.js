import {
  CHANGE_LOGIN_MODAL_STATE, CHANGE_LOGIN_FIELDS_VALIDATION,
  CHANGE_NEW_ACCOUNT_MODAL_STATE, CHANGE_NEW_ACCOUNT_FIELDS_VALIDATION,
  TOGGLE_NEW_ACCOUNT_MODAL_STATE, TOGGLE_TERM_OF_USES_BOX,
  TOGGLE_ACCOUNT_CREATION_MODAL,
} from '../actions/modals';

export const initialState = {
  isLogModalOpened: false,
  isLogFormValidated: false,
  isNewAccountModalOpened: false,
  isNewAccountFormValidated: false,
  isNewAccountModalStateOpened: false,
  isCheckedTermOfUsesBox: false,
  isAccountCreationModalOpened: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_MODAL_STATE:
      return {
        ...state,
        isLogModalOpened: !state.isLogModalOpened,
      };
    case CHANGE_LOGIN_FIELDS_VALIDATION:
      return {
        ...state,
        isLogFormValidated: action.payload,
      };
    case CHANGE_NEW_ACCOUNT_MODAL_STATE:
      return {
        ...state,
        isNewAccountModalOpened: !state.isNewAccountModalOpened,
      };
    case CHANGE_NEW_ACCOUNT_FIELDS_VALIDATION:
      return {
        ...state,
        isNewAccountFormValidated: action.payload,
      };
    case TOGGLE_NEW_ACCOUNT_MODAL_STATE:
      return {
        ...state,
        isNewAccountModalStateOpened: !state.isNewAccountModalStateOpened,
      };
    case TOGGLE_TERM_OF_USES_BOX:
      return {
        ...state,
        isCheckedTermOfUsesBox: !state.isCheckedTermOfUsesBox,
      };
    case TOGGLE_ACCOUNT_CREATION_MODAL:
      return {
        ...state,
        isAccountCreationModalOpened: !state.isAccountCreationModalOpened,
      };
    default:
      return state;
  }
};

export default reducer;
