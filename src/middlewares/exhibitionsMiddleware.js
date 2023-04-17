import axios from 'axios';
import { fetchExhibitions, FETCH_EXHIBITIONS, saveExhibitions } from '../actions/exhibitions';

// Fetching the list of exhibition and putting them into the state

const exhibitionsMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case FETCH_EXHIBITIONS:
      axios.get('http://localhost:3001/exhibitions')
        .then((response) => {
          console.log(response);

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
