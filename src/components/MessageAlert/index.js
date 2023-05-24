import { useDispatch, useSelector } from 'react-redux';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import { toggleAlertMessage, messageToShow } from 'src/actions/errorMessages';

import './styles.scss';

const MessageAlert = () => {
  const { textToSHowInMessageAlert, isMessageAlertActivated, typeOfMessage } = useSelector((state) => state.errorMessages);
  const dispatch = useDispatch();

  const handleToast = () => {
    dispatch(toggleAlertMessage());
    dispatch(messageToShow('', ''));
  };

  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast
        onClose={handleToast}
        show={isMessageAlertActivated}
        delay={2500}
        autohide
        className={`border-${typeOfMessage}`}
      >
        <Toast.Header>
          <strong className="me-auto">Message du peintre</strong>
        </Toast.Header>
        <Toast.Body>{textToSHowInMessageAlert}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default MessageAlert;
