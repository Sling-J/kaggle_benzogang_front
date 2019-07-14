import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import DatasetsPage from '../pages/DatasetsPage';
import DatasetsCreatePage from '../pages/DatasetsCreatePage';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Root = () => {
   return (
      <Fragment>
         <Header/>
         <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/sign-up" component={RegisterPage}/>
            <Route path="/sign-in" component={LoginPage}/>
            <Route exact path="/datasets/create" component={DatasetsCreatePage}/>
            <Route path="/datasets" component={DatasetsPage}/>
         </Switch>
         <Footer/>
      </Fragment>
   )
};

export default Root;