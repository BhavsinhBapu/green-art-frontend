import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsBarChartLine, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { BiLineChart, BiShapeCircle } from "react-icons/bi";
import { BiMoney } from "react-icons/bi";
import { FaPeopleArrows, FaQq, FaTradeFederation } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { RiLuggageDepositLine, RiUserSettingsLine } from "react-icons/ri";
import { IoCardSharp, IoLanguageSharp } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineDocumentReport } from "react-icons/hi";

import { BiWalletAlt } from "react-icons/bi";
import { RiCalendarEventLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "state/store";
import { notification, notificationSeen } from "service/notification";
import useTranslation from "next-translate/useTranslation";
import OutsideClickHandler from "react-outside-click-handler";
import UnAuthNav from "../unAuthNav";
import {
  checkDashboardThemeSettings,
  checkThemeState,
} from "helpers/functions";
import NotificationDropdown from "./notification-dropdown";
import { setNotificationData } from "state/reducer/user";
import { IoMdGlobe } from "react-icons/io";
import {
  REFERRAL_TYPE_DEPOSIT,
  REFERRAL_TYPE_TRADE,
} from "helpers/core-constants";
import { MdOutlineSwapHorizontalCircle, MdTransform } from "react-icons/md";
import { GiBuyCard, GiSellCard, GiTrade } from "react-icons/gi";
import { GoStop } from "react-icons/go";
import { AiFillGift, AiOutlineClose } from "react-icons/ai";

const DemoTradeNavbar = ({
  settings,
  isLoggedIn,
  ThemeColor,
  setThemeColor,
  showSettings = false,
  layout,
  setLayout,
}: any) => {
  const { isLoading, user, logo, notificationData } = useSelector(
    (state: RootState) => state.user
  );
  const [theme, setTheme] = useState(0);
  const dispatch = useDispatch();
  const { navbar } = settings;
  const { t } = useTranslation("common");
  const [active, setActive] = useState(false);
  const router = useRouter();
  const getNotifications = async () => {
    const data = await notification();
    dispatch(setNotificationData(data.data.data));
  };
  useEffect(() => {
    showSettings &&
      checkDashboardThemeSettings(setThemeColor, ThemeColor, setLayout);
  }, []);
  const seen = async () => {
    let arr: any = [];

    notificationData.map((notification: any) => {
      arr.push(notification.id);
    });
    notificationSeen(arr).then((data: any) => {
      dispatch(setNotificationData([]));
    });
  };
  useEffect(() => {
    checkThemeState(setTheme, dispatch);
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
    <>
      {isLoggedIn && (
        <>
          <div className="cp-user-top-bar position-fixed">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "20px" }}
                >
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

                  <nav className="main-menu">
                    <ul>
                      <li
                        className={
                          router.pathname == "/demo-trade"
                            ? "cp-user-active-page"
                            : ""
                        }
                      >
                        <Link
                          href={
                            router.locale !== "en"
                              ? `/${router.locale}/demo-trade`
                              : "/demo-trade"
                          }
                        >
                          <a
                            className="arrow-icon"
                            href="#"
                            aria-expanded="true"
                            style={{ height: "48px" }}
                          >
                            <span className="cp-user-icon">
                              <BsBarChartLine />
                            </span>
                            <span className="cp-user-name">
                              {navbar?.trade?.name
                                ? navbar?.trade?.name
                                : t("Exchange")}
                            </span>
                          </a>
                        </Link>
                        <ul className="dropdown-menu bg-transparent-main">
                          {navbar?.trade?.status && (
                            <Link
                              href={
                                router.locale !== "en"
                                  ? `/${router.locale}/demo-trade`
                                  : "/demo-trade"
                              }
                            >
                              <li
                                className={
                                  router.pathname == "/demo-trade"
                                    ? "cp-user-active-page"
                                    : ""
                                }
                              >
                                <a href="" className="menu-hover">
                                  <span className="cp-user-icon">
                                    {" "}
                                    <BiShapeCircle />{" "}
                                  </span>{" "}
                                  <span>{t("Spot Trading")}</span>
                                </a>
                              </li>
                            </Link>
                          )}
                        </ul>
                      </li>

                      <Link
                        href={
                          isLoggedIn === true
                            ? "/demo-trade/user/my-wallet"
                            : "/signin"
                        }
                      >
                        <li
                          className={
                            router.pathname == "/demo-trade/user/my-wallet"
                              ? "cp-user-active-page"
                              : router.pathname == "/demo-trade/user/swap-coin"
                              ? "cp-user-active-page"
                              : ""
                          }
                        >
                          <a href="">
                            <span className="cp-user-icon">
                              <BiWalletAlt />
                            </span>
                            <span className="cp-user-name">
                              {navbar?.wallet?.name
                                ? navbar?.wallet?.name
                                : t("Wallet")}
                            </span>
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </nav>
                </div>

                <NotificationDropdown
                  isLoggedIn={isLoggedIn}
                  notificationData={notificationData}
                  seen={seen}
                  user={user}
                  theme={theme}
                  settings={settings}
                  setTheme={setTheme}
                  setActive={setActive}
                  active={active}
                  showSettings={showSettings}
                  setThemeColor={setThemeColor}
                  ThemeColor={ThemeColor}
                  layout={layout}
                  setLayout={setLayout}
                />
              </div>
            </div>
          </div>
          <OutsideClickHandler onOutsideClick={() => setActive(false)}>
            <div className={`cp-user-sidebar w-full ${active ? "active" : ""}`}>
              <div className="cp-user-sidebar-menu cp-user-sidebar-menu-mobile scrollbar-inner">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                      <li className="text-right">
                        <span onClick={() => setActive(false)}>
                          <AiOutlineClose size={20} />
                        </span>
                      </li>

                      <li
                        className={
                          router.pathname == "/demo-trade"
                            ? "active-navbar nav-item dropdown"
                            : "nav-item dropdown"
                        }
                      >
                        <a
                          className="nav-link text-primary-color-two dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {navbar?.trade?.name
                            ? navbar?.trade?.name
                            : t("Exchange")}
                        </a>
                        <ul
                          className="dropdown-menu bg-transparent border-0 py-0 my-0"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link
                            href={
                              router.locale !== "en"
                                ? `/${router.locale}/demo-trade`
                                : "/demo-trade"
                            }
                          >
                            <li
                              className={
                                router.pathname == "/demo-trade"
                                  ? "active-navbar"
                                  : ""
                              }
                            >
                              <a
                                href=""
                                className="px-3 py-2 text-primary-color-two"
                                onClick={() => setActive(false)}
                              >
                                <span>{t("Spot Trading")}</span>
                              </a>
                            </li>
                          </Link>
                        </ul>
                      </li>

                      <Link
                        href={
                          isLoggedIn === true
                            ? "/demo-trade/user/my-wallet"
                            : "/signin"
                        }
                      >
                        <li
                          className={
                            router.pathname == "/demo-trade/user/my-wallet"
                              ? "active-navbar nav-item"
                              : "nav-item"
                          }
                        >
                          <a
                            href="#"
                            className="nav-link text-primary-color-two"
                            onClick={() => setActive(false)}
                          >
                            {navbar?.wallet?.name
                              ? navbar?.wallet?.name
                              : t("Wallet")}
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </OutsideClickHandler>
        </>
      )}
    </>
  );
};

export default DemoTradeNavbar;
