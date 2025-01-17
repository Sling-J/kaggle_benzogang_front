import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { FormGroup } from './style';
import Spinner from '../UI/spinner/spinner'

import './Auth.css'

const LoginForm = ({ touched, errors, loadingOfForm, loginErrorMessage }) => {
   const _renderMessage = message => (
      <span style={{color: 'tomato'}}> { message }</span>
   );

   return (
      <div className="auth-box">
         <h1>Sign in</h1>
         
         <Form>
            <FormGroup>
               <Field type="username" name="username" placeholder="Username" />
               { touched.username && errors.username && _renderMessage(errors.username) }
            </FormGroup>
            <FormGroup>
               <Field type="password" name="password" placeholder="Password" />
               { touched.password && errors.password && _renderMessage(errors.password) }
            </FormGroup>
            <FormGroup>
               <button className="transition" type="submit" disabled={loadingOfForm} >Sign in</button>
            </FormGroup>
            <FormGroup>
               {loginErrorMessage && <p>{_renderMessage(loginErrorMessage)}</p>}
            </FormGroup>
            <FormGroup>
               {loadingOfForm && <Spinner />}
            </FormGroup>
         </Form>

         <p className="auth-other">
            <Link to="/sign-up">Sign up</Link>
         </p>
      </div>
   )
};

export default withFormik({
   mapPropsToValues: () => ({
      username: '',
      password: '',
   }),
   handleSubmit: (values, { props }) => {
      props.login(values);
   },
   validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string()
         .min(8)
         .required()
         .matches(/\d/, {
            message: 'Must be one number',
            excludeEmptyString: true
         })
         .matches(/[a-z]/, {
            message: 'Lowercase',
            excludeEmptyString: true
         })
         .matches(/[A-Z]/, {
            message: 'Uppercase',
            excludeEmptyString: true
         })
   }),
})(LoginForm);