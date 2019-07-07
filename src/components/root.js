import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Home from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Root = () => {
	return (
      <Fragment>
         <NotificationContainer />
         <Header />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={RegisterPage} />
            <Route path="/signin" component={LoginPage} />
         </Switch>
         <Footer />
      </Fragment>
   )
}

export default Root;