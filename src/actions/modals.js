export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
export const CHANGE_INPUT_FIELDS_VALIDATION = 'CHANGE_INPUT_FIELDS_VALIDATION';
export const TOGGLE_NEW_ACCOUNT_MODAL = 'TOGGLE_NEW_ACCOUNT_MODAL';
export const SHOW_MESSAGE_INFORMATION = 'SHOW_MESSAGE_INFORMATION';
export const TOGGLE_INFORMATION_MODAL = 'TOGGLE_INFORMATION_MODAL';
export const TOGGLE_EXHIBITION_CREATION_MODAL = 'TOGGLE_EXHIBITION_CREATION_MODAL';
export const TOGGLE_ARTWORK_CREATION_MODAL = 'TOGGLE_ARTWORK_CREATION_MODAL';

export const toggleLoginModal = () => ({
  type: TOGGLE_LOGIN_MODAL,
});

export const changeInputFieldsValidation = (value) => ({
  type: CHANGE_INPUT_FIELDS_VALIDATION,
  payload: value,
});

export const toggleNewAccountModal = () => ({
  type: TOGGLE_NEW_ACCOUNT_MODAL,
});

export const showMessageInformation = (display, text) => ({
  type: SHOW_MESSAGE_INFORMATION,
  display: display,
  message: text,
});

export const toggleInformationModal = () => ({
  type: TOGGLE_INFORMATION_MODAL,
});

export const toggleExhibitionCreationModal = () => ({
  type: TOGGLE_EXHIBITION_CREATION_MODAL,
});

export const toggleArtworkCreationModal = () => ({
  type: TOGGLE_ARTWORK_CREATION_MODAL,
});
