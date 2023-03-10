import type { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { ForgotPasswordAction } from "state/actions/user";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { authPageRequireCheck } from "middlewares/ssr-authentication-check";
import Link from "next/link";
import { RecapCha } from "service/user";
//@ts-ignore
import ReCAPTCHA from "react-google-recaptcha";
import useTranslation from "next-translate/useTranslation";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
const ForgotPassword: NextPage = () => {
  const { settings } = useSelector((state: RootState) => state.common);
  const { t } = useTranslation("common");
  const [processing, setProcessing] = useState(false);
  const [recaptchaData, setRecaptchaData] = useState<any>({});
  const getRecapcha = async () => {
    const response = await RecapCha();
    setRecaptchaData(response.data);
    return response;
  };
  let captcha: any;
  const setCaptchaRef = (ref: any) => {
    if (ref) {
      return (captcha = ref);
    }
  };
  const resetCaptcha = () => {
    captcha?.reset();
  };
  useEffect(() => {
    getRecapcha();
  }, []);
  return (
    <>
      <div className="d-md-flex d-block">
        <div
          className="col-md-5 login_bg_new"
          style={{
            backgroundImage: `url(${settings.login_background})`,
          }}
        >
          <div className="user-content-text text-center text-md-left">
            <Link href="/">
              <a className="auth-logo" href="">
                <img
                  width="65%"
                  src={settings.logo || ""}
                  className="pt-5 pt-md-4"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="d-md-flex d-block align-items-center justify-content-center h-75">
            <div className="text-center text-md-left">
              <h1 className="text-white">
                {t("Welcome To")} {settings.app_title}
              </h1>
              <Link href="/signin">
                <p className="text-white h5">
                  {t("Return to")}
                  <a className="text-theme" href="">
                    {t(" Sign In ")}
                  </a>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-7 d-flex align-items-center login_from_res">
          <div className="row w-100 mx-auto">
            <div className="col-lg-8 col-md-12 mx-md-auto">
              <div className="user-content-text text-left d-block d-md-none">
                <Link href="/">
                  <a className="auth-logo" href="">
                    <img
                      width="60%"
                      src={settings.logo || ""}
                      className="pt-5 pt-md-4"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="user-form border-0 my-4 my-md-0">
                <div className="user-form-inner">
                  <div className="form-top text-left">
                    <h2>{t("Forgot Password ?")}</h2>
                    <p>
                      {t(
                        "Please enter the email address to request a password reset"
                      )}
                    </p>
                  </div>
                  <Formik
                    initialValues={{
                      email: "",
                      recapcha:
                        recaptchaData?.google_recapcha !== "1"
                          ? "ksmaldkmalksmdlkamsdlk"
                          : "",
                    }}
                    validationSchema={Yup.object({
                      email: Yup.string()
                        .email(t("Invalid email address"))
                        .required(t("Email is required")),
                      recapcha: Yup.string()
                        .min(6)
                        .required(t("Recapcha is required")),
                    })}
                    onSubmit={async (values) => {
                      await ForgotPasswordAction(values, setProcessing);
                    }}
                  >
                    {({ errors, touched, setFieldValue }) => (
                      <Form>
                        <div className="form-group">
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            className={`form-control ${
                              touched.email && errors.email ? "is-invalid" : ""
                            }`}
                            placeholder={t("Your email here")}
                          />
                        </div>

                        {recaptchaData?.NOCAPTCHA_SITEKEY &&
                          recaptchaData?.google_recapcha === "1" && (
                            <ReCAPTCHA
                              ref={(r: any) => setCaptchaRef(r)}
                              sitekey={recaptchaData?.NOCAPTCHA_SITEKEY}
                              render="explicit"
                              onChange={(response: any) => {
                                setFieldValue("recapcha", response);
                              }}
                            />
                          )}
                        <button
                          onClick={() => resetCaptcha()}
                          type="submit"
                          className="btn nimmu-user-sibmit-button mt-3"
                        >
                          {processing ? (
                            <>
                              <span
                                className="spinner-border spinner-border-md"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              <span>{t("Please wait")}</span>
                            </>
                          ) : (
                            t("Send")
                          )}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await authPageRequireCheck(ctx);
  return { props: {} };
};
export default ForgotPassword;
