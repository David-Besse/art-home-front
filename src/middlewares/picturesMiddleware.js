import axios from 'axios';
import { FETCH_PICTURES, savePictures } from '../actions/pictures';

// Fetching the list of pictures included in one exhibiton and putting them into the state

const picturesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PICTURES:
      axios.get('http://localhost:3001/pictures') // test with a js server
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
