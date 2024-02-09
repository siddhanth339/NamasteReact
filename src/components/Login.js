// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => (
  <div className="loginPage">
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <span>Enter email: </span>
          <Field type="email" name="email" /> <br></br>
          <ErrorMessage name="email" component="div" />
          <span>Enter password: </span>
          <Field type="password" name="password" />
          <br></br>
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;
