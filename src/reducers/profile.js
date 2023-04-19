import { TOGGLE_PROFILE_EDITING, TOGGLE_ALERT_AFTER_EMAIL_MODIFICATION } from '../actions/profile';

export const initialState = {
  isProfileEditingActivated: false,
  showAlert: false,
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
    default:
      return state;
  }
};

export default reducer;
