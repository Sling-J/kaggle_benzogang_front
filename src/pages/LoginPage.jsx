import React from 'react';
import { connect } from 'react-redux'

import LoginForm from '../components/Auth/LoginForm';

const LoginPage = () => {
   return (
      <LoginForm />
   )
}

const mapStateToProps = (props) => {

}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);