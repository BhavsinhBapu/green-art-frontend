import type { NextPage } from "next";
import ProfileSidebar from "layout/profile-sidebar";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";

const VerificationList: NextPage = () => {
  return (
    <div className="page-wrap">
      <ProfileSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <h2 className="section-top-title mb-0">Personal Verification</h2>
          </div>
          <div className="verification-list-area">
            <h4 className="section-title-medium">Verification List</h4>
            <div className="section-wrapper">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-verification">
                    <h3 className="verification-title">
                      National Id Card Verification
                    </h3>
                    <ul className="verification-list">
                      <li>
                        <span className="text-warning">Not Submitted</span>
                      </li>
                    </ul>
                    <a
                      href="http://localhost:8000/user/personal-verification"
                      className="primary-btn-sm"
                    >
                      Start now
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-verification">
                    <h3 className="verification-title">
                      Passport Verification
                    </h3>
                    <ul className="verification-list">
                      <li>
                        <span className="text-warning">Not Submitted</span>
                      </li>
                    </ul>
                    <a
                      href="http://localhost:8000/user/personal-verification"
                      className="primary-btn-sm"
                    >
                      Start now
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-verification">
                    <h3 className="verification-title">
                      Driving Licence Verification
                    </h3>
                    <ul className="verification-list">
                      <li>
                        <span className="text-warning">Not Submitted</span>
                      </li>
                    </ul>
                    <a
                      href="http://localhost:8000/user/personal-verification"
                      className="primary-btn-sm"
                    >
                      Start now
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
VerificationList.getInitialProps = async (ctx) => {
  await SSRAuthCheck(ctx, "/user/verification-list");
  return {};
};
export default VerificationList;
