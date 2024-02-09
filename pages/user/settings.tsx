import type { GetServerSideProps, NextPage } from "next";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { useEffect, useState } from "react";
import {
  UserSettingsAction,
  Google2faLoginAction,
  UpdateCurrencyAction,
} from "state/actions/settings";
import GoogleAuthModal from "components/settings/GoogleAuthModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store";
import useTranslation from "next-translate/useTranslation";
import Footer from "components/common/footer";
import { customPage, landingPage } from "service/landing-page";
import PlaceBottomRight from "components/gradient/placeBottomRight";
import PlaceTopLeft from "components/gradient/placeTopLeft";
import SecretKeyModal from "components/settings/SecretKeyModal";
import { toast } from "react-toastify";

const Settings: NextPage = () => {
  const dispatch = useDispatch();
  const [isKeyGenerate, setIsKeyGenerate] = useState(true);
  const { t } = useTranslation("common");
  const [settings, setSettings] = useState<any>();
  const { settings: settingsReducer } = useSelector(
    (state: RootState) => state.common
  );
  useEffect(() => {
    dispatch(UserSettingsAction(setSettings));

    return () => {
      setSettings(null);
    };
  }, []);
  return (
    <>
      <div className="page-wrap">
        <div className="page-main-content">
          <div className="container mt-5">
            <div className="section-top-wrap mb-25">
              <div className="profle-are-top">
                <h2 className="section-top-title mb-0">
                  {t("Security Settings")}
                </h2>
              </div>
            </div>
          </div>
          <div className="setting-area">
            <PlaceTopLeft />
            <PlaceBottomRight />
            <div className="container">
              <div className="setting-bg boxShadow mb-4">
                <div className="row">
                  <div className="col-md-6 mb-xl-0 mb-4">
                    <div className="cp-user-setting-card">
                      <div className="card-body">
                        <div className="cp-user-card-header-area">
                          <div className="cp-user-title">
                            <h4>{t("Google Authentication Settings")}</h4>
                          </div>
                        </div>
                        <div className="cp-user-setting-card-inner">
                          <div className="cp-user-auth-icon">
                            <img
                              src="/gauth.svg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="cp-user-content mb-0">
                            <h5>{t("Authenticator app")}</h5>
                          </div>

                          <div className="cp-user-content mt-0">
                            {settings?.user?.google2fa === 0 ? (
                              <a
                                href=""
                                data-toggle="modal"
                                data-target="#exampleModal"
                                className="btn cp-user-setupbtn"
                              >
                                {t("Set up")}
                              </a>
                            ) : (
                              <a
                                href=""
                                data-toggle="modal"
                                data-target="#exampleModal"
                                className=""
                              >
                                {t("Remove Google Authentication")}
                              </a>
                            )}
                          </div>
                          <div className="cp-user-content">
                            <h5>{t("Security")}</h5>
                            <p>
                              {parseInt(settings?.user?.g2f_enabled) === 1
                                ? t(
                                    "Please turn off this option to disable two factor authentication"
                                  )
                                : t(
                                    "Please turn on this option to enable two factor authentication"
                                  )}
                            </p>
                            <form>
                              <input type="hidden" name="" defaultValue="" />
                              <label className="switch">
                                <input
                                  type="checkbox"
                                  name="google_login_enable"
                                  checked={
                                    parseInt(settings?.user?.g2f_enabled) === 1
                                      ? true
                                      : false
                                  }
                                  onChange={async (e) => {
                                    const settingsResponse =
                                      await Google2faLoginAction();
                                    if (settingsResponse?.success === false)
                                      return;
                                    setSettings({
                                      ...settings,
                                      user: settingsResponse,
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
                  <div className="col-md-6 mb-xl-0 mb-4">
                    <div className="cp-user-setting-card">
                      <div className="card-body">
                        <div className="cp-user-card-header-area">
                          <div className="cp-user-title">
                            <h4>{t("Preference Settings")}</h4>
                          </div>
                        </div>
                        <div className="cp-user-setting-card-inner cp-user-setting-card-inner-preference">
                          <div className="cp-user-content">
                            <div className="form-group">
                              <label>{t("Currency")}</label>
                              <div className="cp-user-preferance-setting border-0">
                                <select
                                  name="currency"
                                  className="form-control"
                                  onChange={(e) => {
                                    dispatch(
                                      UpdateCurrencyAction(e.target.value)
                                    );
                                  }}
                                >
                                  {settings?.fiat_currency?.map(
                                    (currency: any, index: any) => (
                                      <option
                                        key={index}
                                        selected={
                                          settingsReducer.currency ===
                                          currency.code
                                        }
                                        defaultChecked={
                                          settingsReducer.currency ===
                                          currency.lang
                                        }
                                        value={currency.code}
                                      >
                                        {currency.name}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-xl-0 mb-4">
                    <div className="card-body">
                      <div className="cp-user-card-header-area">
                        <div className="cp-user-title">
                          <h4>{t("Generate Secret Key")}</h4>
                        </div>
                      </div>
                      <div className="my-3 ">
                        <div
                          className="border rounded d-flex flex-wrap py-2 px-3 align-items-center justify-content-between"
                          style={{ gap: "10px" }}
                        >
                          <div
                            className=" d-flex flex-wrap"
                            style={{ gap: "10px" }}
                          >
                            <p>{t(`Public Key : `)}</p>
                            <p style={{ wordBreak: "break-all" }}>
                              {settingsReducer?.public_key ||
                                process.env.NEXT_PUBLIC_SECRET_KEY}
                            </p>
                          </div>
                          {settingsReducer?.public_key ||
                            (process.env.NEXT_PUBLIC_SECRET_KEY && (
                              <span
                                onClick={() => {
                                  navigator.clipboard.writeText(
                                    settingsReducer?.public_key ||
                                      process.env.NEXT_PUBLIC_SECRET_KEY
                                  );
                                  toast.success("Successfully copied");
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                <i className="fa fa-clone"></i>
                              </span>
                            ))}
                        </div>
                        <div
                          className="border mt-3 rounded px-3 py-2 d-flex flex-wrap"
                          style={{ gap: "10px" }}
                        >
                          <p>{t(`Secret Key : `)}</p>
                          <p>*********************</p>
                        </div>
                      </div>
                      {settingsReducer?.secret_key_available == 1 ? (
                        <button
                          type="button"
                          className="btn btn-primary px-3 py-2"
                          data-toggle="modal"
                          data-target="#secretKeyModal"
                          onClick={() => setIsKeyGenerate(false)}
                        >
                          Show Secret Key
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-primary px-3 py-2"
                          data-toggle="modal"
                          data-target="#secretKeyModal"
                          onClick={() => setIsKeyGenerate(true)}
                        >
                          Generate Secret Key
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <GoogleAuthModal settings={settings} setSettings={setSettings} />
      <SecretKeyModal isKeyGenerate={isKeyGenerate} />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/settings");
  return {
    props: {},
  };
};

export default Settings;
