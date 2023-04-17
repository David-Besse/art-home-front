import { useSelector, useDispatch } from 'react-redux';
import { changeLoginField, submitLogin } from 'src/actions/users';
import { changeLoginModalSate, changeLoginFieldsValidation } from 'src/actions/modals';
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
  const { isLogModalOpened, isLogFormValidated } = useSelector((state) => state.modals);

  const dispatch = useDispatch();
  const changeField = (newValue, name) => dispatch(changeLoginField(newValue, name));
  const handleLogModal = () => {
    dispatch(changeLoginModalSate());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      dispatch(changeLoginFieldsValidation(true));
    }
    else {
      dispatch(submitLogin());
    }
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
        <Form noValidate validated={isLogFormValidated} onSubmit={handleSubmit} className="text-center">
          <Form.Group className="mb-3" controlId="inputLogin">
            <FloatingLabel label="Adresse mail" className="mb-3">
              <Form.Control
                type="email"
                autoFocus
                required
                placeholder="Adresse mail"
                value={email}
                onChange={(evt) => {
                  changeField(evt.target.value, 'email');
                }}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputPassword">
            <FloatingLabel label="Mot de passe">
              <Form.Control
                type="password"
                required
                placeholder="Mot de passe"
                value={password}
                onChange={(evt) => {
                  changeField(evt.target.value, 'password');
                }}
              />
              <Form.Control.Feedback type="invalid">
                email / mot de passe non valide.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Button type="submit">Soumettre</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LogModal;
