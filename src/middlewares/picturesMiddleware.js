import axios from 'axios';
import { FETCH_PICTURES, savePictures } from '../actions/pictures';

// Fetching the list of pictures included in one exhibiton and putting them into the state

const picturesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PICTURES:
      axios.get('http://aurelia-perrier-server.eddi.cloud/projet-12-art-at-home-back/public/api/exhibitions') // test with a js server
        .then((response) => {
          store.dispatch(savePictures(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:
  }
  next(action);
};

export default picturesMiddleware;
