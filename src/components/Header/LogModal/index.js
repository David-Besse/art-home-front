import { useSelector, useDispatch } from 'react-redux';
import { changeLoginField, submitLogin } from 'src/actions/users';
import { changeLoginModalSate } from 'src/actions/modals';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

/**
 * Modal Login
 * @returns {JSX.Element}
 */
const LogModal = () => {
  const { email, password } = useSelector((state) => state.users);
  const { isLogModalOpened } = useSelector((state) => state.modals);

  const dispatch = useDispatch();
  const changeField = (newValue, name) => dispatch(changeLoginField(newValue, name));
  const handleLogModal = () => dispatch(changeLoginModalSate());

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitLogin());
    handleLogModal();
  };

  return (
    <Modal
      show={isLogModalOpened}
      onHide={handleLogModal}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Se connecter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <Form.Group className="mb-3" controlId="loginForm">
            <FloatingLabel controlId="inputLogin" label="Adresse mail" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                autoFocus
                placeholder="Adresse mail"
                value={email}
                onChange={(evt) => {
                  changeField(evt.target.value, 'email');
                }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="inputPassword" label="Mot de passe">
              <Form.Control
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(evt) => {
                  changeField(evt.target.value, 'password');
                }}
              />
            </FloatingLabel>
          </Form.Group>
          <Button type="submit">Soumettre</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LogModal;
