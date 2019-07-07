import React from 'react'
import { connect } from 'react-redux';

import { registerUser } from '../ducks/Auth'

import RegisterForm from '../components/Auth/RegisterForm';
import { Wrapper } from '../components/style'

const RegisterPage = ({ registerUser, loadingOfForm, errorMessage }) => {
   return (
      <Wrapper>
         <RegisterForm 
            registerUser={registerUser} 
            loadingOfForm={loadingOfForm}
            errorMessage={errorMessage}
         />
      </Wrapper>
   )
}

const mapStateToProps = (state) => ({
   loadingOfForm: state.authReducer.loadingOfForm,
   errorMessage: state.authReducer.errorMessage,
})

const mapDispatchToProps = {
   registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);