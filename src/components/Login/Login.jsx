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
          <img
            src="https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png"
            alt=""
          />
        </div>
        <Formik
          initialValues={initialLoginValue}
          validationSchema={loginSchema}
          onSubmit={loginRequest}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ errors }) => {
            return (
              <Form className="login-form">
                <div className="login-form__field">
                  <span htmlFor="email">Email</span>
                  <Field
                    className="login-form__field__input"
                    placeholder="Enter email..."
                    name="email"
                  />
                </div>
                  {logInHandleError(errors).email()}
                <div className="login-form__field">
                  <span>Password</span>
                  <Field
                    className="login-form__field__input"
                    name="password"
                    type="password"
                  />
                </div>
                {logInHandleError(errors).password()}
                <button className="" type="submit">
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
