import type { NextPage } from "next";
import ProfileComp from "components/profile/profile";
import ProfileSidebar from "layout/profile-sidebar";
const Index: NextPage = () => {
  return (
    <div className="page-wrap">
      <ProfileSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="profle-are-top">
              <h2 className="section-top-title">Mr User</h2>
              <h3 className="user-mail">user@email.com</h3>
            </div>
          </div>
          <div className="profile-area">
            <h4 className="section-title-medium">Profile Information</h4>
            <div className="section-wrapper">
              <div className="user-profile">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="user-profile-left">
                      <div className="user-thumbnail">
                        <img
                          src="https://www.w3schools.com/howto/img_avatar2.png"
                          className="img-fluid"
                          alt="user"
                        />
                      </div>
                      <div className="user-profile-content">
                        <h2>Mr User</h2>
                        <h4>user@email.com</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <div className="user-profile-info">
                      <ul>
                        <li>
                          <span>Name</span>
                          <span className="cp-user-dot">:</span>
                          <span>Mr User</span>
                        </li>
                        <li>
                          <span>Country</span>
                          <span className="cp-user-dot">:</span>
                          <span />
                        </li>
                        <li>
                          <span>Email</span>
                          <span className="cp-user-dot">:</span>
                          <span>user@email.com</span>
                        </li>
                        <li>
                          <span>Email Verification</span>
                          <span className="cp-user-dot">:</span>
                          <span>
                            <span className="badge badge-success">Active</span>
                          </span>
                        </li>
                        <li>
                          <span>Phone</span>
                          <span className="cp-user-dot">:</span>
                          <span />
                        </li>
                        <li>
                          <span>Role</span>
                          <span className="cp-user-dot">:</span>
                          <span>User</span>
                        </li>
                        <li>
                          <span>Active Status</span>
                          <span className="cp-user-dot">:</span>
                          <span>
                            <span className="badge badge-success">Active</span>
                          </span>
                        </li>
                      </ul>
                    </div>
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

export default Index;
