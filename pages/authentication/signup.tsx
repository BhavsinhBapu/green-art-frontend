import type { NextPage } from "next";
import * as Yup from "yup";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { SignupAction } from "state/actions/user";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { authPageRequireCheck } from "middlewares/ssr-authentication-check";
const Signup: NextPage = () => {
  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm_password: false,
  });

  return (
    <div
      className="user-content-wrapper"
      style={{
        backgroundImage: `url(/user-content-wrapper-bg.jpg)`,
      }}
    >
      <div className="user-content-inner-wrap">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="user-form">
              <div className="user-form-inner">
                <div className="form-top">
                  <h2>Sign Up</h2>
                  <p>Create a new account.</p>
                </div>
                <Formik
                  initialValues={{
                    email: "",
                    first_name: "",
                    last_name: "",
                    password: "",
                    password_confirmation: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Email is required"),
                    first_name: Yup.string()
                      .min(2)
                      .required("First name is required"),
                    last_name: Yup.string()
                      .min(2)
                      .required("Last name is required"),
                    password: Yup.string()
                      .min(8)
                      .required("Password is required"),
                    password_confirmation: Yup.string()
                      .oneOf(
                        [Yup.ref("password"), null],
                        "Passwords must match"
                      )
                      .required("Confirm password is required"),
                  })}
                  onSubmit={async (values) => {
                    dispatch(SignupAction(values, setProcessing));
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="first_name"
                          id="first_name"
                          className={`form-control ${
                            touched.first_name && errors.first_name
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="Your first name here"
                        />
                      </div>
                      <ErrorMessage
                        name="first_name"
                        component="div"
                        className="red-text"
                      />
                      <div className="form-group">
                        <Field
                          type="text"
                          name="last_name"
                          id="last_name"
                          className={`form-control ${
                            touched.last_name && errors.last_name
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="Your last name here"
                        />
                      </div>
                      <ErrorMessage
                        name="last_name"
                        component="div"
                        className="red-text"
                      />
                      <div className="form-group">
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className={`form-control ${
                            touched.email && errors.email ? "is-invalid" : ""
                          }`}
                          placeholder="Your email here"
                        />
                      </div>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="red-text"
                      />
                      <div className="form-group">
                        <Field
                          type={showPassword.password ? "text" : "password"}
                          name="password"
                          id="password"
                          className={`form-control form-control-password look-pass ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="Your password here"
                        />

                        <span
                          className="eye rev"
                          onClick={() =>
                            setShowPassword({
                              ...showPassword,
                              password: !showPassword.password,
                            })
                          }
                        >
                          <i className="fa fa-eye-slash toggle-password"></i>
                        </span>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="red-text"
                      />

                      <div className="form-group">
                        <Field
                          type={
                            showPassword.confirm_password ? "text" : "password"
                          }
                          name="password_confirmation"
                          id="password_confirmation"
                          className={`form-control form-control-password look-pass ${
                            touched.password_confirmation &&
                            errors.password_confirmation
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="Your password here"
                        />

                        <span
                          className="eye rev"
                          onClick={() =>
                            setShowPassword({
                              ...showPassword,
                              confirm_password: !showPassword.confirm_password,
                            })
                          }
                        >
                          <i className="fa fa-eye-slash toggle-password"></i>
                        </span>
                      </div>
                      <ErrorMessage
                        name="password_confirmation"
                        component="div"
                        className="red-text"
                      />
                      <div className="form-group">
                        <label></label>
                        <p className="invalid-feedback">Message </p>
                      </div>

                      <button
                        type="submit"
                        disabled={processing}
                        className="btn nimmu-user-sibmit-button"
                      >
                        {processing ? (
                          <>
                            <span
                              className="spinner-border spinner-border-md"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            <span>Please wait</span>
                          </>
                        ) : (
                          "Sign Up"
                        )}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="user-content-text text-center">
              <h3>Welcome To</h3>
              <a className="auth-logo" href="javascript:;">
                <img src="/logo.svg" className="img-fluid" alt="" />
              </a>
              <Link href="/authentication/signin">
                <p>
                  Already have an accoun ? <a href=""> Sign In</a>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx: any) => {
  await authPageRequireCheck(ctx);
  return {
    props: {},
  };
};

export default Signup;
