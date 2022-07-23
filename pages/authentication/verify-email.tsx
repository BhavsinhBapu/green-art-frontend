import type { GetServerSideProps, NextPage } from "next";
import * as Yup from "yup";
import {
  GetUserInfoByTokenAction,
  SigninAction,
  VerifyEmailAction,
} from "state/actions/user";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import Link from "next/link";
import { authPageRequireCheck } from "middlewares/ssr-authentication-check";
const Signin: NextPage = () => {
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
                  <h2>Verify Email</h2>
                </div>
                <Formik
                  initialValues={{
                    email: "",
                    code: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Email is required"),
                    code: Yup.string().min(6).required("Code is required"),
                  })}
                  onSubmit={async (values) => {
                    await dispatch(VerifyEmailAction(values, setProcessing));
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
                          type={"number"}
                          name="code"
                          id="code"
                          className={`form-control form-control-password look-pass ${
                            touched.code && errors.code ? "is-invalid" : ""
                          }`}
                          placeholder="Your code here"
                        />
                      </div>
                      <ErrorMessage
                        name="code"
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
                          "Verify Email"
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
              <Link href="/">
                <a className="auth-logo" href="">
                  <img src="/logo.svg" className="img-fluid" alt="" />
                </a>
              </Link>
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

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await authPageRequireCheck(ctx);
  return {
    props: {},
  };
};

export default Signin;
