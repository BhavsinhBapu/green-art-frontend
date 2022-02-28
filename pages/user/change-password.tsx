import type { NextPage } from "next";
import ProfileSidebar from "layout/profile-sidebar";
import React, { useState } from "react";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";

const PhoneVerification: NextPage = () => {
  type passwordListType = {
    current_password: string;
    new_password: string;
    confirm_new_password: string;
  };
  const [passwordList, setPasswordList] = useState<passwordListType>({
    current_password: "",
    new_password: "",
    confirm_new_password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordList({
      ...passwordList,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(passwordList, "password list");
  };
  return (
    <div className="page-wrap">
      <ProfileSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="profle-are-top">
              <h2 className="section-top-title mb-0">Reset Password</h2>
            </div>
          </div>
          <div className="reset-password-area">
            <h4 className="section-title-medium">Change Password</h4>
            <div className="section-wrapper">
              <div className="row">
                <div className="col-lg-6 col-md-8">
                  <div className="user-profile-form">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="hidden"
                        name="_token"
                        value="{{ csrf_token() }}"
                      />{" "}
                      <div className="form-group">
                        <label>Current Password</label>
                        <input
                          name="current_password"
                          type="password"
                          placeholder="Current Password"
                          className="form-control"
                          value={passwordList.current_password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>New Password</label>
                        <input
                          name="new_password"
                          type="password"
                          placeholder="New Password"
                          className="form-control"
                          value={passwordList.new_password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Confirm New Password</label>
                        <input
                          name="confirm_new_password"
                          type="password"
                          placeholder="Re Enter New Password"
                          className="form-control"
                          value={passwordList.confirm_new_password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group m-0">
                        <button className="primary-btn-outline" type="submit">
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4">
                  <div className="reset-password-right text-center">
                    <img src="/reset-password.svg" alt="reset-password" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
PhoneVerification.getInitialProps = async (ctx) => {
  await SSRAuthCheck(ctx, "/user/change-password");
  return {};
};
export default PhoneVerification;
