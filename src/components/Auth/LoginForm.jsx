import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import * as Yup from 'yup';

import { FormGroup } from './style';
import Spinner from '../UI/spinner/spinner'

import './Auth.css'

const LoginForm = ({ errors, touched, loadingOfForm, errorMessage, userData }) => {
   const _renderMessage = message => (
      <span style={{color: 'tomato'}}> { message }</span>
   );

   return (
      <div className="auth-box">
         <h1>Sign in</h1>
         <Form>
            <FormGroup>
               <Field type="email" name="email" placeholder="Email" />
               { touched.email && errors.email && _renderMessage(errors.email) }
            </FormGroup>
            <FormGroup>
               <Field type="password" name="password" placeholder="Password" />
               { touched.password && errors.password && _renderMessage(errors.password) }
            </FormGroup>

            <FormGroup>
               <button className="transition" disabled={loadingOfForm} type="submit">Sign in</button>
            </FormGroup>
            <FormGroup>
               {errorMessage && <p>{_renderMessage(errorMessage)}</p>}
               { userData && <Redirect to="/signin" /> }
            </FormGroup>
            <FormGroup>
               {loadingOfForm && <Spinner />}
            </FormGroup>
         </Form>

         <p className="auth-other">
            <Link to="/signup">Sign up</Link>
         </p>
      </div>
   )
}

export default withFormik({
   mapPropsToValues: () => ({
      username: '',
      email: '',
      password: '',
      password2: ''
   }),
   handleSubmit: (values, { props }) => {
      props.registerUser(values);
      values.password = '';
      values.password2 = '';
   },
   validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      email: Yup.string().email('Email not valid').required(),
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
         }),
      password2: Yup.string()
         .min(8)
         .required()
         .matches(/\d/, {
            message: 'Must be number number',
            excludeEmptyString: true
         })
         .matches(/[a-z]/, {
            message: 'Lowercase',
            excludeEmptyString: true
         })
         .matches(/[A-Z]/, {
            message: 'Uppercase',
            excludeEmptyString: true
         }),
   }),
})(LoginForm);