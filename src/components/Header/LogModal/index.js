import { useSelector, useDispatch } from 'react-redux';
import { submitLogin } from 'src/actions/users';
import { toggleLoginModal } from 'src/actions/modals';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useRef } from 'react';

import './styles.scss';

/** Modal Login: use to login to your account.
 *
 * @returns {JSX}
 */
const LogModal = () => {
  const { isLogModalOpened, isLogFormValidated } = useSelector((state) => state.modals);

  const dispatch = useDispatch();

  const formRef = useRef(null);

  const handleNewAccountModal = () => {
    dispatch(toggleLoginModal());
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
              />
            </FloatingLabel>
          </Form.Group>
          {isLogFormValidated
              && (
              <Form.Text className="text-danger fw-2">
                email / mot de passe non valide.
              </Form.Text>
              )}
          <Button type="submit" className="mt-3" id="submitLoginBtn">Soumettre</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LogModal;
