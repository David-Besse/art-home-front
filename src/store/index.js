import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import user from 'src/middlewares/user';
import exhibitionsMiddleware from '../middlewares/exhibitionsMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    user,
    exhibitionsMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
