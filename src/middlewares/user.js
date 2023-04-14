import axios from 'axios';
import { SUBMIT_LOGIN, saveAuthData, saveUserData } from '../actions/users';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        'http://aurelia-perrier.vpnuser.lan/Apotheose/projet-12-art-at-home-back/public/api/login_check',
        {
          username: store.getState().users.email,
          password: store.getState().users.password,
        },
      )
        .then((response) => {
          store.dispatch(saveAuthData(
            response.data.token,
          ));
          axios.get(
            'http://aurelia-perrier.vpnuser.lan/Apotheose/projet-12-art-at-home-back/public/api/users/informations',
            {
              headers: {
                Authorization: `Bearer ${store.getState().users.token}`,
              },
            },
          )
            .then((res) => {
              store.dispatch(saveUserData(
                res.data.nickname,
                res.data.roles,
              ));
            })
            .catch((error) => {
              console.warn(error);
            });
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
