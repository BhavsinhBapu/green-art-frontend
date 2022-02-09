import type { NextPage } from "next";
import React, { useState } from "react";

const ResetPassword: NextPage = () => {
  type resetType = {
    email: string;
    password: string;
    password_confirmation: string;
  };

  const [resetPassword, serResetPassword] = useState<resetType>({
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    serResetPassword({
      ...resetPassword,
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
                  <h2>Forgot Password ?</h2>
                  <p>
                    Please enter the email address to request a password reset.
                  </p>
                </div>

                <div className="form-group">
                  <input
                    id="token"
                    type="text"
                    placeholder=""
                    className="form-control"
                    name="token"
                    value={resetPassword.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={resetPassword.password}
                    className="form-control"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder=""
                    value={resetPassword.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password_confirmation"
                    className="form-control"
                    placeholder=""
                    value={resetPassword.password_confirmation}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn nimmu-user-sibmit-button">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="user-content-text text-center">
              <h3>Welcome Back To</h3>
              <a className="auth-logo" href="javascript:;">
                <img src="/logo.svg" className="img-fluid" alt="" />
              </a>
              <p>
                Return to sign in <a href="{{route('login">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
