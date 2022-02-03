import type { NextPage } from "next";

const Signup: NextPage = () => {
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

                <div className="form-group">
                  <input
                    type="text"
                    name="first_name"
                    value=""
                    className="form-control"
                    placeholder="Your first name here"
                  />

                  <p className="invalid-feedback">error </p>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="last_name"
                    value=""
                    className="form-control"
                    placeholder="Your last name here"
                  />

                  <p className="invalid-feedback">error </p>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value=""
                    className="form-control"
                    placeholder="Your email here"
                  />

                  <p className="invalid-feedback">error </p>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-password look-pass"
                    placeholder="Your password here"
                  />

                  <p className="invalid-feedback">password </p>
                  <span className="eye rev">
                    <i className="fa fa-eye-slash toggle-password"></i>
                  </span>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password_confirmation"
                    className="form-control form-control-password look-pass-1"
                    placeholder="Your confirm password here"
                  />

                  <p className="invalid-feedback">password_confirmation </p>

                  <span className="eye rev-1">
                    <i className="fa fa-eye-slash toggle-password"></i>
                  </span>
                </div>
                <div className="form-group">
                  <label></label>

                  <p className="invalid-feedback">Message </p>
                </div>

                <button type="submit" className="btn nimmu-user-sibmit-button">
                  Sign Up
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
                Already have an accoun ? <a href=""> Sign In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
