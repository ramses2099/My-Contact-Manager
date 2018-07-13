import React, { Component } from 'react'
import {Form, Grid, Button} from 'semantic-ui-react';
import {Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class ContactForm extends Component {
  renderField =({input, label, type, meta:{touched, error}})=>(
    <Form.Field className={classnames({error:touched && error})}>
      <lable>{label}</lable>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  );

  render() {
    const { handleSubmit, pristine, submitting, loading } = this.props;

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>Add New Contact</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths ='equal'>
              <Field name="FirstName" type="text" component={this.renderField} label="First Name"/>
              <Field name="LastName" type="text" component={this.renderField} label="Last Name"/>             
            </Form.Group>
            <Field name="Phone" type="text" component={this.renderField} label="Phone" />
            <Field name="Email" type="text" component={this.renderField} label="Email" />
            <Button primary type='submit'  disabled={pristine || submitting}>Save</Button>           
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form:'contact'})(ContactForm);