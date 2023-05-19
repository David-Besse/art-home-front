import {
  TOGGLE_PROFILE_EDITING, SHOW_SELECTED_EXHIBITION, TOGGLE_ARTWORK_EDITING,
} from '../actions/profile';

export const initialState = {
  isProfileEditingActivated: false,
  isArtworkEditingActivated: { artworkFormActivated: '', isFormActivated: false },
  selectedExhibitionId: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_PROFILE_EDITING:
      return {
        ...state,
        isProfileEditingActivated: !state.isProfileEditingActivated,
      };
    case TOGGLE_ARTWORK_EDITING:
      return {
        ...state,
        isArtworkEditingActivated: { artworkFormActivated: action.formId, isFormActivated: !state.isArtworkEditingActivated.isFormActivated },
      };
    case SHOW_SELECTED_EXHIBITION:
      return {
        ...state,
        selectedExhibitionId: action.id,
      };
    default:
      return state;
  }
};

export default reducer;
