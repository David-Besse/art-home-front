import {
  TOGGLE_LOGIN_MODAL, CHANGE_INPUT_FIELDS_VALIDATION,
  TOGGLE_NEW_ACCOUNT_MODAL,
  TOGGLE_EXHIBITION_CREATION_MODAL, TOGGLE_ARTWORK_CREATION_MODAL,
  TOGGLE_MODAL_IMAGE, SET_MODAL_IMAGE_INFOS,
} from '../actions/modals';

export const initialState = {
  isLogModalOpened: false,
  isLogFormValidated: false,
  isNewAccountModalOpened: false,
  isExhibitionCreationModalOpened: false,
  isArtworkCreationModalOpened: false,
  isModalImageOpened: false,
  modalImageInfos: {},
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
    case TOGGLE_EXHIBITION_CREATION_MODAL:
      return {
        ...state,
        isExhibitionCreationModalOpened: !state.isExhibitionCreationModalOpened,
      };
    case TOGGLE_ARTWORK_CREATION_MODAL:
      return {
        ...state,
        isArtworkCreationModalOpened: !state.isArtworkCreationModalOpened,
      };
    case TOGGLE_MODAL_IMAGE:
      return {
        ...state,
        isModalImageOpened: !state.isModalImageOpened,
      };
    case SET_MODAL_IMAGE_INFOS:
      return {
        ...state,
        modalImageInfos: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
