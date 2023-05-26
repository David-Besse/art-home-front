export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
export const CHANGE_INPUT_FIELDS_VALIDATION = 'CHANGE_INPUT_FIELDS_VALIDATION';
export const TOGGLE_NEW_ACCOUNT_MODAL = 'TOGGLE_NEW_ACCOUNT_MODAL';
export const TOGGLE_EXHIBITION_CREATION_MODAL = 'TOGGLE_EXHIBITION_CREATION_MODAL';
export const TOGGLE_ARTWORK_CREATION_MODAL = 'TOGGLE_ARTWORK_CREATION_MODAL';
export const TOGGLE_MODAL_IMAGE = 'TOGGLE_MODAL_IMAGE';
export const SET_MODAL_IMAGE_INFOS = 'SET_MODAL_IMAGE_INFOS';

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

export const toggleExhibitionCreationModal = () => ({
  type: TOGGLE_EXHIBITION_CREATION_MODAL,
});

export const toggleArtworkCreationModal = () => ({
  type: TOGGLE_ARTWORK_CREATION_MODAL,
});

export const toggleModalImage = () => ({
  type: TOGGLE_MODAL_IMAGE,
});

export const setModalImageInfos = (selectedImage) => ({
  type: SET_MODAL_IMAGE_INFOS,
  payload: selectedImage,
});
