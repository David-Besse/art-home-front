export const TOGGLE_LOGIN_MODAL_STATE = 'TOGGLE_LOGIN_MODAL_STATE';
export const CHANGE_INPUT_FIELDS_VALIDATION = 'CHANGE_INPUT_FIELDS_VALIDATION';
export const CHANGE_NEW_ACCOUNT_MODAL_STATE = 'CHANGE_NEW_ACCOUNT_MODAL_STATE';
export const CHANGE_NEW_ACCOUNT_FIELDS_VALIDATION = 'CHANGE_NEW_ACCOUNT_FIELDS_VALIDATION';
export const TOGGLE_NEW_ACCOUNT_MODAL_STATE = 'TOGGLE_NEW_ACCOUNT_MODAL_STATE';
export const TOGGLE_TERM_OF_USES_BOX = 'TOGGLE_TERM_OF_USES_BOX';
export const TOGGLE_EXHIBITION_CREATION_MODAL = 'TOGGLE_EXHIBITION_CREATION_MODAL';
export const TOGGLE_ARTWORK_CREATION_MODAL = 'TOGGLE_ARTWORK_CREATION_MODAL';

export const toggleLoginModalSate = () => ({
  type: TOGGLE_LOGIN_MODAL_STATE,
});

export const changeInputFieldsValidation = (value) => ({
  type: CHANGE_INPUT_FIELDS_VALIDATION,
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

export const toggleExhibitionCreationModal = () => ({
  type: TOGGLE_EXHIBITION_CREATION_MODAL,
});

export const toggleArtworkCreationModal = () => ({
  type: TOGGLE_ARTWORK_CREATION_MODAL,
});
