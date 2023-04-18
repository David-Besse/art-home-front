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
      axios
        .post(
          'http://aurelia-perrier.vpnuser.lan:8000/api/login_check',
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
              console.log(res.data);
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
        .post(
          'http://mathieu-zagar.vpnuser.lan:8000/api/users/new',
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
