import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Form, Alert } from 'react-bootstrap';
import {
  toggleProfileEditing,
  toggleAlertAfterEmailModification,
} from 'src/actions/profile';
import {
  changeLoginField,
  submitProfileUpdate,
  handleLoginOff,
} from 'src/actions/users';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

const userInformations = () => {
  const {
    email,
    nickname,
    lastName,
    firstName,
    birthday,
    presentation,
    avatar,
  } = useSelector((state) => state.users);
  const { isProfileEditingActivated, showAlert } = useSelector(
    (state) => state.profile,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const prevEmail = useRef(email);

  useEffect(() => {
    prevEmail.current = email;
  }, []);

  const updateProfile = () => dispatch(submitProfileUpdate());
  const logoutUser = () => dispatch(handleLoginOff());
  const changeField = (newValue, name) => dispatch(changeLoginField(newValue, name));
  const handleAlert = () => dispatch(toggleAlertAfterEmailModification());
  const handleProfilEditing = () => dispatch(toggleProfileEditing());

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateProfile();
    handleProfilEditing();
    if (prevEmail.current !== email) {
      handleAlert();
    }
  };

  //  useEffect hook is used to handle the alert message
  useEffect(() => {
    let timeoutId;
    if (showAlert) {
      timeoutId = setTimeout(() => {
        handleAlert();
        navigate('/');
        logoutUser();
      }, 3500);
    }
    return () => clearTimeout(timeoutId); // clean up the timer
  }, [showAlert]);

  return (
    <section className="my-3 userInformations">
      <Alert
        variant="warning"
        show={showAlert}
        onClose={handleAlert}
        dismissible
      >
        Information: suite à la modification de vos identifiants de connexion, vous allez être déconnecté.
      </Alert>
      <h2 className="mt-3 mb-3 text-center justify-content-center userBoxTitle">Mon Profil</h2>
      <Form onSubmit={handleSubmit} className="userBox">
        <div className="card p-2">
          <div className="row g-0">
            <div className="col-lg-2 d-flex flex-column align-items-center justify-content-start">
              <img
                src={avatar !== '' ? 'images/avatar/avatar.png' : 'images/avatar/avatar.png'}
                className="img-fluid rounded-start img-avatar"
                alt="avatar"
              />
              {isProfileEditingActivated && (
                <Form.Group>
                  <Form.Control
                    placeholder={
                      avatar !== '' ? avatar : 'images/avatar/avatar.png'
                    }
                    type="text"
                    className="mt-2"
                    id="inputAvatar"
                    value={avatar}
                    onChange={(evt) => {
                      changeField(evt.target.value, 'avatar');
                    }}
                  />
                </Form.Group>
              )}
            </div>
            <div className="col-lg-8">
              <div className="card-body py-0">
                <p className="card-text fw-bold mb-0">
                  Pseudo :{' '}
                  {!isProfileEditingActivated && (
                    <span
                      className={
                        nickname === ''
                          ? 'fw-normal text-muted fst-italic fw-lighter'
                          : 'fw-normal fst-italic fw-lighter'
                      }
                    >
                      {nickname === '' ? 'non communiqué' : nickname}
                    </span>
                  )}
                </p>
                {isProfileEditingActivated && (
                  <Form.Group>
                    <Form.Control
                      placeholder={nickname}
                      type="text"
                      id="inputNickname"
                      value={nickname}
                      onChange={(evt) => {
                        changeField(evt.target.value, 'nickname');
                      }}
                    />
                  </Form.Group>
                )}
                <p className="card-text fw-bold mb-0">
                  Nom :{' '}
                  {!isProfileEditingActivated && (
                    <span className="fw-normal fst-italic fw-lighter">
                      {lastName}
                    </span>
                  )}
                </p>
                {isProfileEditingActivated && (
                  <Form.Group>
                    <Form.Control
                      placeholder={lastName}
                      type="text"
                      id="inputLastName"
                      value={lastName}
                      onChange={(evt) => {
                        changeField(evt.target.value, 'lastName');
                      }}
                    />
                  </Form.Group>
                )}

                <p className="card-text fw-bold mb-0">
                  Prénom :{' '}
                  {!isProfileEditingActivated && (
                    <span className="fw-normal fst-italic fw-lighter">
                      {firstName}
                    </span>
                  )}
                </p>
                {isProfileEditingActivated && (
                  <Form.Group>
                    <Form.Control
                      placeholder={firstName}
                      type="text"
                      id="inputFirstName"
                      value={firstName}
                      onChange={(evt) => {
                        changeField(evt.target.value, 'firstName');
                      }}
                    />
                  </Form.Group>
                )}

                <p className="card-text fw-bold mb-0">
                  Email :{' '}
                  {!isProfileEditingActivated && (
                    <span className="fw-normal fst-italic fw-lighter">
                      {email}
                    </span>
                  )}
                </p>
                {isProfileEditingActivated && (
                  <Form.Group>
                    <Form.Control
                      placeholder={email}
                      type="email"
                      id="inputEmail"
                      value={email}
                      onChange={(evt) => {
                        changeField(evt.target.value, 'email');
                      }}
                    />
                  </Form.Group>
                )}

                <p className="card-text fw-bold mb-0">
                  Date de naissance :{' '}
                  {!isProfileEditingActivated && (
                    <span
                      className={
                        birthday === ''
                          ? 'fw-normal text-muted fst-italic fw-lighter'
                          : 'fw-normal fst-italic fw-lighter'
                      }
                    >
                      { birthday }
                    </span>
                  )}
                </p>
                {isProfileEditingActivated && (
                  <Form.Group>
                    <Form.Control
                      type="date"
                      id="inputBirthday"
                      value={birthday === '' ? '0000-00-00' : birthday}
                      onChange={(evt) => {
                        changeField(evt.target.value, 'birthday');
                      }}
                    />
                  </Form.Group>
                )}

                <p className="card-text fw-bold mb-0">
                  Ma présentation :{' '}
                  {!isProfileEditingActivated && (
                    <span
                      className={
                        presentation === ''
                          ? 'fw-normal text-muted fst-italic fw-lighter'
                          : 'fw-normal fst-italic fw-lighter'
                      }
                    >
                      {presentation === '' ? 'non communiqué' : presentation}
                    </span>
                  )}
                </p>
                {isProfileEditingActivated && (
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder={presentation}
                      className="mb-3"
                      id="inputPresentation"
                      value={presentation}
                      onChange={(evt) => {
                        changeField(evt.target.value, 'presentation');
                      }}
                    />
                  </Form.Group>
                )}
              </div>
            </div>
            <div className="col-lg-2 text-end">
              {!isProfileEditingActivated && (
                <Button
                  variant="outline-secondary"
                  onClick={handleProfilEditing}
                >
                  Editer
                </Button>
              )}
              {isProfileEditingActivated && (
                <Button type="submit">Valider</Button>
              )}
            </div>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default userInformations;
