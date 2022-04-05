import type { GetServerSideProps, NextPage } from "next";
import ProfileSidebar from "layout/profile-sidebar";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import Link from "next/link";
import { UserSettingsAction } from "state/actions/settings";
import { useEffect, useState } from "react";
const Security: NextPage = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const [languageList, setLanguageList] = useState<any>([]);
  const [settings, setSettings] = useState<any>();
  const makeEmailSecure = (email: string) => {
    const [first, ...rest] = email.split("@");
    return first[0] + "*****" + "@" + rest.join("@");
  };
  const makePhoneNumberSecure = (phoneNumber: string) => {
    const middleNumbers = phoneNumber.slice(2, 9);
    return phoneNumber.replace(middleNumbers, "*******");
  };
  useEffect(() => {
    UserSettingsAction(setSettings, setLanguageList);
    return () => {
      setSettings(null);
      setLanguageList([]);
    };
  }, []);
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
                    {settings?.user?.google2fa === 0 ? (
                      <a href="#" className="action-btn remove-btn">
                        Disabled
                      </a>
                    ) : (
                      <a href="#" className="action-btn change-btn">
                        Enabled
                      </a>
                    )}

                    {settings?.user?.google2fa === 0 ? (
                      <Link href="/user/settings">
                        <a className="action-btn enable-btn">Enable?</a>
                      </Link>
                    ) : (
                      <Link href="/user/settings">
                        <a href="" className="action-btn remove-btn">
                          Remove ?
                        </a>
                      </Link>
                    )}
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
                    {user.phone ? (
                      <span>{makePhoneNumberSecure(user?.phone)}</span>
                    ) : (
                      <span className="text-danger">No phone number added</span>
                    )}
                  </div>
                  <div className="security-right">
                    {user.phone_verified === 0 ? (
                      <a className="action-btn remove-btn">Unverified</a>
                    ) : (
                      <a className="action-btn change-btn">Verified</a>
                    )}
                    {user.phone_verified === 0 ? (
                      <Link href="/user/phone-verification">
                        <a className="action-btn enable-btn">Verify?</a>
                      </Link>
                    ) : (
                      <a href="" className="action-btn remove-btn">
                        Verified
                      </a>
                    )}
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
                    {user.email ? (
                      <span>{makeEmailSecure(user.email)}</span>
                    ) : (
                      <span className="text-danger">
                        No email address added
                      </span>
                    )}
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
                    <Link href="/user/change-password">
                      <a className="action-btn enable-btn">Change</a>
                    </Link>
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
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/security");
  return {
    props: {},
  };
};
export default Security;
