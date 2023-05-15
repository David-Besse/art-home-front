import axios from 'axios';
import {
  SUBMIT_LOGIN,
  saveAuthData,
  GET_USER_PROFILE,
  getUserProfile,
  saveUserData,
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
  toggleInformationModal,
} from '../actions/modals';
import { saveToLocalStorage } from '../utils/localStorage';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(
          'https://apiroute.webshappers.com/api/login_check',
          {
            username: action.payload.email,
            password: action.payload.password,
          },
        )
        .then((response) => {
          store.dispatch(saveAuthData(response.data.token));
          store.dispatch(getUserProfile(response.data.token));
          action.loginForm.current.reset();
          store.dispatch(changeInputFieldsValidation(false));
          store.dispatch(toggleLoginModal());
        })
        .catch(() => {
          action.loginForm.current.reset();
          store.dispatch(changeInputFieldsValidation(true));
          setTimeout(() => {
            store.dispatch(changeInputFieldsValidation(false));
          }, 2000);
        });
      break;
    case GET_USER_PROFILE:
      axios
        .get(
          'https://apiroute.webshappers.com/api/secure/users/profile',
          {
            headers: {
              Authorization: `Bearer ${action.userToken}`,
            },
          },
        )
        .then((res) => {
          store.dispatch(saveUserData(res.data));
          saveToLocalStorage('user-arthome', store.getState().users);
        })
        .catch(() => {
        });
      break;
    case SUBMIT_NEW_ACCOUNT:
      axios
        .post('https://apiroute.webshappers.com/api/users/new', {
          email: action.payload.email,
          password: action.payload.password,
          lastname: action.payload.lastName,
          firstname: action.payload.firstName,
          roles: [`${action.payload.role}`],
        })
        .then(() => {
          action.newAccountForm.current.reset();

          store.dispatch(toggleNewAccountModal());
          store.dispatch(showMessageInformation(false, 'Le compte a été créé !'));
          store.dispatch(toggleInformationModal());
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
          store.dispatch(toggleInformationModal());
        });
      break;
    case SUBMIT_PROFILE_UPDATE:
      axios
        .patch(
          'https://apiroute.webshappers.com/api/secure/users/edit',
          {
            email: store.getState().users.email,
            lastname: store.getState().users.lastName,
            firstname: store.getState().users.firstName,
            nickname: store.getState().users.nickname,
            avatar: store.getState().users.avatar,
            birthday: new Date(store.getState().users.birthday),
            presentation: store.getState().users.presentation,
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().users.token}`,
              'Content-Type': 'application/json',
            },
          },
        )
        .then(() => {
          saveToLocalStorage('user-arthome', store.getState().users);
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    case SUBMIT_NEW_EXHIBITION:
      axios
        .post(
          'https://apiroute.webshappers.com/api/secure/exhibitions/new',
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
