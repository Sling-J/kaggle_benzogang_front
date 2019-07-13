import React from 'react';
import { connect } from 'react-redux';

import { login } from '../ducks/Auth';

import LoginForm from '../components/Auth/LoginForm';
import { Wrapper } from '../components/style'

const LoginPage = ({ login, loadingOfForm, errorMessage, loginUserData }) => {
   return (
      <Wrapper>
         <LoginForm
            login={login}
            loadingOfForm={loadingOfForm}
            errorMessage={errorMessage}
            loginUserData={loginUserData}
          />
      </Wrapper>
   )
}

const mapStateToProps = state => ({
   loadingOfForm: state.authReducer.loadingOfForm,
   errorMessage: state.authReducer.errorMessage,
   loginUserData: state.authReducer.userData
})

export default connect(
   mapStateToProps, 
   { login }
)(LoginPage);