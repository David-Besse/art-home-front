import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { toggleAlertMessage, messageToShow } from 'src/actions/errorMessages';

const MessageAlert = () => {
  const { textToSHowInMessageAlert, isMessageAlertActivated, typeOfMessage } = useSelector((state) => state.errorMessages);
  const dispatch = useDispatch();

  //  useEffect hook is used to handle the alert message
  useEffect(() => {
    let timeoutId;
    if (typeOfMessage) {
      timeoutId = setTimeout(() => {
        dispatch(toggleAlertMessage());
        dispatch(messageToShow('', ''));
      }, 3500);
    }
    return () => clearTimeout(timeoutId); // clean up the timer
  }, [typeOfMessage]);

  return (
    <Alert
      variant={typeOfMessage}
      show={isMessageAlertActivated}
      onClose={() => dispatch(toggleAlertMessage())}
      dismissible
    >
      {textToSHowInMessageAlert}
    </Alert>
  );
};

export default MessageAlert;
