import { combineReducers } from 'redux';

import exhibitionsReducer from './exhibitions';
import usersReducer from './users';
import modalReducer from './modals';

const rootReducer = combineReducers({
  exhibitions: exhibitionsReducer,
  users: usersReducer,
  modals: modalReducer,
});

export default rootReducer;
