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
import { useRef, useState } from 'react';

import './styles.scss';

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

  const [formValidated, setFormValidated] = useState(false);

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
    const formData = new FormData(event.target); // we create a new object FormData
    const newAccountData = Object.fromEntries(formData.entries()); // we retrieved data from formData
    console.log(newAccountData);

    if (newAccountData.password !== newAccountData.confirmPassword) {
      dispatch(toggleAccountCreatedModal());
      dispatch(showMessageInformation(true, 'Les mots de passe ne correspondent pas.'));
      event.stopPropagation();
    }
    else if (!form.reportValidity()) {
      event.stopPropagation();
      setFormValidated(true);
    }
    else {
      dispatch(showMessageInformation(false));
      dispatch(submitNewAccount(newAccountData, formRef));
    }
  };

  return (
    <>
      <Modal
        show={isNewAccountModalOpened}
        onHide={handleNewAccountModal}
        size="lg"
        aria-labelledby="new-account-modal"
        backdrop="static"
        centered
        className="newAccountModal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Créer un compte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={formValidated} onSubmit={handleSubmit} style={{ textAlign: 'center' }} ref={formRef}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="inputLastName">
                <FloatingLabel label="Nom" className="mb-3">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nom"
                    name="lastName"
                  />
                  <Form.Control.Feedback type="invalid">
                    Votre nom est nécessaire.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="inputFirstName">
                <FloatingLabel label="Prénom" className="mb-3">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Prénom"
                    name="firstName"
                  />
                  <Form.Control.Feedback type="invalid">
                    Votre prénom est nécessaire.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Form.Group controlId="inputEmail">
              <FloatingLabel label="Email" className="mb-3">
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <Form.Control.Feedback type="invalid">
                  Email invalide / manquant.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="inputPassword">
              <FloatingLabel label="Mot de passe" className="mb-3">
                <Form.Control
                  required
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&\*()_+]{8,}$"
                />
                <Form.Control.Feedback type="invalid">
                  Mot de passe invalide.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="inputConfirmPassword">
              <FloatingLabel label="Confirmer le mot de passe" className="mb-3">
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirmer le mot de passe"
                  name="confirmPassword"
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&\*()_+]{8,}$"
                />
                <Form.Control.Feedback type="invalid">
                  Mot de passe invalide.
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
            <Button type="submit" id="submitNewAccountBtn">Soumettre</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={isMessageModalOpened} onHide={handleAccountCreatedModal}>
        {!isMessageDisplayed
        && <Modal.Body className="normalInformation text-center">{message}</Modal.Body>}
        {isMessageDisplayed
        && <Modal.Body className="importantInformation text-danger text-center">{message}</Modal.Body>}
      </Modal>
    </>
  );
};

export default NewAccountModal;
