export const TOGGLE_ALERT_MESSAGE = 'TOGGLE_ALERT_MESSAGE';
export const MESSAGE_TO_SHOW = 'MESSAGE_TO_SHOW';

export const toggleAlertMessage = () => ({
  type: TOGGLE_ALERT_MESSAGE,
});

export const messageToShow = (variant, message) => ({
  type: MESSAGE_TO_SHOW,
  payload: { type: variant, text: message },
});
