import { combineReducers } from 'redux';

import exhibitionsReducer from './exhibitions';
import usersReducer from './users';
import modalReducer from './modals';
import picturesReducer from './pictures';

const rootReducer = combineReducers({
  exhibitions: exhibitionsReducer,
  users: usersReducer,
  modals: modalReducer,
  pictures: picturesReducer,
});

export default rootReducer;
