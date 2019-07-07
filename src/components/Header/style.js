import styled from 'styled-components';

export const Nav = styled.nav`
   padding: 15px 0;
   background: #47494D;
   color: #fff;
`

export const NavMenu = styled.div`
   li {
      margin-left: 20px;
   }

   li:first-child {
      margin-left: 0;
   }

   a {
      color: #eae4e4;
   }

   a:hover {
      color: #fff;
   }

   .login-wrap {
      font-weight: 600;
      padding: 2px 17px;
      border-radius: 6px;
      background: #20BEFF;
   }

   .logo a {
      color: #20BEFF;
      font-weight: 600;
      font-size: 18px;
      display: inline-block;
      margin-right: 20px;
   }

   .logo a:hover {
      color: #20BEFF;
   }
`