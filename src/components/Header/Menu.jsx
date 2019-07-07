import React from 'react';

import { NavMenu } from './style';

const Menu = () => {
   return (
      <NavMenu className="flex j-sb">
         <div className="flex">
            <div className="logo">
               <a href="/">Kaggle.kz</a>
            </div>
            <ul className="flex flex-align-center">
               <li>
                  <a href="/">Datasets</a>
               </li>
               <li>
                  <a href="/">Competitions</a>
               </li>
            </ul>
         </div>
         <div className="login-wrap">
            <a href="/">Sing in</a>
         </div>
      </NavMenu>
   )
};

export default Menu;