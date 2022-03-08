import type { NextPage } from "next";
import ProfileComp from "components/profile/profile";
import { parseCookies } from "nookies";

import { GetUserInfoByTokenServer } from "service/user";
import ProfileSidebar from "layout/profile-sidebar";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
const Profile: NextPage = ({ user }: any) => {
  return (
    <div className="page-wrap">
      <ProfileSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="profle-are-top">
              <h2 className="section-top-title">
                {user?.first_name + " " + user?.last_name}
              </h2>
              <h3 className="user-mail">{user?.email}</h3>
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
                          src={user?.photo}
                          className="img-fluid"
                          alt="user"
                        />
                      </div>
                      <div className="user-profile-content">
                        <h2>{user?.first_name + " " + user?.last_name}</h2>
                        <h4>{user?.email}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <div className="user-profile-info">
                      <ul>
                        <li>
                          <span>Name</span>
                          <span className="cp-user-dot">:</span>
                          <span>
                            {user?.first_name
                              ? user?.first_name + " " + user?.last_name
                              : "no name"}
                          </span>
                        </li>
                        <li>
                          <span>Country</span>
                          <span className="cp-user-dot">:</span>
                          <span>
                            {user?.country ? user?.country : "No country"}
                          </span>
                        </li>
                        <li>
                          <span>Email</span>
                          <span className="cp-user-dot">:</span>
                          <span> {user?.email ? user?.email : "No email"}</span>
                        </li>
                        <li>
                          <span>Email Verification</span>
                          <span className="cp-user-dot">:</span>
                          <span>
                            {user?.is_verified ? (
                              <span className="badge badge-success">
                                Active
                              </span>
                            ) : (
                              <span className="badge badge-danger">
                                Inactive
                              </span>
                            )}
                          </span>
                        </li>
                        <li>
                          <span>Phone</span>
                          <span className="cp-user-dot">:</span>
                          <span> {user?.phone ? user?.phone : "No phone"}</span>
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

export const getServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/profile");
  const cookies = parseCookies(ctx);

  const response = await GetUserInfoByTokenServer(cookies.token);
  console.log(response);
  return {
    props: {
      user: response.user,
    },
  };
};
export default Profile;
