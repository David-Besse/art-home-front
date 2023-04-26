import { useSelector, useDispatch } from 'react-redux';
import { changeInputField, submitNewAccount } from 'src/actions/users';
import {
  changeNewAccountModalSate,
  changeNewAccountFieldsValidation,
  toggleNewAccountModalSate,
  toggleTermOfUseBox,
} from 'src/actions/modals';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/**
 * Modal New Account
 * @returns {JSX.Element}
 */
const NewAccountModal = () => {
  const {
    email,
    password,
    firstName,
    lastName,
  } = useSelector((state) => state.users);
  const {
    isNewAccountModalOpened,
    isNewAccountFormValidated,
    isNewAccountModalStateOpened,
    isCheckedTermOfUsesBox,
  } = useSelector((state) => state.modals);

  const dispatch = useDispatch();
  const changeField = (newValue, name) => dispatch(changeInputField(newValue, name));

  const handleLogModal = () => {
    dispatch(changeNewAccountModalSate());
  };

  const handleNewAccountModalSate = () => {
    dispatch(toggleNewAccountModalSate());
    dispatch(changeNewAccountFieldsValidation(false));
  };

  const toggleCheckBox = () => dispatch(toggleTermOfUseBox());

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      dispatch(changeNewAccountFieldsValidation(true));
    }
    else {
      dispatch(submitNewAccount());
    }
  };

  return (
    <>
      <Modal
        show={isNewAccountModalOpened}
        onHide={handleLogModal}
        size="lg"
        aria-labelledby="new-account-modal"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Créer un compte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={isNewAccountFormValidated} onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="inputLastName">
                <FloatingLabel label="Nom" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    required
                    value={lastName}
                    onChange={(evt) => {
                      changeField(evt.target.value, 'lastName');
                    }}
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
                    value={firstName}
                    onChange={(evt) => {
                      changeField(evt.target.value, 'firstName');
                    }}
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
                  value={email}
                  onChange={(evt) => {
                    changeField(evt.target.value, 'email');
                  }}
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
                  value={password}
                  onChange={(evt) => {
                    changeField(evt.target.value, 'password');
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  mot de passe manquant.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Check
                required
                checked={isCheckedTermOfUsesBox}
                onChange={toggleCheckBox}
                label="Vous êtes d'accord avec nos conditions d'utilisations."
                feedback="* vous devez accepter nos conditions d'utilisations."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Soumettre</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={isNewAccountModalStateOpened} onHide={handleNewAccountModalSate}>
        <Modal.Header closeButton>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        {!isNewAccountFormValidated
        && <Modal.Body>Compte créé, vous pouvez vous connecter !</Modal.Body>}
        {isNewAccountFormValidated
        && <Modal.Body className="text-danger">Une erreur inatendue est survenue !</Modal.Body>}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNewAccountModalSate}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewAccountModal;
