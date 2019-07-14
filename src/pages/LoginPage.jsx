import React from 'react';
import { connect } from 'react-redux';

import { login } from '../ducks/Auth';

import LoginForm from '../components/Auth/LoginForm';
import { Wrapper } from '../components/style'

const LoginPage = ({ login, loadingOfForm, loginErrorMessage }) => {
   return (
      <Wrapper>
         <LoginForm
            login={login}
            loadingOfForm={loadingOfForm}
            loginErrorMessage={loginErrorMessage}
          />
      </Wrapper>
   )
};

const mapStateToProps = state => ({
   loadingOfForm: state.authReducer.loadingOfForm,
   loginErrorMessage: state.authReducer.loginErrorMessage
});

export default connect(
   mapStateToProps, 
   { login }
)(LoginPage);