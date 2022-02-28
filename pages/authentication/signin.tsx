import type { NextPage } from "next";
import * as Yup from "yup";
import { SigninAction } from "state/actions/authentication";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import Link from "next/link";
import { authPageRequireCheck } from "middlewares/ssr-authentication-check";
const Signin: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [processing, setProcessing] = useState(false);
  const dispatch = useDispatch();
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
                  <h2>Sign In</h2>
                  <p>Please Sign In To Your Account.</p>
                </div>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Email is required"),
                    password: Yup.string()
                      .min(6)
                      .required("Password is required"),
                  })}
                  onSubmit={async (values) => {
                    await dispatch(SigninAction(values, setProcessing));
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
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
                          type={showPassword ? "text" : "password"}
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
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <i className="fa fa-eye toggle-password"></i>
                          ) : (
                            <i className="fa fa-eye-slash toggle-password"></i>
                          )}
                        </span>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="red-text"
                      />

                      <div className="form-group">
                        <p className="invalid-feedback">Message</p>
                      </div>

                      <div className="d-flex justify-content-between rememberme align-items-center mb-4">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label className="form-check-label">
                            Remember me
                          </label>
                        </div>
                        <div className="text-right">
                          <Link href="/authentication/forgot-password">
                            <a className="text-theme forgot-password">
                              Forgot Password?
                            </a>
                          </Link>
                        </div>
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
                          "Sign In"
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
              <Link href="/authentication/signup">
                <p>
                  Don’t have account ? <a href=""> Sign Up</a>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Signin.getInitialProps = async (ctx) => {
  await authPageRequireCheck(ctx);
  return {};
};

export default Signin;
