import axios from 'axios';
import { FETCH_EXHIBITIONS, saveExhibitions } from '../actions/exhibitions';

// Fetching the list of exhibition and putting them into the state

const exhibitionsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EXHIBITIONS:
      axios.get('http://localhost:3001/exhibitions')
        .then((response) => {
          store.dispatch(saveExhibitions(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:
  }
  next(action);
};

export default exhibitionsMiddleware;
