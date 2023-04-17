import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import user from 'src/middlewares/user';

import reducer from 'src/reducers';
import picturesMiddleware from '../middlewares/picturesMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    user,
    picturesMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
