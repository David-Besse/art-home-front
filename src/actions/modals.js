export const CHANGE_LOGIN_MODAL_STATE = 'CHANGE_LOGIN_MODAL_STATE';
export const CHANGE_LOGIN_FIELDS_VALIDATION = 'CHANGE_LOGIN_FIELDS_VALIDATION';
export const CHANGE_NEW_ACCOUNT_MODAL_STATE = 'CHANGE_NEW_ACCOUNT_MODAL_STATE';
export const CHANGE_NEW_ACCOUNT_FIELDS_VALIDATION = 'CHANGE_NEW_ACCOUNT_FIELDS_VALIDATION';
export const TOGGLE_NEW_ACCOUNT_MODAL_STATE = 'TOGGLE_NEW_ACCOUNT_MODAL_STATE';
export const TOGGLE_TERM_OF_USES_BOX = 'TOGGLE_TERM_OF_USES_BOX';
export const TOGGLE_ACCOUNT_CREATION_MODAL = 'TOGGLE_ACCOUNT_CREATION_MODAL';

export const changeLoginModalSate = () => ({
  type: CHANGE_LOGIN_MODAL_STATE,
});

export const changeLoginFieldsValidation = (value) => ({
  type: CHANGE_LOGIN_FIELDS_VALIDATION,
  payload: value,
});

export const changeNewAccountModalSate = () => ({
  type: CHANGE_NEW_ACCOUNT_MODAL_STATE,
});

export const changeNewAccountFieldsValidation = (value) => ({
  type: CHANGE_NEW_ACCOUNT_FIELDS_VALIDATION,
  payload: value,
});

export const toggleNewAccountModalSate = () => ({
  type: TOGGLE_NEW_ACCOUNT_MODAL_STATE,
});

export const toggleTermOfUseBox = () => ({
  type: TOGGLE_TERM_OF_USES_BOX,
});

export const toggleAccountCreationModal = () => ({
  type: TOGGLE_ACCOUNT_CREATION_MODAL,
});
