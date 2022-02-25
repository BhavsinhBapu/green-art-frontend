import type { NextPage } from "next";
import React, { useState } from "react";

const ForgotPassword: NextPage = () => {
  type emailType = string;
  const [email, setEmail] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your email here"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn nimmu-user-sibmit-button">
                  Send
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
                Return to sign in <a href=""> Sign In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
