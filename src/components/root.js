import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Home from '../pages/HomePage';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Wrapper } from './style'

const Root = () => {
	return (
      <Fragment>
         <NotificationContainer />
         <Header />
         <Switch>
            <Route path="/" component={Home} />
         </Switch>
         <Footer />
      </Fragment>
   )
}

export default Root;