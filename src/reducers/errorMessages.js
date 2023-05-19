import { TOGGLE_ALERT_MESSAGE, MESSAGE_TO_SHOW } from 'src/actions/errorMessages';

export const initialState = {
  isMessageAlertActivated: false,
  textToSHowInMessageAlert: '',
  typeOfMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_ALERT_MESSAGE:
      return {
        ...state,
        isMessageAlertActivated: !state.isMessageAlertActivated,
      };
    case MESSAGE_TO_SHOW:
      return {
        ...state,
        typeOfMessage: action.payload.type,
        textToSHowInMessageAlert: action.payload.text,
      };
    default:
      return state;
  }
};

export default reducer;
