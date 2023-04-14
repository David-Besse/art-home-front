import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import user from 'src/middlewares/user';
import exhibitonsMiddleware from '../middlewares/exhibitonsMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    user,
    exhibitonsMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
