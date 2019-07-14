import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import saga from './sagas';
import reducers from './reducers';
import history from '../history';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
   applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
   ),
   window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const store = createStore(
   reducers(history), 
   enhancer
);

sagaMiddleware.run(saga);

export default store;