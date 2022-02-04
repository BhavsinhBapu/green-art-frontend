import type { NextPage } from "next";
import ProfileSidebar from "layout/profile-sidebar";

const Security: NextPage = () => {
  return (
    <div className="page-wrap">
      <ProfileSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="profle-are-top">
              <h2 className="section-top-title mb-0">
                Profile Security Status
              </h2>
            </div>
          </div>
          <div className="two-factor-area mb-25">
            <h4 className="section-title-medium" />
            <div className="section-wrapper">
              <div className="security-list">
                <div className="single-security">
                  <div className="security-left">
                    <div className="security-info">
                      <img
                        src="/fingerprint-scan.svg"
                        alt="fingerprint"
                        className="security-icon"
                      />
                      <div className="security-content">
                        <h4>Google Authenticator (Recommended)</h4>
                        <p>Protect your account and transactions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="security-right">
                    <a href="#" className="action-btn remove-btn">
                      Disabled
                    </a>
                    <a
                      href="http://localhost:8000/user/setting"
                      className="action-btn enable-btn"
                    >
                      Enable ?
                    </a>
                  </div>
                </div>
                <div className="single-security">
                  <div className="security-left">
                    <div className="security-info">
                      <img
                        src="/smartphone.svg"
                        alt="smartphone"
                        className="security-icon"
                      />
                      <div className="security-content">
                        <h4>Phone Number Verification</h4>
                        <p>Protect your account and transactions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="security-center">
                    <span className="text-danger">No phone number added</span>
                  </div>
                  <div className="security-right">
                    <a href="#" className="action-btn remove-btn">
                      Unverified
                    </a>
                    <a
                      href="http://localhost:8000/user/phone-verification"
                      className="action-btn enable-btn"
                    >
                      Verify ?
                    </a>
                  </div>
                </div>
                <div className="single-security">
                  <div className="security-left">
                    <div className="security-info">
                      <img
                        src="/email.svg"
                        alt="email"
                        className="security-icon"
                      />
                      <div className="security-content">
                        <h4>Email Address Verification</h4>
                        <p>Protect your account and transactions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="security-center">
                    <span> use****com </span>
                  </div>
                  <div className="security-right">
                    <a href="#" className="action-btn change-btn">
                      Verified
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="advanced-security-area">
            <h4 className="section-title-medium">Advanced Security</h4>
            <div className="section-wrapper">
              <div className="security-list">
                <div className="single-security">
                  <div className="security-left">
                    <div className="security-info">
                      <img src="/key.svg" alt="key" className="security-icon" />
                      <div className="security-content">
                        <h4>Login Password</h4>
                        <p>Login password is used to log in to your account.</p>
                      </div>
                    </div>
                  </div>
                  <div className="security-right">
                    <a
                      href="http://localhost:8000/user/change-password"
                      className="action-btn enable-btn"
                    >
                      Change
                    </a>
                  </div>
                </div>
                <div className="single-security">
                  <div className="security-left">
                    <div className="security-info">
                      <img
                        src="/fingerprint-scan.svg"
                        alt="fingerprint"
                        className="security-icon"
                      />
                      <div className="security-content">
                        <h4>Google auth enable for login</h4>
                        <p>To enable two factor authentication at log In</p>
                      </div>
                    </div>
                  </div>
                  <div className="security-right">
                    <a href="#" className="action-btn remove-btn">
                      Disabled
                    </a>
                    <a
                      href="http://localhost:8000/user/setting"
                      className="action-btn enable-btn"
                    >
                      Enable ?
                    </a>
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

export default Security;
