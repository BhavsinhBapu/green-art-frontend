import type { GetServerSideProps, NextPage } from "next";
import ProfileSidebar from "layout/profile-sidebar";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { useEffect, useState } from "react";
import {
  UserSettingsAction,
  SetupGoogle2faAction,
  SetupLanguageAction,
  Google2faLoginAction,
} from "state/actions/settings";
import GoogleAuthModal from "components/settings/GoogleAuthModal";

const Settings: NextPage = () => {
  const [settings, setSettings] = useState<any>();
  const [languageList, setLanguageList] = useState<any>([]);
  const [languageUpdate, setLanguageUpdate] = useState<string>("");
  const [code, setCode] = useState<number>();

  useEffect(() => {
    UserSettingsAction(setSettings, setLanguageList);
    return () => {
      setSettings(null);
      setLanguageList([]);
    };
  }, []);
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
                          {settings?.user?.google2fa === 0 ? (
                            <a
                              href=""
                              data-toggle="modal"
                              data-target="#exampleModal"
                              className="btn cp-user-setupbtn"
                            >
                              Set up
                            </a>
                          ) : (
                            <a
                              href=""
                              data-toggle="modal"
                              data-target="#exampleModal"
                              className=""
                            >
                              Remove Google Authentication
                            </a>
                          )}

                          <GoogleAuthModal
                            settings={settings}
                            setSettings={setSettings}
                          />
                        </div>
                        <div className="cp-user-content">
                          <h5>Security</h5>
                          <p>
                            Please on this option to enable two factor
                            authentication at log In.
                          </p>
                          <form>
                            <input type="hidden" name="" defaultValue="" />
                            <label className="switch">
                              <input
                                type="checkbox"
                                name="google_login_enable"
                                checked={
                                  settings?.user?.g2f_enabled === "1"
                                    ? true
                                    : false
                                }
                                onClick={async (e) => {
                                  const settings = await Google2faLoginAction();
                                  setSettings({
                                    user: settings,
                                  });
                                }}
                              />
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
                                <select
                                  name="lang"
                                  className="form-control"
                                  onChange={(e) => {
                                    setLanguageUpdate(e.target.value);
                                  }}
                                >
                                  {languageList?.map(
                                    (language: any, index: any) => (
                                      <option
                                        key={index}
                                        selected={
                                          settings?.user?.language ===
                                          language?.key
                                        }
                                      >
                                        {language.lang}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <button
                                className="btn cp-user-setupbtn"
                                onClick={(e) => {
                                  e.preventDefault();
                                  SetupLanguageAction(
                                    {
                                      language: languageUpdate,
                                    },
                                    setSettings
                                  );
                                }}
                              >
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
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/settings");
  return {
    props: {},
  };
};

export default Settings;
