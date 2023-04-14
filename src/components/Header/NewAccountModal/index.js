import { useSelector, useDispatch } from 'react-redux';
import { changeLoginField, submitLogin } from 'src/actions/users';
import { changeNewAccountModalSate } from 'src/actions/modals';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

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
    dateOfBirth,
    description,
    avatar,
  } = useSelector((state) => state.users);
  const { isNewAccountModalOpened } = useSelector((state) => state.modals);

  const dispatch = useDispatch();
  const changeField = (newValue, name) => dispatch(changeLoginField(newValue, name));
  const handleLogModal = () => dispatch(changeNewAccountModalSate());

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitLogin());
    handleLogModal();
  };

  return (
    <Modal
      show={isNewAccountModalOpened}
      onHide={handleLogModal}
      size="lg"
      aria-labelledby="new-account-modal"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Formulaire d'inscription</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <Form.Group className="mb-3" controlId="newAccountForm">
            <FloatingLabel controlId="inputFirstName" label="Prénom" className="mb-3">
              <Form.Control
                type="text"
                autoFocus
                placeholder="Prénom"
                value={firstName}
                onChange={(evt) => {
                  changeField(evt.target.value, 'firstName');
                }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="inputLastName" label="Nom" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nom"
                value={lastName}
                onChange={(evt) => {
                  changeField(evt.target.value, 'lastName');
                }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="inputDateOfBirth" label="Date de naissance" className="mb-3">
              <Form.Control
                type="date"
                placeholder="Date de naissance"
                value={dateOfBirth}
                onChange={(evt) => {
                  changeField(evt.target.value, 'dateOfBirth');
                }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="inputEmail" label="Adresse mail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Adresse mail"
                value={email}
                onChange={(evt) => {
                  changeField(evt.target.value, 'email');
                }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="inputPassword" label="Mot de passe" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(evt) => {
                  changeField(evt.target.value, 'password');
                }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="inputAvatar" label="Avatar" className="mb-3">
              <Form.Control
                type="text"
                placeholder="URL de ton avatar"
                value={avatar}
                onChange={(evt) => {
                  changeField(evt.target.value, 'avatar');
                }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="inputDescription" label="Description" className="mb-3">
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Description"
                value={description}
                onChange={(evt) => {
                  changeField(evt.target.value, 'description');
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

export default NewAccountModal;
