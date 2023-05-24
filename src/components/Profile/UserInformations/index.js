import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

import {
  toggleProfileEditing,
} from 'src/actions/profile';
import {
  changeInputField,
  submitProfileUpdate,
  handleLoginOff,
  wipeUserData,
} from 'src/actions/users';
import { wipeData } from 'src/actions/exhibitions';
import { toggleAlertMessage, messageToShow } from 'src/actions/errorMessages';

import { removeFromLocalStorage, getFromLocalStorage } from 'src/utils/localStorage';

import './styles.scss';
import AvatarPicture from '../../../assets/images/avatar/avatar.png';

/* User informations */
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
  const { isProfileEditingActivated } = useSelector((state) => state.profile);
  const curState = useSelector((state) => ({
    email: state.users.email,
    nickname: state.users.nickname,
    lastName: state.users.lastName,
    firstName: state.users.firstName,
    birthday: state.users.birthday,
    presentation: state.users.presentation,
    avatar: state.users.avatar,
  }));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userFromLocalStorage = getFromLocalStorage('user-arthome');

  const updateProfile = () => dispatch(submitProfileUpdate());
  const logoutUser = () => {
    dispatch(handleLoginOff());
    dispatch(wipeUserData());
    dispatch(wipeData());
  };
  const changeField = (newValue, name) => dispatch(changeInputField(newValue, name));
  const handleProfilEditing = () => dispatch(toggleProfileEditing());

  const changedFields = (elOne, elTwo) => Object.keys(elOne).filter((key) => elOne[key] !== elTwo[key]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleProfilEditing();

    const result = changedFields(curState, userFromLocalStorage);

    if (result.length > 0 && result.includes('email')) {
      removeFromLocalStorage('user-arthome');
      updateProfile();
      dispatch(toggleAlertMessage());
      dispatch(messageToShow('warning', 'Votre identifiant a changé, veuillez vous reconnecter avec ce dernier.'));
      setTimeout(() => {
        navigate('/');
        logoutUser();
      }, 2600);
      clearTimeout();
    }
    else if (result.length > 0) {
      updateProfile();
    }
  };

  const convertDateToISOFormat = (dateString) => {
    let newDate = '';
    if (dateString !== '1900-01-01') {
      const [month, day, year] = dateString.split('/');
      newDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    else {
      newDate = dateString;
    }
    return newDate;
  };

  return (
    <section className="userInformations">

      <h2 className="mt-3 mb-3 text-center justify-content-center userBoxTitle fw-bolder">Mon Profil</h2>
      <Form onSubmit={handleSubmit} className="userBox">
        <div className="card p-2">
          <div className="row g-0">
            <div className="col-md-2 d-flex flex-column align-items-center justify-content-start">
              <img
                src={avatar !== '' ? avatar : AvatarPicture}
                className="img-fluid rounded img-avatar"
                alt="avatar"
              />
              {isProfileEditingActivated && (
                <Form.Group>
                  <Form.Control
                    placeholder={
                      avatar !== '' ? avatar : AvatarPicture
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
            <div className="col-md-8 my-3 my-md-0">
              <div className="card-body py-0">
                <p className="card-text fw-bold mb-0">
                  Pseudo :{' '}
                  {!isProfileEditingActivated && (
                    <span
                      className={
                        nickname === ''
                          ? 'text-muted fst-italic'
                          : 'fw-normal fst-italic'
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
                    <span className="fw-normal fst-italic">
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
                    <span className="fw-normal fst-italic">
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
                    <span className="fw-normal fst-italic">
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
                      className="fw-normal fst-italic"
                    >
                      { new Date(birthday).toLocaleDateString('fr') }
                    </span>
                  )}
                </p>
                {isProfileEditingActivated && (
                  <Form.Group>
                    <Form.Control
                      type="date"
                      id="inputBirthday"
                      locale="fr-FR"
                      value={convertDateToISOFormat(birthday)}
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
                          ? 'text-muted fst-italic'
                          : 'fw-normal fst-italic'
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
            <div className="col-md-2 text-end">
              {!isProfileEditingActivated && (
                <Button
                  variant="outline-secondary"
                  onClick={handleProfilEditing}
                  className="customButton"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                  </svg>
                </Button>
              )}
              {isProfileEditingActivated && (
                <Button variant="success" type="submit" className="customButton">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                  </svg>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default userInformations;
