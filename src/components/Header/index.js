import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

import { handleLoginOff, wipeUserData } from 'src/actions/users';
import { toggleLoginModal, toggleNewAccountModal } from 'src/actions/modals';
import { wipeData } from 'src/actions/exhibitions';

import MessageAlert from 'src/components/MessageAlert';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

import { removeFromLocalStorage } from 'src/utils/localStorage';

import LogModal from './LogModal';
import NewAccountModal from './NewAccountModal';

import './styles.scss';
import Logo from '../../assets/images/logo/logo.png';

// header
const Header = () => {
  const { isLogModalOpened, isNewAccountModalOpened } = useSelector((state) => state.modals);
  const { logged, nickname, firstName } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // action for disconnection
  const handleLogout = () => {
    // we return to the home page
    navigate('/');

    // we delete all user data from state, except for the homepage
    dispatch(handleLoginOff());
    dispatch(wipeUserData());
    dispatch(wipeData());
    removeFromLocalStorage('user-arthome');
  };

  // triggers the display of the login modal
  const handleLoginModal = () => dispatch(toggleLoginModal());
  // triggers the display of the new account modal
  const handleNewAccountModal = () => dispatch(toggleNewAccountModal());

  return (
    <header>
      {/* component that displays a confirmation or error message */}
      <MessageAlert />

      <Navbar collapseOnSelect expand="lg" className="fixed-top navbar">
        <Container>

          {/* displays the logo and the title of the website */}
          <div className="d-flex align-items-center">
            <Image src={Logo} alt="logo art at home" width="48" height="40" className="me-2 imageLogo" />
            <LinkContainer to="/">
              <Navbar.Brand className="navbar-brand">Art@home</Navbar.Brand>
            </LinkContainer>
          </div>
          {nickname !== ''
            && (
            <Navbar.Text className="d-lg-none">
              {nickname}
            </Navbar.Text>
            )}

          {/* replaces the menu with a burger button */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* navigation menu in desktop view (min-height: 1024px) */}
          <Navbar.Collapse id="responsive-navbar-nav">

            {/* displays links to website pages */}
            <Nav className="me-auto">
              <LinkContainer to="/expositions">
                <Nav.Link eventKey={1}>Expositions</Nav.Link>
              </LinkContainer>

              {/* Profil page link visible only for logged users */}
              {logged
                && (
                <LinkContainer to="/profil">
                  <Nav.Link eventKey={2}>Profil</Nav.Link>
                </LinkContainer>
                )}

              {/* link to CGU page */}
              <LinkContainer to="/mentions-legales" className="d-lg-none">
                <Nav.Link eventKey={3}>Mentions Légales</Nav.Link>
              </LinkContainer>

              {/* link to CGU page */}
              <LinkContainer to="/CGU" className="d-lg-none">
                <Nav.Link eventKey={4}>CGU</Nav.Link>
              </LinkContainer>

              {/* link to contact page */}
              <LinkContainer to="/contact" className="d-lg-none">
                <Nav.Link eventKey={5}>Contact</Nav.Link>
              </LinkContainer>
            </Nav>

            {/* displays links to login and create an account */}
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
                  Bienvenue {nickname !== '' ? nickname : firstName}
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

      {/* modal to login */}
      <LogModal show={isLogModalOpened} />

      {/* modal to create en account */}
      <NewAccountModal show={isNewAccountModalOpened} />
    </header>
  );
};

export default Header;
