import { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

/**
 * Modal Login
 * @param {object} props
 * @param {boolean} props.show - determines whether the modal is shown or not
 * @param {function} props.onHide - function to hide the modal
 * @returns {JSX.Element}
 */
const LogModal = ({ show, onHide }) => (
  <Modal
    show={show}
    onHide={onHide}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Se connecter
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Adresse mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Soumettre</Button>
    </Modal.Footer>
  </Modal>
);

LogModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

/**
 * Navbar
 * @returns {JSX.Element}
 */
const Header = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/"><Navbar.Brand>Art@home</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/expositions"><Nav.Link eventKey={1}>Expositions</Nav.Link></LinkContainer>
              <LinkContainer to="/profil"><Nav.Link eventKey={2}>Profil</Nav.Link></LinkContainer>
              <LinkContainer to="/mentions-legales"><Nav.Link eventKey={3}>Mentions Légales</Nav.Link></LinkContainer>
              <LinkContainer to="/contact"><Nav.Link eventKey={4}>Contact</Nav.Link></LinkContainer>
              <LinkContainer to="/backoffice"><Nav.Link eventKey={5}>Backoffice</Nav.Link></LinkContainer>
            </Nav>
            <Nav>
              <Nav.Link eventKey={6}>Créer un compte</Nav.Link>
              <Nav.Link eventKey={7} onClick={() => setModalState(true)}>Se connecter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LogModal show={modalState} onHide={() => setModalState(false)} />
    </>
  );
};

export default Header;
