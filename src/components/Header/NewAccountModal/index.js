import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from 'react';

import { submitNewAccount } from 'src/actions/users';
import {
  showMessageInformation,
  toggleInformationModal,
  toggleNewAccountModal,
} from 'src/actions/modals';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './styles.scss';

// Modal to create an account
const NewAccountModal = () => {
  const {
    isMessageModalOpened,
    isMessageDisplayed,
    message,
    isNewAccountModalOpened,
  } = useSelector((state) => state.modals);

  // we use a local state and not redux for the validation of the form for more convenience
  const [formValidated, setFormValidated] = useState(false);

  const dispatch = useDispatch();

  const formRef = useRef(null);

  // triggers the display of the modal to create an account
  const handleNewAccountModal = () => {
    dispatch(toggleNewAccountModal());
    setFormValidated(false);
  };

  // triggers the display of the modal to inform the user of the result after the creation of the account
  const handleAccountCreatedModal = () => {
    dispatch(toggleInformationModal());
  };

  // data processing after submission of the create account form
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    // we create a new object FormData and retrieve data
    const formData = new FormData(event.target);
    const newAccountData = Object.fromEntries(formData.entries());

    // we check the validity of the form
    if (!form.reportValidity()) {
      event.stopPropagation();
      setFormValidated(true);
    }
    // we check that the passwords entered by the user are identical
    else if (newAccountData.password !== newAccountData.confirmPassword) {
      dispatch(toggleInformationModal());
      dispatch(showMessageInformation(true, 'Les mots de passe ne correspondent pas.'));
      event.stopPropagation();
    }
    // we trigger the action of creating an account to the server, we add the user data and the targeted form as a parameter
    else {
      dispatch(submitNewAccount(newAccountData, formRef));
    }
  };

  return (
    <>
      <Modal
        show={isNewAccountModalOpened}
        onHide={handleNewAccountModal}
        size="md"
        aria-labelledby="new-account-modal"
        backdrop="static"
        centered
        className="newAccountModal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Créer un compte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={formValidated} onSubmit={handleSubmit} ref={formRef} className="d-flex flex-column">
            <Row>
              <Form.Group as={Col} controlId="inputLastName">
                <FloatingLabel label="Nom" className="mb-3">
                  <Form.Control
                    required
                    autoComplete="family-name"
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
                    autoComplete="given-name"
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
                  autoComplete="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  pattern="^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-z]{2,4}$"
                />
                <Form.Control.Feedback type="invalid">
                  Email invalide / manquant.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="inputPassword">
              <FloatingLabel label="Mot de passe*" className="mb-3">
                <Form.Control
                  required
                  autoComplete="new-password"
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$"
                  aria-describedby="passwordHelpBlock"
                />
                <Form.Control.Feedback type="invalid">
                  Mot de passe invalide.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="inputConfirmPassword">
              <FloatingLabel label="Confirmer le mot de passe*" className="mb-3">
                <Form.Control
                  required
                  autoComplete="current-password"
                  type="password"
                  placeholder="Confirmer le mot de passe"
                  name="confirmPassword"
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$"
                  isInvalid={!formValidated && formRef.current && (formRef.current.elements.confirmPassword.value !== formRef.current.elements.password.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Mot de passe invalide.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="selectRole">
              <Form.Select
                name="role"
                defaultValue=""
                required
                autoComplete="off"
                className="mb-3"
              >
                <option disabled value="">Type de compte</option>
                <option value="ROLE_USER">Rêveur</option>
                <option value="ROLE_ARTIST">Artiste</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Vous devez sélectionner un type de compte.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Check
                required
                label="Vous êtes d'accord avec nos conditions d'utilisations."
                feedback="* vous devez accepter nos conditions d'utilisations."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" id="submitNewAccountBtn" className="align-self-center customButton">Soumettre</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Form.Text id="passwordHelpBlock" muted>
            * Le mot de passe doit contenir au moins 8 charactères, au moins une lettre en majuscule, au moins un chiffre, au moins un charactère spécial [ !@#$%^&*()_+ ] et ne doit pas contenir d'espace.
          </Form.Text>
        </Modal.Footer>
      </Modal>

      {/* Message appearing depending on the success or not of the creation of a new user account */}
      <Modal show={isMessageModalOpened} onHide={handleAccountCreatedModal} className="informationModal">
        {!isMessageDisplayed
        && <Modal.Body className="normalInformation text-center">{message}</Modal.Body>}
        {isMessageDisplayed
        && <Modal.Body className="importantInformation text-danger text-center">{message}</Modal.Body>}
      </Modal>
    </>
  );
};

export default NewAccountModal;
