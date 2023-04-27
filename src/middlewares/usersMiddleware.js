import axios from 'axios';
import {
  SUBMIT_LOGIN,
  saveAuthData,
  saveUserData,
  resetFormFields,
  SUBMIT_NEW_ACCOUNT,
  SUBMIT_PROFILE_UPDATE,
  SUBMIT_NEW_EXHIBITION,
  saveUserExhibitionsList,
} from '../actions/users';
import {
  changeInputFieldsValidation,
  toggleLoginModal,
  showMessageInformation,
  toggleNewAccountModal,
  toggleAccountCreatedModal,
  toggleTermOfUseBox,
} from '../actions/modals';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(
          'http://aurelia-perrier.vpnuser.lan:8000/api/login_check',
          {
            username: action.payload.email,
            password: action.payload.password,
          },
        )
        .then((response) => {
          store.dispatch(saveAuthData(response.data.token));
          action.loginForm.current.reset();
          store.dispatch(changeInputFieldsValidation(false));
          store.dispatch(toggleLoginModal());
          axios
            .get(
              'http://aurelia-perrier.vpnuser.lan:8000/api/secure/users/profile',
              {
                headers: {
                  Authorization: `Bearer ${store.getState().users.token}`,
                },
              },
            )
            .then((res) => {
              store.dispatch(saveUserData(res.data));
            })
            .catch((error) => {
              console.warn('Une erreur est survenu lors de la récupération du token', error);
            });
        })
        .catch(() => {
          action.loginForm.current.reset();
          store.dispatch(changeInputFieldsValidation(true));
          setTimeout(() => {
            store.dispatch(changeInputFieldsValidation(false));
          }, 2000);
        });
      break;
    case SUBMIT_NEW_ACCOUNT:
      axios
        .post('http://aurelia-perrier.vpnuser.lan:8000/api/users/new', {
          email: action.payload.email,
          password: action.payload.password,
          lastname: action.payload.lastName,
          firstname: action.payload.firstName,
          roles: ['ROLE_ARTIST'],
        })
        .then(() => {
          action.newAccountForm.current.reset();
          store.dispatch(toggleNewAccountModal());
          store.dispatch(showMessageInformation(false, 'Le compte a été créé !'));
          store.dispatch(toggleAccountCreatedModal());
        })
        .catch((error) => {
          console.warn(error);
          action.newAccountForm.current.reset();
          store.dispatch(toggleNewAccountModal());

          if (error.response.data.status === 500) {
            store.dispatch(showMessageInformation(true, 'Erreur interne du serveur.'));
          }
          else {
            const errorMessageObj = error.response.data;
            const errorMessageKeys = Object.keys(errorMessageObj);
            const errorMessageName = errorMessageKeys[0];
            store.dispatch(showMessageInformation(true, `${errorMessageObj[errorMessageName]}`));
          }

          store.dispatch(toggleAccountCreatedModal());
        });
      break;
    case SUBMIT_PROFILE_UPDATE:
      axios
        .patch(
          'http://aurelia-perrier.vpnuser.lan:8000/api/secure/users/edit',
          {
            email: store.getState().users.email,
            lastname: store.getState().users.lastName,
            firstname: store.getState().users.firstName,
            nickname: store.getState().users.nickname,
            avatar: store.getState().users.avatar,
            dateOfBirth: new Date(store.getState().users.birthday),
            presentation: store.getState().users.presentation,
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().users.token}`,
              'Content-Type': 'application/json',
            },
          },
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    case SUBMIT_NEW_EXHIBITION:
      axios
        .post(
          'http://aurelia-perrier.vpnuser.lan:8000/api/secure/exhibitions/new',
          {
            title: store.getState().users.exhibitionName,
            description: store.getState().users.exhibitionDescription,
            artist: '',
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().users.token}`,
              'Content-Type': 'application/json',
            },
          },
        )
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserExhibitionsList(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:
  }

  next(action);
};

export default user;
