import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';

import { submitLogin } from 'src/actions/users';
import { toggleLoginModal } from 'src/actions/modals';

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import './styles.scss';

// modal to login
const LogModal = () => {
  const { isLogModalOpened, isLogFormValidated } = useSelector((state) => state.modals);

  const dispatch = useDispatch();

  const formRef = useRef(null);

  // triggers the display of the modal to login
  const handleNewAccountModal = () => {
    dispatch(toggleLoginModal());
  };

  // data processing after submission of the login form
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    // we check the validity of the form
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    // we create a new object FormData and retrieve data
    const formData = new FormData(event.target);
    const userDataLogin = Object.fromEntries(formData.entries());

    // we trigger the action of connecting to the server, we add the user data and the targeted form as a parameter
    dispatch(submitLogin(userDataLogin, formRef));
  };

  return (
    <Modal
      show={isLogModalOpened}
      onHide={handleNewAccountModal}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      className="loginModal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Se connecter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="text-center" ref={formRef}>
          <Form.Group className="mb-3" controlId="inputLogin">
            <FloatingLabel label="Adresse mail">
              <Form.Control
                type="email"
                autoFocus
                required
                placeholder="Adresse mail"
                name="email"
                autoComplete="email"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-1" controlId="inputPassword">
            <FloatingLabel label="Mot de passe">
              <Form.Control
                type="password"
                required
                placeholder="Mot de passe"
                name="password"
                autoComplete="current-password"
              />
            </FloatingLabel>
          </Form.Group>
          {isLogFormValidated
              && (
              <Form.Text className="text-danger fw-2">
                email / mot de passe non valide.
              </Form.Text>
              )}
          <Button type="submit" className="mt-3 customButton" id="submitLoginBtn">Soumettre</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LogModal;
