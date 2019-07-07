import React from 'react';
import { Wrapper } from '../style'

import { withRouter, Link } from 'react-router-dom';

import './Footer.css'

const Footer = () => {
   return (
		<footer>
			<Wrapper>
            <div className="footer-logo">
               <h2>Kaggle.kz</h2>

               <p>Have an account? <Link to="/signin">Sign in</Link></p>
            </div>
         </Wrapper>
		</footer>
   )
}

export default withRouter(Footer);