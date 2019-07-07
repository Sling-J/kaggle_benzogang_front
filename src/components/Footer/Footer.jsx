import React from 'react';
import { Wrapper } from '../style'

import './Footer.css'

const Footer = () => {
   return (
		<footer>
			<Wrapper>
            <div className="footer-logo">
               <h2>Kaggle.kz</h2>

               <p>Have an account? <a href="/">Sign in</a></p>
            </div>
         </Wrapper>
		</footer>
   )
}

export default Footer;