import { combineReducers } from 'redux';

import exhibitionsReducer from './exhibitions';
import usersReducer from './users';

const rootReducer = combineReducers({
  // nom du tiroir: reducer qui s'en occupe
  exhibitions: exhibitionsReducer,
  users: usersReducer,
});

export default rootReducer;
