import { useSelector, useDispatch } from 'react-redux';
import { submitNewAccount } from 'src/actions/users';
import {
  showMessageInformation,
  toggleAccountCreatedModal,
  toggleNewAccountModal,
} from 'src/actions/modals';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useRef } from 'react';

/**
 * Modal New Account
 * @returns {JSX.Element}
 */
const NewAccountModal = () => {
  const {
    isMessageModalOpened,
    isMessageDisplayed,
    message,
    isNewAccountModalOpened,
  } = useSelector((state) => state.modals);

  const dispatch = useDispatch();

  const formRef = useRef(null);

  const handleNewAccountModal = () => {
    dispatch(toggleNewAccountModal());
  };

  const handleAccountCreatedModal = () => {
    dispatch(toggleAccountCreatedModal());
    dispatch(showMessageInformation(false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    const formData = new FormData(event.target); // we create a new object FormData
    const newAccountData = Object.fromEntries(formData.entries()); // we retrieved data from formData
    dispatch(submitNewAccount(newAccountData, formRef));
  };

  return (
    <>
      <Modal
        show={isNewAccountModalOpened}
        onHide={handleNewAccountModal}
        size="lg"
        aria-labelledby="new-account-modal"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Créer un compte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} style={{ textAlign: 'center' }} ref={formRef}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="inputLastName">
                <FloatingLabel label="Nom" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    required
                    name="lastName"
                  />
                  <Form.Control.Feedback type="invalid">
                    Votre nom est manquant.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="inputFirstName">
                <FloatingLabel label="Prénom" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Prénom"
                    required
                    name="firstName"
                  />
                  <Form.Control.Feedback type="invalid">
                    prénom manquant.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Form.Group controlId="inputEmail">
              <FloatingLabel label="Email" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                />
                <Form.Control.Feedback type="invalid">
                  email invalide.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="inputPassword">
              <FloatingLabel label="Mot de passe" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Mot de passe"
                  required
                  name="password"
                />
                <Form.Control.Feedback type="invalid">
                  mot de passe manquant.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Check
                required
                label="Vous êtes d'accord avec nos conditions d'utilisations."
                feedback="* vous devez accepter nos conditions d'utilisations."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Soumettre</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={isMessageModalOpened} onHide={handleAccountCreatedModal}>
        <Modal.Header closeButton>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        {!isMessageDisplayed
        && <Modal.Body>{message}</Modal.Body>}
        {isMessageDisplayed
        && <Modal.Body className="text-danger">{message}</Modal.Body>}
      </Modal>
    </>
  );
};

export default NewAccountModal;
