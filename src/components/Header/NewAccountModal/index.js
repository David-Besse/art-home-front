import { useSelector, useDispatch } from 'react-redux';
import { changeLoginField } from 'src/actions/users';
import { changeNewAccountModalSate } from 'src/actions/modals';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

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
  const { isNewAccountModalOpened } = useSelector((state) => state.modals);

  const dispatch = useDispatch();
  const changeField = (newValue, name) => dispatch(changeLoginField(newValue, name));
  const handleLogModal = () => dispatch(changeNewAccountModalSate());

  /**
   * local 'state' management for field validation
   */
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  /** ****************************************** */

  return (
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
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
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
                  Votre prénom est manquant.
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
                Votre email est manquant.
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
                Votre mot de passe est manquant.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Vous êtes d'accord avec nos conditions d'utilisations et vous acceptez que la terre s'arrêtera de tourner un jour..."
              feedback="Bon, vous devez tout de même cocher la case."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Soumettre</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewAccountModal;
