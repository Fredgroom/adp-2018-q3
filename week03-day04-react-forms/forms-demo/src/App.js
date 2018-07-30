import React from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from "final-form";
const required = value => (value ? undefined : "Required");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const onSubmit = async values => {
  await sleep(300);
  if (values.password !== "finalformrocks") {
    return { [FORM_ERROR]: "Login Failed" };
  }
  window.alert("LOGIN SUCCESS!");
};
const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
};
const App = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <div>
          <Field name="email" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Email address</label>
                <input {...input} type="text" placeholder="Email Address" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </div>
        <div>
          <Field name="password" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="text" placeholder="Password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </div>
 
        <button type="submit" disabled={pristine || invalid}>
          Submit
        </button>
      </form>
    )}
  />
 )
 
 export default App;