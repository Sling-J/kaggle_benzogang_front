import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import { Wrapper } from '../style';
import { FormGroup } from '../Auth/style';

import Spinner from '../UI/spinner/spinner'

import './Datasets.css';

const DatasetsCreate = ({
   touched, errors, loadingOfData
}) => {
   const _renderMessage = message => (
      <span style={{color: 'tomato'}}> { message }</span>
   );

   return (
      <section className="datasets-page">
         <Wrapper>
            <Form>
               <FormGroup>
                  <Field type="text" name="title" placeholder="Title" />
                  { touched.title && errors.title && _renderMessage(errors.title) }
               </FormGroup>
               <FormGroup>
                  <Field type="text" name="description" placeholder="Description" />
                  { touched.description && errors.description && _renderMessage(errors.description) }
               </FormGroup>
               <FormGroup>
                  <Field type="file" name="data" placeholder="File" />
                  { touched.data && errors.data && _renderMessage(errors.data) }
               </FormGroup>

               <FormGroup>
                  <button disabled={loadingOfData} type="submit">Send</button>
               </FormGroup>

               <FormGroup>
                  {loadingOfData && <Spinner />}
               </FormGroup>
            </Form>
         </Wrapper>
      </section>
   )
};

export default withFormik({
   mapPropsToValues: () => ({
      title: '',
      description: '',
      data: '',
   }),
   handleSubmit: (values, { props }) => {
      props.createDatsets(values);
      // values.title = '';
      // values.description = '';
      // values.data = '';
      console.log(values.data.value)
   },
   validationSchema: Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required()
   }),
})(DatasetsCreate);