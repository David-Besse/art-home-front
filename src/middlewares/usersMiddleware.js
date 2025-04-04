import { toggleAlertMessage, messageToShow } from 'src/actions/errorMessages';
import { saveUserExhibitions } from 'src/actions/exhibitions';

import axios from './Axios/axiosConf';
import {
  SUBMIT_LOGIN,
  saveAuthData,
  GET_USER_PROFILE,
  getUserProfile,
  saveUserData,
  SUBMIT_NEW_ACCOUNT,
  SUBMIT_PROFILE_UPDATE,
  wipeUserData,
  handleLoginOff,
} from '../actions/users';
import {
  changeInputFieldsValidation,
  toggleLoginModal,
  toggleNewAccountModal,
} from '../actions/modals';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorage';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(
          '/token',
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
          }, 3000);
        });
      break;
    case GET_USER_PROFILE:
      axios
        .get('/secure/users/profile', {
          headers: {
            Authorization: `Bearer ${action.userToken}`,
          },
        })
        .then((res) => {
          store.dispatch(saveUserData(res.data));
          store.dispatch(saveUserExhibitions(res.data.exhibitions));
          const { userExhibitions } = store.getState().exhibitions;
          const userData = { ...store.getState().users, userExhibitions };
          saveToLocalStorage('user-arthome', userData);
        })
        .catch(() => {
          store.dispatch(handleLoginOff());
          store.dispatch(wipeUserData());
          store.dispatch(toggleAlertMessage());
          store.dispatch(
            messageToShow(
              'warning',
              'Une erreur est survenue lors de la récupération, si ce problème persiste, veuillez nous contacter. Merci',
            ),
          );
        });
      break;
    case SUBMIT_NEW_ACCOUNT:
      axios
        .post('/users/new', {
          email: action.payload.email,
          password: action.payload.password,
          lastname: action.payload.lastName,
          firstname: action.payload.firstName,
          roles: [`${action.payload.role}`],
        })
        .then(() => {
          action.newAccountForm.current.reset();

          store.dispatch(toggleNewAccountModal());
          store.dispatch(toggleAlertMessage());
          store.dispatch(messageToShow('success', 'Le compte a été créé !'));
        })
        .catch((error) => {
          action.newAccountForm.current.reset();
          store.dispatch(toggleNewAccountModal());
          if (error.response.data.status === 500) {
            store.dispatch(toggleAlertMessage());
            store.dispatch(
              messageToShow('warning', 'Erreur interne du serveur.'),
            );
          }
          else {
            const errorMessageObj = error.response.data;
            const errorMessageKeys = Object.keys(errorMessageObj);
            const errorMessageName = errorMessageKeys[0];
            store.dispatch(toggleAlertMessage());
            store.dispatch(
              toggleAlertMessage(
                'warning',
                `${errorMessageObj[errorMessageName]}`,
              ),
            );
          }
        });
      break;
    case SUBMIT_PROFILE_UPDATE:
      axios
        .patch(
          '/secure/users/edit',
          {
            email: store.getState().users.email,
            lastname: store.getState().users.lastName,
            firstname: store.getState().users.firstName,
            nickname: store.getState().users.nickname,
            avatar: store.getState().users.avatar,
            dateOfBirth: store.getState().users.birthday,
            presentation: store.getState().users.presentation,
            favorites: store.getState().users.favorites,
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().users.token}`,
              'Content-Type': 'application/json',
            },
          },
        )
        .then(() => {
          let dataFromLocalStorage = getFromLocalStorage('user-arthome');
          const { favorites } = store.getState().users;

          if (dataFromLocalStorage !== null) {
            // Compare two arrays by iterating over their elements
            const compareArrays = dataFromLocalStorage.favorites.reduce(
              (acc, value) => {
                const index = favorites.indexOf(value);
                return acc && index !== -1;
              },
              true,
            );

            if (
              compareArrays
              && favorites.length === dataFromLocalStorage.favorites.length
            ) {
              store.dispatch(toggleAlertMessage());
              store.dispatch(
                messageToShow('success', 'Vos données ont été mises à jour.'),
              );
            }
            dataFromLocalStorage = store.getState().users;
            saveToLocalStorage('user-arthome', dataFromLocalStorage);
          }
        })
        .catch(() => {
          store.dispatch(toggleAlertMessage());
          store.dispatch(
            messageToShow(
              'warning',
              'Une erreur est survenue lors de la mise à jour, si ce problème persiste, veuillez nous contacter. Merci',
            ),
          );
        });
      break;
    default:
  }

  next(action);
};

export default user;
