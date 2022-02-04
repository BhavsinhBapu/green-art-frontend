import type { NextPage } from "next";
import ProfileSidebar from "layout/profile-sidebar";

const PhoneVerification: NextPage = () => {
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
                    <form method="POST">
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="UHxumztviDLlLBs3t8g3IMcfQsz9pSMy9wObVejT"
                      />{" "}
                      <div className="form-group">
                        <label>Current Password</label>
                        <input
                          name="password"
                          type="password"
                          placeholder="Current Password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>New Password</label>
                        <input
                          name="new_password"
                          type="password"
                          placeholder="New Password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Confirm New Password</label>
                        <input
                          name="confirm_new_password"
                          type="password"
                          placeholder="Re Enter New Password"
                          className="form-control"
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

export default PhoneVerification;
