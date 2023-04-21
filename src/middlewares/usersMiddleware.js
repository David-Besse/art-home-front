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
  changeLoginFieldsValidation,
  changeLoginModalSate,
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
          // 'http://localhost:3001/login',
          'http://mathieu-zagar.vpnuser.lan:8000/api/login_check',
          {
            username: store.getState().users.email,
            password: store.getState().users.password,
          },
        )
        .then((response) => {
          store.dispatch(saveAuthData(response.data.token));

          store.dispatch(resetFormFields());
          store.dispatch(changeLoginModalSate());
          store.dispatch(changeLoginFieldsValidation(false));

          // test en local //
          // store.dispatch(saveUserData(response.data));
          // test en local //

          axios
            .get(
              'http://mathieu-zagar.vpnuser.lan:8000/api/secure/users/profile',
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
              console.warn(error);
            });
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(resetFormFields());
          store.dispatch(changeLoginFieldsValidation(true));
        });
      break;
    case SUBMIT_NEW_ACCOUNT:
      axios
        .post('http://mathieu-zagar.vpnuser.lan:8000/api/users/new', {
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
        .put(
          'http://mathieu-zagar.vpnuser.lan:8000/api/secure/users/edit',
          {
            email: store.getState().users.email,
            lastname: store.getState().users.lastName,
            firstname: store.getState().users.firstName,
            nickname: store.getState().users.nickname,
            avatar: store.getState().users.avatar,
            dateOfBirth: store.getState().users.birthday,
            presentation: store.getState().users.presentation,
            password: ' ',
            roles: ['ROLE_ARTIST'],
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
        .put(
          'http://mathieu-zagar.vpnuser.lan:8000/api/secure/exhibitions/new',
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
