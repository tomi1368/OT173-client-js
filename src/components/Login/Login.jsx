import { Formik, Field, Form } from "formik";
import { useState } from "react";
import {
  initialLoginValue,
  loginSchema,
  logInHandleError,
} from "../../helpers/loginFormSettings/loginFormSettings";
import { loginRequest } from "../../helpers/loginFormSettings/loginRequest";
import "./Login.scss";

const Login = () => {
  const [error, setError] = useState(null);
  return (
    <>
      {error && <div className="error-tologin">Error to login</div>}
      <div className="login-wrapper">
        <div className="login">
          <div className="login-img">
            <img src="https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png" alt="" />
          </div>
          <Formik
            initialValues={initialLoginValue}
            validationSchema={loginSchema}
            onSubmit={(formValue) => loginRequest(formValue, setError)}
            validateOnChange={false}
            validateOnBlur={false}
            validateOnMount={false}
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
    </>
  );
};

export default Login;
