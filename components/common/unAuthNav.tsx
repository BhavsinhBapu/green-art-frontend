import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import OutsideClickHandler from "react-outside-click-handler";

import { RootState } from "state/store";
import useTranslation from "next-translate/useTranslation";
import { notification, notificationSeen } from "service/notification";
import { useRouter } from "next/router";
import { checkThemeState, darkModeToggle } from "helpers/functions";
import { IoMdGlobe } from "react-icons/io";

const UnAuthNav = () => {
  const { isLoggedIn, user, logo } = useSelector(
    (state: RootState) => state.user
  );
  const router = useRouter();
  const [theme, setTheme] = useState(0);
  const { settings } = useSelector((state: RootState) => state.common);

  const [active, setActive] = useState(false);
  const [notificationData, setNotification] = useState<any>([]);
  const { t } = useTranslation("common");
  const getNotifications = async () => {
    const data = await notification();
    setNotification(data.data.data);
  };

  useEffect(() => {
    checkThemeState(setTheme);
    isLoggedIn && getNotifications();
  }, [isLoggedIn]);
  useEffect(() => {
    if (router.locale === "ar") {
      document.body.classList.add("rtl-style");
    } else {
      document.body.classList.remove("rtl-style");
    }
  }, [router.locale]);
  return (
    <div className="">
      <div className="cp-user-top-bar ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-2 col-lg-2 col-4">
              <div className="cp-user-logo">
                <Link href="/">
                  <a href="">
                    <img
                      src={logo || ""}
                      className="img-fluid cp-user-logo-large"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
              <nav className="main-menu">
                <ul>
                  <li>
                    <a className="flex" href="#" aria-expanded="true">
                      <span className="ml-2">{t("Exchange")}</span>
                    </a>
                    <ul className="lang-list">
                      <li>
                        <Link href="/exchange/dashboard">
                          <a className="py-1">{t("Spot Trading")}</a>
                        </Link>
                      </li>
                      {parseInt(settings?.p2p_module) === 1 && (
                        <li>
                          <Link href="/p2p">
                            <a className="py-1">{t("P2P Trading")}</a>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </li>
                  <li>
                    <Link href="/signin">{t("Login")}</Link>
                  </li>
                  <li>
                    <Link href="/signup">{t("Sign up")}</Link>
                  </li>
                  <li
                    onClick={() => {
                      darkModeToggle(settings, setTheme);
                    }}
                  >
                    <a href="">
                      {theme === 0 ? (
                        <>
                          <BsFillSunFill size={20} className="mr-2" />
                          {t("Light")}
                        </>
                      ) : (
                        <>
                          <BsFillMoonFill size={14} className="mr-2" />
                          {t("Dark")}
                        </>
                      )}
                    </a>
                  </li>
                  <li>
                    <a className="flex" href="#" aria-expanded="true">
                      <IoMdGlobe size={20} />{" "}
                      <span className="ml-2">
                        {router.locale?.toLocaleUpperCase()}
                      </span>
                    </a>
                    <ul className="lang-list">
                      {settings?.LanguageList?.map((item: any, index: any) => (
                        <li key={index}>
                          <Link href={router.asPath} locale={item.key}>
                            <a className="py-1">{item.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="">
              <div className="cp-user-top-bar-right">
                <div
                  className="cp-user-sidebar-toggler-s2"
                  onClick={() => {
                    setActive(active ? false : true);
                  }}
                >
                  <img src="/menu.svg" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OutsideClickHandler onOutsideClick={() => setActive(false)}>
        <div className={`cp-user-sidebar ${active ? "active" : ""}`}>
          <div
            onClick={() => setActive(false)}
            className="cp-user-sidebar-menu scrollbar-inner"
          >
            <nav>
              <ul id="metismenu">
                <li>
                  <Link href="/exchange/dashboard">{t("Spot Trading")}</Link>
                </li>
                <li>
                  <Link href="/p2p">{t("P2p Trading")}</Link>
                </li>
                <li>
                  <Link href="/signin">{t("Login")}</Link>
                </li>
                <li>
                  <Link href="/signup">{t("Sign up")}</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default UnAuthNav;
