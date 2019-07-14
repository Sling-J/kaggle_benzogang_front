import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/index';
import Root from './components/root';
import ErrorBoundary from './components/UI/error-boundary/error-boundary';

import history from './history';

const App = () => {
   return (
      <Provider store={store}>
         <ErrorBoundary>
            <ConnectedRouter history={history}>
               <Router>
                  <Root />
               </Router>
            </ConnectedRouter>
         </ErrorBoundary>
      </Provider>
   )
};

export default App;