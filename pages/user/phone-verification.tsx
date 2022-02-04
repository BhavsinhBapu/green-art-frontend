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
              <h2 className="section-top-title mb-0">Phone Verification</h2>
            </div>
          </div>
          <div className="reset-password-area">
            <h4 className="section-title-medium">Verify Phone </h4>
            <div className="section-wrapper">
              <div className="row">
                <div className="col-lg-6 col-md-8">
                  <div className="user-profile-form">
                    <form
                      method="post"
                      action="http://localhost:8000/phone-verify"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="UHxumztviDLlLBs3t8g3IMcfQsz9pSMy9wObVejT"
                      />{" "}
                      <div className="form-group">
                        <label htmlFor="number">Phone number</label>
                        <div className="code-list">
                          <p>
                            Please add mobile no. first from{" "}
                            <a href="http://localhost:8000/user/edit-profile">
                              edit profile
                            </a>{" "}
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4">
                  <div className="reset-password-right text-center">
                    <img
                      src="http://localhost:8000/assets/user/images/phone-verification.svg"
                      alt="phone-verification"
                    />
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
