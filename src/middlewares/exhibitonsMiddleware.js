import axios from 'axios';
import { fetchExhibitons, FETCH_EXHIBITIONS, saveExhibitions } from '../actions/exhibitions';

// Fetching the list of exhibition and putting them into the state

const exhibitonsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EXHIBITIONS:
      axios.get('http://localhost:3001/exhibitions')
        .then((response) => {
          store.dispatch(saveExhibitions(response.data)); // ligne à revoir
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:
  }
  next(action);
};

export default exhibitonsMiddleware;
