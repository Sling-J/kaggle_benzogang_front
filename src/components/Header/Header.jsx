import React from 'react';

import { Wrapper } from '../style'
import { Nav } from './style'
import Menu from './Menu'

const Header = () => {
   return (
      <Nav>
         <Wrapper>
            <Menu />
         </Wrapper>
      </Nav>
   )
}

export default Header;