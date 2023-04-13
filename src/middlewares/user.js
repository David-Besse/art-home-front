import axios from 'axios';
import { SUBMIT_LOGIN, saveAuthData } from '../actions/users';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        'http://localhost:3001/login',
        {
          email: store.getState().users.email,
          password: store.getState().users.password,
        },
      )
        .then((response) => {
          store.dispatch(saveAuthData(response.data.pseudo, response.data.token));
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
