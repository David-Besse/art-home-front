import { useSelector, useDispatch } from 'react-redux';
import { submitLogin } from 'src/actions/users';
import { toggleLoginModalSate } from 'src/actions/modals';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useRef } from 'react';

/**
 * Modal Login
 * @returns {JSX.Element}
 */
const LogModal = () => {
  const { isLogModalOpened, isLogFormValidated } = useSelector((state) => state.modals);

  const dispatch = useDispatch();

  const formRef = useRef(null);

  const handleLogModal = () => {
    dispatch(toggleLoginModalSate());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    const formData = new FormData(event.target); // we create a new object FormData
    const userDataLogin = Object.fromEntries(formData.entries()); // we retrieved data from formData
    dispatch(submitLogin(userDataLogin, formRef));
  };

  return (
    <Modal
      show={isLogModalOpened}
      onHide={handleLogModal}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Se connecter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="text-center login_form d-flex flex-column" ref={formRef}>
          <Form.Group className="mb-3" controlId="inputLogin">
            <FloatingLabel label="Adresse mail">
              <Form.Control
                type="email"
                autoFocus
                required
                placeholder="Adresse mail"
                name="email"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputPassword">
            <FloatingLabel label="Mot de passe">
              <Form.Control
                type="password"
                required
                placeholder="Mot de passe"
                name="password"
              />
            </FloatingLabel>
          </Form.Group>
          <Button type="submit">Soumettre</Button>
          {isLogFormValidated
              && (
              <Form.Text className="text-danger fw-2">
                email / mot de passe non valide.
              </Form.Text>
              )}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LogModal;
