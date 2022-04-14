/* eslint-disable react/react-in-jsx-scope */
import * as Yup from "yup";

export const initialLoginValue = {
    email:"",
    password:""
}


export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Isn´t a valid email").required("Email is Required"),
  password: Yup.string().required("Password is Required").min(6,"Password must be at least length 6"),
});

export const logInHandleError = (errors) => {
  return {
    email: () => {
      return <div>{errors.email}</div>;
    },
    password: () => {
      return <div>{errors.password}</div>;
    },
  };
};
