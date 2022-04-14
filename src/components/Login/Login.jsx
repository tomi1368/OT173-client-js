import {useState} from "react"
import { Formik, Field, Form } from "formik";
import {
  initialLoginValue,
  loginSchema,
  logInHandleError,
} from "./loginFormSettings/loginFormSettings";
import { loginRequest } from "./loginFormSettings/loginRequest";
import {Link, useNavigate} from "react-router-dom"
import "./Login.scss";

const Login = () => {
 /*  const navigate = useNavigate() */
  const [error,setErorr] = useState(null)
  return (
    <>
    {error && <div className="error-tologin">Error to login</div>}
    <div className="login-wrapper">
      <div className="login">
        <Link to={"/"} className="login-img">
          <img
            src="https://i.ibb.co/7Qcvm6c/LOGO-SOMOS-MAS.png"
            alt=""
          />
        </Link>
        <Formik
          initialValues={initialLoginValue}
          validationSchema={loginSchema}
          onSubmit={(formValue)=>loginRequest(formValue,setErorr)}
          validateOnChange={false}
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
