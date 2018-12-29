import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import TextField from "./textField";
import Button from '@material-ui/core/Button';

import './login.css';

export default class Login extends Component {
  
  _onSubmit = values => {
    if( values.username === "admin" && values.password === "admin" ){
      console.log('redirect on table page');
    }
  };
  
  _validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    };

    if (!values.password) {
      errors.password = "Required";
    };

    return errors;
  };
  

  render(){
    return(
      <div className="login-page">
        <Form
          onSubmit={this._onSubmit}
          validate={this._validate}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username</label>
                <Field
                  name="username"
                  component={TextField}
                  type="text"
                  label="Username"
                />
              </div>
              <div>
                <label>Password</label>
                <Field
                  name="password"
                  component={TextField}
                  type="text"
                  label="Password"
                />
              </div>
              <div className="buttons">
                <Button type="submit" disabled={submitting || pristine} variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}
  

