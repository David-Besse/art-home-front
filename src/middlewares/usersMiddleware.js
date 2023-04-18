import axios from 'axios';
import {
  SUBMIT_LOGIN,
  saveAuthData,
  saveUserData,
  resetFormFields,
  SUBMIT_NEW_ACCOUNT,
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
      axios.post(
        'http://localhost:3001/login',
        {
          username: store.getState().users.email,
          password: store.getState().users.password,
        },
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveAuthData(
            response.data.token,
          ));

          // * pour les tests en local
          store.dispatch(saveUserData(
            response.data.role,
            response.data.nickname,
          ));
          //* *****************************

          store.dispatch(resetFormFields());
          store.dispatch(changeLoginModalSate());
          store.dispatch(changeLoginFieldsValidation(false));
          // axios.get(
          //   'http://localhost:3001/login',
          //   {
          //     headers: {
          //       Authorization: `Bearer ${store.getState().users.token}`,
          //     },
          //   },
          // )
          //   .then((res) => {
          //     store.dispatch(saveUserData(
          //       res.data.username,
          //       res.data.role,
          //     ));
          //   })
          //   .catch((error) => {
          //     console.warn(error);
          //   });
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(resetFormFields());
          store.dispatch(changeLoginFieldsValidation(true));
        });
      break;
    case SUBMIT_NEW_ACCOUNT:
      axios.post(
        // 'http://localhost:3001/create-account',
        'http://aurelia-perrier.vpnuser.lan/Apotheose/projet-12-art-at-home-back/public/users/new',
        {
          email: store.getState().users.email,
          password: store.getState().users.password,
          lastname: store.getState().users.lastName,
          firstname: store.getState().users.firstName,
          roles: ['ROLE_ARTIST'],
        },
      )
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
    default:
  }

  next(action);
};

export default user;
