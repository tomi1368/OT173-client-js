import React from "react";
import { Formik, Field, Form } from "formik";
import {
  initialLoginValue,
  loginSchema,
  logInHandleError,
} from "./loginFormSettings/loginFormSettings";
import { loginRequest } from "./loginFormSettings/loginRequest";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login">
        <div className="login-img">
          <img src="https://www.imgacademy.com/sites/default/files/2018-09/ascender1_10.png" alt="" />
        </div>
        <Formik
          initialValues={initialLoginValue}
          validationSchema={loginSchema}
          onSubmit={loginRequest}
        >
          {({ errors }) => {
            return (
              <Form className="login-form">
                <Field className="login-form__field" name="email" />
                {logInHandleError(errors).email()}
                <Field
                  className="login-form__field"
                  name="password"
                  type="password"
                />
                {logInHandleError(errors).password()}
                <button className="login-form__field" type="submit">
                  Log In
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
