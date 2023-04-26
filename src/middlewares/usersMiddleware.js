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
  toggleLoginModalSate,
  changeNewAccountFieldsValidation,
  changeNewAccountModalSate,
  toggleNewAccountModalSate,
  toggleTermOfUseBox,
} from '../actions/modals';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(
          'http://mathieuzagar-server.eddi.cloud/projet-12-art-at-home-back/public/api/login_check',
          {
            username: action.payload.email,
            password: action.payload.password,
          },
        )
        .then((response) => {
          store.dispatch(saveAuthData(response.data.token));
          action.loginForm.current.reset();
          store.dispatch(changeInputFieldsValidation(false));
          store.dispatch(toggleLoginModalSate());
          axios
            .get(
              'http://mathieuzagar-server.eddi.cloud/projet-12-art-at-home-back/public/api/secure/users/profile',
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
        .post('http://mathieuzagar-server.eddi.cloud/projet-12-art-at-home-back/public/api/users/new', {
          email: store.getState().users.email,
          password: store.getState().users.password,
          lastname: store.getState().users.lastName,
          firstname: store.getState().users.firstName,
          roles: ['ROLE_ARTIST'],
        })
        .then((response) => {
          console.log(response);
          store.dispatch(changeNewAccountModalSate());
          store.dispatch(resetFormFields());
          store.dispatch(toggleTermOfUseBox());
          store.dispatch(changeNewAccountFieldsValidation(false));
          store.dispatch(toggleNewAccountModalSate());
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(changeNewAccountModalSate());
          store.dispatch(resetFormFields());
          store.dispatch(toggleTermOfUseBox());
          store.dispatch(changeNewAccountFieldsValidation(true));
          store.dispatch(toggleNewAccountModalSate());
        });
      break;
    case SUBMIT_PROFILE_UPDATE:
      axios
        .patch(
          'http://mathieuzagar-server.eddi.cloud/projet-12-art-at-home-back/public/api/secure/users/edit',
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
          'http://mathieuzagar-server.eddi.cloud/projet-12-art-at-home-back/public/api/secure/exhibitions/new',
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
