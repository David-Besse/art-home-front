import { TOGGLE_PROFILE_EDITING, TOGGLE_ALERT_AFTER_EMAIL_MODIFICATION, SHOW_SELECTED_EXHIBITION } from '../actions/profile';

export const initialState = {
  isProfileEditingActivated: false,
  showAlert: false,
  selectedExhibitionId: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_PROFILE_EDITING:
      return {
        ...state,
        isProfileEditingActivated: !state.isProfileEditingActivated,
      };
    case TOGGLE_ALERT_AFTER_EMAIL_MODIFICATION:
      return {
        ...state,
        showAlert: !state.showAlert,
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
