import type { NextPage } from "next";
import React, { useState } from "react";

const Signin: NextPage = () => {
  type credentialType = {
    email: string;
    password: string;
  };
  const [credentials, setCredentials] = useState<credentialType>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
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

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your email here"
                    value={credentials.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-password look-pass"
                    placeholder="Your password here"
                    value={credentials.password}
                    onChange={handleChange}
                  />

                  <p className="invalid-feedback">password </p>
                  <span className="eye rev">
                    <i className="fa fa-eye-slash toggle-password"></i>
                  </span>
                </div>

                <div className="form-group">
                  <label></label>
                  <p className="invalid-feedback">Message </p>
                </div>

                <div className="d-flex justify-content-between rememberme align-items-center mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">Remember me</label>
                  </div>
                  <div className="text-right">
                    <a
                      className="text-theme forgot-password"
                      href="{{route('forgotPassword')}}"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <button type="submit" className="btn nimmu-user-sibmit-button">
                  Sign In
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="user-content-text text-center">
              <h3>Welcome To</h3>
              <a className="auth-logo" href="javascript:;">
                <img src="/logo.svg" className="img-fluid" alt="" />
              </a>
              <p>
                Don’t have account ? <a href=""> Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
