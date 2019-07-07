import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
// import saga from './saga';
import reducers from './reducers';

// const sagaMiddleware = createSagaMiddleware();
// const enhancer = compose(
//    applyMiddleware(sagaMiddleware),
//    window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && 
                  window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, enhancer);

// sagaMiddleware.run(saga);

export default store;