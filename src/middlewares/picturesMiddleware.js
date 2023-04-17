import axios from 'axios';
import { fetchExhibitions, FETCH_EXHIBITIONS, saveExhibitions } from '../actions/exhibitions';

// Fetching the list of exhibition and putting them into the state

const picturesMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case FETCH_PICTURES:
      axios.get('') // test with a js server
        .then((response) => {
          console.log(response);

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
