import { useSelector, useDispatch } from 'react-redux';
import { handleLoginOff } from 'src/actions/users';
import { toggleLoginModal, toggleNewAccountModal } from 'src/actions/modals';
import { wipeData } from 'src/actions/exhibitions';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import LogModal from './LogModal';
import NewAccountModal from './NewAccountModal';

import './styles.scss';
import Logo from '../../../public/images/logo/logo.png';

/**
 * Navbar
 * @returns {JSX.Element}
 */
const Header = () => {
  const { isLogModalOpened, isNewAccountModalOpened } = useSelector((state) => state.modals);
  const { logged, nickname, role } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    dispatch(handleLoginOff());
    dispatch(wipeData());
  };
  const handleLoginModal = () => dispatch(toggleLoginModal());
  const handleNewAccountModal = () => dispatch(toggleNewAccountModal());

  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <div className="d-flex align-items-center">
            <Image src={Logo} alt="logo art at home" className="me-2 imageLogo" />
            <LinkContainer to="/">
              <Navbar.Brand>Art@home</Navbar.Brand>
            </LinkContainer>
          </div>
          {nickname !== ''
            && (
            <Navbar.Text className="d-lg-none">
              {nickname}
            </Navbar.Text>
            )}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/expositions">
                <Nav.Link eventKey={1}>Expositions</Nav.Link>
              </LinkContainer>
              {logged
                && (
                <LinkContainer to="/profil">
                  <Nav.Link eventKey={2}>Profil</Nav.Link>
                </LinkContainer>
                )}
              <LinkContainer to="/mentions-legales" className="d-lg-none">
                <Nav.Link eventKey={3}>Mentions Légales</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact" className="d-lg-none">
                <Nav.Link eventKey={4}>Contact</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav>
              {!logged
                && (
                <Nav.Link
                  eventKey={6}
                  onClick={handleNewAccountModal}
                >Créer un compte
                </Nav.Link>
                )}

              {logged && (
              <Nav.Link eventKey={7} onClick={handleLogout} className="d-flex align-items-center">
                <Navbar.Text className="d-none d-lg-flex me-2 welcomeMessage">
                  Bienvenue {role} {nickname}
                </Navbar.Text>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                </svg>
              </Nav.Link>
              )}

              {!logged && (
              <Nav.Link
                eventKey={7}
                onClick={handleLoginModal}
              >Se connecter
              </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LogModal show={isLogModalOpened} />

      <NewAccountModal show={isNewAccountModalOpened} />
    </header>
  );
};

export default Header;
