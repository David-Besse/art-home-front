import { combineReducers } from 'redux';

import exhibitionsReducer from './exhibitions';
import usersReducer from './users';
import modalReducer from './modals';
import profileReducer from './profile';

const rootReducer = combineReducers({
  exhibitions: exhibitionsReducer,
  users: usersReducer,
  modals: modalReducer,
  profile: profileReducer,
});

export default rootReducer;
