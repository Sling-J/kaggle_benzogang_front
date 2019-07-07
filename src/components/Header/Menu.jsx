import React from 'react';
import { Link } from 'react-router-dom';

import { NavMenu } from './style';

const Menu = () => {
   return (
      <NavMenu className="flex j-sb">
         <div className="flex">
            <div className="logo">
               <Link to="/">Kaggle.kz</Link>
            </div>
            <ul className="flex flex-align-center">
               <li>
                  <Link to="/datasets">Datasets</Link>
               </li>
               <li>
                  <a href="/">Competitions</a>
               </li>
            </ul>
         </div>
         <div className="login-wrap">
            <Link to="/signin">Sing in</Link>
         </div>
      </NavMenu>
   )
};

export default Menu;