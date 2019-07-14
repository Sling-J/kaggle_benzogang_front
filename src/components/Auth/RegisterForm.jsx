import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { FormGroup } from './style';
import Spinner from '../UI/spinner/spinner'

import './Auth.css'

const RegisterForm = ({ touched, errors, loadingOfForm, errorMessage }) => {
   const _renderMessage = message => (
      <span style={{color: 'tomato'}}> { message }</span>
   );

   return (
      <div className="auth-box">
         <h1>Sign up</h1>
         <Form>
            <FormGroup>
               <Field type="text" name="username" placeholder="Username" />
               { touched.username && errors.username && _renderMessage(errors.username) }
            </FormGroup>
            <FormGroup>
               <Field type="email" name="email" placeholder="Email" />
               { touched.email && errors.email && _renderMessage(errors.email) }
            </FormGroup>
            <FormGroup>
               <Field type="password" name="password" placeholder="Password" />
               { touched.password && errors.password && _renderMessage(errors.password) }
            </FormGroup>
            <FormGroup>
               <Field type="password" name="password2" placeholder="Repeat password" />
               { touched.password2 && errors.password2 && _renderMessage(errors.password2) }
            </FormGroup>
            <FormGroup>
               <button className="transition" disabled={loadingOfForm} type="submit">Sign up</button>
            </FormGroup>
            <FormGroup>
               {errorMessage && <p>{_renderMessage(errorMessage)}</p>}
            </FormGroup>
            <FormGroup>
               {loadingOfForm && <Spinner />}
            </FormGroup>
         </Form>

         <p className="auth-other">
            <Link to="/sign-in">Sign in</Link>
         </p>
      </div>
   )
};

export default withFormik({
   mapPropsToValues: () => ({
      username: '',
      email: '',
      password: '',
      password2: ''
   }),
   handleSubmit: (values, { props }) => {
      props.registerUser(values);
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
})(RegisterForm);