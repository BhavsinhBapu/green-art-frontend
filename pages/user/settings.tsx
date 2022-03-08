import type { NextPage } from "next";
import ProfileSidebar from "layout/profile-sidebar";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";

const Settings: NextPage = () => {
  return (
    <div className="page-wrap">
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="profle-are-top">
              <h2 className="section-top-title mb-0">Security Settings</h2>
            </div>
          </div>
        </div>
        <div className="setting-area">
          <div className="container">
            <div className="section-top-wrap">
              <div className="row">
                <div className="col-xl-6 mb-xl-0 mb-4">
                  <div className="card cp-user-custom-card cp-user-setting-card">
                    <div className="card-body">
                      <div className="cp-user-card-header-area">
                        <div className="cp-user-title">
                          <h4>Google Authentication Settings</h4>
                        </div>
                      </div>
                      <div className="cp-user-setting-card-inner">
                        <div className="cp-user-auth-icon">
                          <img src="/gauth.svg" className="img-fluid" alt="" />
                        </div>
                        <div className="cp-user-content mb-0">
                          <h5>Authenticator app</h5>
                          <p>
                            Use the Authenticator app to get free verification
                            codes, even when your phone is offline. Available
                            for Android and iPhone.
                          </p>
                        </div>
                        <div className="cp-user-content mt-0">
                          <a
                            href="javascript:"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            className="btn cp-user-setupbtn"
                          >
                            Set up
                          </a>
                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog" role="document">
                              <form
                                method="post"
                                action="http://localhost:8000/user/g2f-secret-save"
                              >
                                <input
                                  type="hidden"
                                  name="google2fa_secret"
                                  defaultValue="ZKIY6H76QMUBKGBH"
                                />
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      Google Authentication
                                    </h5>
                                    <button
                                      type="button"
                                      className="close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <span aria-hidden="true">×</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="row">
                                      <div className="col-4">
                                        <img
                                          src="https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth%3A%2F%2Ftotp%2FTradexpro%2520Exchange%3Auser%2540email.com%3Fsecret%3DZKIY6H76QMUBKGBH%26issuer%3DTradexpro%2520Exchange"
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                      <div className="col-8">
                                        <p>
                                          Open your Google Authenticator app,
                                          and scan Your secret code and enter
                                          the 6-digit code from the app into the
                                          input field
                                        </p>
                                        <input
                                          placeholder="Code"
                                          type="text"
                                          className="form-control"
                                          name="code"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      Verify
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="cp-user-content">
                          <h5>Security</h5>
                          <p>
                            Please on this option to enable two factor
                            authentication at log In.
                          </p>
                          <form
                            method="post"
                            action="http://localhost:8000/user/google-login-enable"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="UHxumztviDLlLBs3t8g3IMcfQsz9pSMy9wObVejT"
                            />
                            <label className="switch">
                              <input type="checkbox" />
                              <span className="slider round" />
                            </label>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="card cp-user-custom-card cp-user-setting-card">
                    <div className="card-body">
                      <div className="cp-user-card-header-area">
                        <div className="cp-user-title">
                          <h4>Preference Settings</h4>
                        </div>
                      </div>
                      <div className="cp-user-setting-card-inner cp-user-setting-card-inner-preference">
                        <div className="cp-user-content">
                          <form
                            method="post"
                            action="http://localhost:8000/user/save-preference"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              defaultValue="UHxumztviDLlLBs3t8g3IMcfQsz9pSMy9wObVejT"
                            />
                            <div className="form-group">
                              <label>Language</label>
                              <div className="cp-user-preferance-setting">
                                <select name="lang" className="form-control">
                                  <option value="ar">Arabic</option>
                                  <option value="de">German</option>
                                  <option selected value="en">
                                    English
                                  </option>
                                  <option value="es">Spanish</option>
                                  <option value="et">Estonian</option>
                                  <option value="fa">Farsi</option>
                                  <option value="fr">French</option>
                                  <option value="gr">Greece</option>
                                  <option value="id">Indonesian</option>
                                  <option value="it">Italian</option>
                                  <option value="ja">Japanese</option>
                                  <option value="ko">Korean</option>
                                  <option value="nl">Dutch</option>
                                  <option value="pl">Polish</option>
                                  <option value="pt-br">
                                    Portuguese (Brazil)
                                  </option>
                                  <option value="pt">
                                    Portuguese (European)
                                  </option>
                                  <option value="ro">Romanian</option>
                                  <option value="ru">Russian</option>
                                  <option value="th">Thai</option>
                                  <option value="tr">Turkish</option>
                                  <option value="zh-CN">
                                    Chinese (Simplified)
                                  </option>
                                  <option value="zh-HK">
                                    Chinese (Hong Kong)
                                  </option>
                                  <option value="zh-SG">
                                    Chinese (Singapore)
                                  </option>
                                  <option value="zh-TW">
                                    Chinese (Traditional)
                                  </option>
                                  <option value="zh">
                                    Chinese (Singapore)
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <button className="btn cp-user-setupbtn">
                                Update
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
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
  const authStatusForRedirect = await SSRAuthCheck(ctx, "/user/edit-profile");
  return {
    props: {},
  };
};

export default Settings;
