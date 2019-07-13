import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { FormGroup } from './style';

import './Auth.css'

const LoginForm = () => {
   const _renderMessage = message => (
      <span style={{color: 'tomato'}}> { message }</span>
   );

   return (
      <div className="auth-box">
         <h1>Sign in</h1>
         <Form>
            <FormGroup>
               <Field type="email" name="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
               <Field type="password" name="password" placeholder="Password" />
            </FormGroup>

            <FormGroup>
               <button className="transition" type="submit">Sign in</button>
            </FormGroup>
            {/* <FormGroup>
               {errorMessage && <p>{_renderMessage(errorMessage)}</p>}
            </FormGroup> */}
            {/* <FormGroup>
               {loadingOfForm && <Spinner />}
            </FormGroup> */}
         </Form>

         <p className="auth-other">
            <Link to="/signup">Sign up</Link>
         </p>
      </div>
   )
}

export default withFormik({
   
})(LoginForm);