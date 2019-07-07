import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../style'

import './Home.css'

const HomeHeader = () => {
   return (
      <header>
         <Wrapper className="flex j-sb">
            <div className="header-wrap">
               <h1 className="title">
                  Write, execute, and share your code for free on Kaggle
               </h1>
               <p className="description">
                  Kaggle Kernels is a no setup, customizable, 
                  Jupyter Notebooks environment. Access free GPUs 
                  and a huge repository of community published data & code.
               </p>
               <div className="register-now transition">
                  <i className="fa fa-sign-in" aria-hidden="true"></i>
                  <Link to="/signup">Register with Email</Link>
               </div>
            </div>
            <div className="header-img">
               <img src="../../assets/img/header-bg.png" alt="kaggle.kz"/>
            </div>
         </Wrapper>
      </header>
   )
}

export default HomeHeader;