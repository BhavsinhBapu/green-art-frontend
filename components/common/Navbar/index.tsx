import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsBarChartLine, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { BiShapeCircle } from "react-icons/bi";
import { BiMoney } from "react-icons/bi";
import { FaPeopleArrows, FaQq } from "react-icons/fa";
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
import { checkThemeState } from "helpers/functions";
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

const Navbar = ({ settings, isLoggedIn }: any) => {
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
      {isLoggedIn ? (
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
                      {navbar?.trade?.status && (
                        <li
                          className={
                            router.pathname == "/exchange/dashboard" ||
                            router.pathname == "/p2p"
                              ? "cp-user-active-page"
                              : ""
                          }
                        >
                          <Link
                            href={
                              router.locale !== "en"
                                ? `/${router.locale}/exchange/dashboard`
                                : "/exchange/dashboard"
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
                                    ? `/${router.locale}/exchange/dashboard`
                                    : "/exchange/dashboard"
                                }
                              >
                                <li
                                  className={
                                    router.pathname == "/exchange/dashboard"
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
                            {parseInt(settings?.p2p_module) === 1 && (
                              <Link href={isLoggedIn ? "/p2p" : "/signin"}>
                                <li
                                  className={
                                    router.pathname == "/p2p"
                                      ? "cp-user-active-page"
                                      : ""
                                  }
                                >
                                  <a href="" className="menu-hover">
                                    <span className="cp-user-icon">
                                      <FaPeopleArrows />
                                    </span>
                                    <span>{t("P2P Trading")}</span>
                                  </a>
                                </li>
                              </Link>
                            )}
                          </ul>
                        </li>
                      )}
                      {navbar?.wallet?.status && (
                        <Link
                          href={
                            isLoggedIn === true ? "/user/my-wallet" : "/signin"
                          }
                        >
                          <li
                            className={
                              router.pathname == "/user/my-wallet"
                                ? "cp-user-active-page"
                                : router.pathname == "/user/swap-coin"
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
                      )}
                      {parseInt(settings.launchpad_settings) === 1 &&
                        navbar?.ico?.status && (
                          <Link href={isLoggedIn ? "/ico" : "/signin"}>
                            <li
                              className={
                                router.pathname == "/ico"
                                  ? "cp-user-active-page"
                                  : ""
                              }
                            >
                              <a href="">
                                <span className="cp-user-icon">
                                  <RiCalendarEventLine />
                                </span>
                                <span className="cp-user-name">
                                  {navbar?.ico?.name
                                    ? navbar?.ico?.name
                                    : t("ICO")}
                                </span>
                              </a>
                            </li>
                          </Link>
                        )}

                      {parseInt(settings.currency_deposit_status) === 1 &&
                        navbar?.fiat?.status && (
                          <li
                            className={
                              router.pathname == "/fiat-deposit"
                                ? "cp-user-active-page"
                                : router.pathname == "/fiat-withdrawal"
                                ? "cp-user-active-page"
                                : ""
                            }
                          >
                            <Link
                              href={
                                isLoggedIn === true
                                  ? "/fiat-deposit"
                                  : "/signin"
                              }
                            >
                              <a
                                className="arrow-icon"
                                href="#"
                                aria-expanded="true"
                                style={{ height: "48px" }}
                              >
                                <span className="cp-user-icon">
                                  <FiSettings />
                                </span>
                                <span className="cp-user-name">
                                  {navbar?.fiat?.name
                                    ? navbar?.fiat?.name
                                    : t("Fiat")}
                                </span>
                              </a>
                            </Link>
                            <ul className="dropdown-menu bg-transparent-main">
                              {navbar?.fiat?.deposit?.status && (
                                <Link
                                  href={
                                    isLoggedIn ? "/fiat-deposit" : "/signin"
                                  }
                                >
                                  <li
                                    className={
                                      router.pathname == "/fiat-deposit"
                                        ? "cp-user-active-page"
                                        : ""
                                    }
                                  >
                                    <a href="" className="menu-hover">
                                      <span className="cp-user-icon">
                                        <RiLuggageDepositLine />
                                      </span>
                                      <span>
                                        {navbar?.fiat?.deposit.name
                                          ? navbar?.fiat?.deposit.name
                                          : t("Deposit")}
                                      </span>
                                    </a>
                                  </li>
                                </Link>
                              )}
                              {navbar?.fiat?.withdrawal?.status && (
                                <Link
                                  href={
                                    isLoggedIn ? "/fiat-withdrawal" : "/signin"
                                  }
                                >
                                  <li
                                    className={
                                      router.pathname == "/fiat-withdrawal"
                                        ? "cp-user-active-page"
                                        : ""
                                    }
                                  >
                                    <a href="" className="menu-hover">
                                      <span className="cp-user-icon">
                                        <BiMoney />
                                      </span>
                                      <span>
                                        {navbar?.fiat?.withdrawal.name
                                          ? navbar?.fiat?.withdrawal.name
                                          : t("Withdrawal")}
                                      </span>
                                    </a>
                                  </li>
                                </Link>
                              )}
                            </ul>
                          </li>
                        )}
                      <li
                        className={
                          router.asPath == "/user/swap-history" ||
                          router.asPath == "/user/buy-order-history" ||
                          router.asPath == "/user/sell-order-history" ||
                          router.asPath == "/user/transaction-history" ||
                          router.asPath == "/user/currency-deposit-history" ||
                          router.asPath ==
                            "/user/wallet-history?type=deposit" ||
                          router.asPath ==
                            "/user/wallet-history?type=withdrawal" ||
                          router.asPath == "/user/stop-limit-order-history" ||
                          router.asPath == "/user/currency-withdraw-history" ||
                          router.asPath ==
                            "/user/referral-earning-withdrawal/" +
                              REFERRAL_TYPE_DEPOSIT ||
                          router.asPath ==
                            "/user/referral-earning-trade/" +
                              REFERRAL_TYPE_TRADE
                            ? "cp-user-active-page"
                            : ""
                        }
                      >
                        {navbar?.reports?.status && (
                          <Link
                            href={
                              isLoggedIn
                                ? "/user/wallet-history?type=deposit"
                                : "/signin"
                            }
                          >
                            <a
                              className="arrow-icon"
                              href="#"
                              aria-expanded="true"
                              style={{ height: "48px" }}
                            >
                              <span className="cp-user-icon">
                                <HiOutlineDocumentReport />
                              </span>
                              <span className="cp-user-name">
                                {navbar?.reports?.name
                                  ? navbar?.reports?.name
                                  : t("Reports")}
                              </span>
                            </a>
                          </Link>
                        )}

                        <ul className="dropdown-menu bg-transparent-main">
                          {navbar?.reports?.depositHistory?.status && (
                            <Link
                              href={
                                isLoggedIn
                                  ? "/user/wallet-history?type=deposit"
                                  : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath ==
                                  "/user/wallet-history?type=deposit"
                                    ? "cp-user-active-page"
                                    : ""
                                }
                              >
                                <a href="" className="menu-hover">
                                  <span className="cp-user-icon">
                                    <RiLuggageDepositLine />
                                  </span>
                                  <span>
                                    {navbar?.reports?.depositHistory?.name
                                      ? navbar?.reports?.depositHistory?.name
                                      : t("Deposit History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.reports?.withdrawalHistory?.status && (
                            <Link
                              href={
                                isLoggedIn
                                  ? "/user/wallet-history?type=withdrawal"
                                  : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath ==
                                  "/user/wallet-history?type=withdrawal"
                                    ? "cp-user-active-page"
                                    : ""
                                }
                              >
                                <a href="" className="menu-hover">
                                  <span className="cp-user-icon">
                                    <BiMoney />
                                  </span>
                                  <span>
                                    {navbar?.reports?.withdrawalHistory?.name
                                      ? navbar?.reports?.withdrawalHistory?.name
                                      : t("Withdrawal History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.reports?.swapHistory?.status && (
                            <Link
                              href={
                                isLoggedIn ? "/user/swap-history" : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath == "/user/swap-history"
                                    ? "cp-user-active-page"
                                    : ""
                                }
                              >
                                <a href="" className="menu-hover">
                                  <span className="cp-user-icon">
                                    <MdOutlineSwapHorizontalCircle />
                                  </span>
                                  <span>
                                    {navbar?.reports?.swapHistory?.name
                                      ? navbar?.reports?.swapHistory?.name
                                      : t("Swap History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.reports?.buyOrderHistory?.status && (
                            <Link
                              href={
                                isLoggedIn
                                  ? "/user/buy-order-history"
                                  : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath == "/user/buy-order-history"
                                    ? "cp-user-active-page"
                                    : ""
                                }
                              >
                                <a href="" className="menu-hover">
                                  <span className="cp-user-icon">
                                    <GiBuyCard />
                                  </span>
                                  <span>
                                    {navbar?.reports?.buyOrderHistory?.name
                                      ? navbar?.reports?.buyOrderHistory?.name
                                      : t("Buy Order History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.reports?.sellOrderHistory?.status && (
                            <Link
                              href={
                                isLoggedIn
                                  ? "/user/sell-order-history"
                                  : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath == "/user/sell-order-history"
                                    ? "cp-user-active-page"
                                    : ""
                                }
                              >
                                <a href="" className="menu-hover">
                                  <span className="cp-user-icon">
                                    <GiSellCard />
                                  </span>
                                  <span>
                                    {navbar?.reports?.sellOrderHistory?.name
                                      ? navbar?.reports?.sellOrderHistory?.name
                                      : t("Sell Order History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.reports?.transactionHistory?.status && (
                            <Link
                              href={
                                isLoggedIn
                                  ? "/user/transaction-history"
                                  : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath == "/user/transaction-history"
                                    ? "cp-user-active-page"
                                    : ""
                                }
                              >
                                <a href="" className="menu-hover">
                                  <span className="cp-user-icon">
                                    <MdTransform />
                                  </span>
                                  <span>
                                    {navbar?.reports?.transactionHistory?.name
                                      ? navbar?.reports?.transactionHistory
                                          ?.name
                                      : t("Transaction History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.reports?.fiatDepositHistory?.status &&
                            parseInt(settings.currency_deposit_status) ===
                              1 && (
                              <Link
                                href={
                                  isLoggedIn
                                    ? "/user/currency-deposit-history"
                                    : "/signin"
                                }
                              >
                                <li
                                  className={
                                    router.asPath ==
                                    "/user/currency-deposit-history"
                                      ? "cp-user-active-page"
                                      : ""
                                  }
                                >
                                  <a href="" className="menu-hover">
                                    <span className="cp-user-icon">
                                      <FiSettings />
                                    </span>
                                    <span>
                                      {navbar?.reports?.fiatDepositHistory?.name
                                        ? navbar?.reports?.fiatDepositHistory
                                            ?.name
                                        : t("Fiat Deposit History")}
                                    </span>
                                  </a>
                                </li>
                              </Link>
                            )}
                          <Link
                            href={
                              isLoggedIn
                                ? "/user/stop-limit-order-history"
                                : "/signin"
                            }
                          >
                            <li
                              className={
                                router.asPath ==
                                "/user/stop-limit-order-history"
                                  ? "cp-user-active-page"
                                  : ""
                              }
                            >
                              <a href="" className="menu-hover">
                                <span className="cp-user-icon">
                                  <GoStop />
                                </span>
                                <span>{t("Stop Limit History")}</span>
                              </a>
                            </li>
                          </Link>
                          <Link
                            href={
                              isLoggedIn
                                ? "/user/referral-earning-withdrawal/" +
                                  REFERRAL_TYPE_DEPOSIT
                                : "/signin"
                            }
                          >
                            <li
                              className={
                                router.asPath ==
                                "/user/referral-earning-withdrawal/" +
                                  REFERRAL_TYPE_DEPOSIT
                                  ? "cp-user-active-page"
                                  : ""
                              }
                            >
                              <a href="" className="menu-hover">
                                <span className="cp-user-icon">
                                  <BiMoney />
                                </span>
                                <span>
                                  {t("Referral earning from withdrawal")}
                                </span>
                              </a>
                            </li>
                          </Link>
                          <Link
                            href={
                              isLoggedIn
                                ? "/user/referral-earning-trade/" +
                                  REFERRAL_TYPE_TRADE
                                : "/signin"
                            }
                          >
                            <li
                              className={
                                router.asPath ==
                                "/user/referral-earning-trade/" +
                                  REFERRAL_TYPE_TRADE
                                  ? "cp-user-active-page"
                                  : ""
                              }
                            >
                              <a href="" className="menu-hover">
                                <span className="cp-user-icon">
                                  <GiTrade />
                                </span>
                                <span>{t("Referral earning from trade")}</span>
                              </a>
                            </li>
                          </Link>
                          {navbar?.reports?.fiatWithdrawalHistory?.status && (
                            <Link
                              href={
                                isLoggedIn
                                  ? "/user/currency-withdraw-history"
                                  : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath ==
                                  "/user/currency-withdraw-history"
                                    ? "cp-user-active-page"
                                    : ""
                                }
                              >
                                <a href="" className="menu-hover">
                                  <span className="cp-user-icon">
                                    <BiMoney />
                                  </span>
                                  <span>
                                    {navbar?.reports?.fiatWithdrawalHistory
                                      ?.name
                                      ? navbar?.reports?.fiatWithdrawalHistory
                                          ?.name
                                      : t("Fiat Withdrawal History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                        </ul>
                      </li>
                      {navbar?.myProfile?.status && (
                        <Link href={isLoggedIn ? "/user/profile" : "/signin"}>
                          <li
                            className={
                              router.pathname == "/user/profile"
                                ? "cp-user-active-page"
                                : ""
                            }
                          >
                            <a href="">
                              <span className="cp-user-icon">
                                <CgProfile />
                              </span>
                              <span className="cp-user-name">
                                {navbar?.myProfile?.name
                                  ? navbar?.myProfile?.name
                                  : t("My Profile")}
                              </span>
                            </a>
                          </li>
                        </Link>
                      )}
                      <Link href={isLoggedIn ? "/user/referral" : "/signin"}>
                        <li
                          className={
                            router.pathname == "/user/referral"
                              ? "cp-user-active-page"
                              : ""
                          }
                        >
                          {navbar?.myReferral?.status && (
                            <Link href="/user/referral">
                              <a>
                                <span className="cp-user-icon">
                                  <BiNetworkChart />
                                </span>
                                <span className="cp-user-name">
                                  {navbar?.myReferral?.name
                                    ? navbar.myReferral?.name
                                    : t("My Referral")}
                                </span>
                              </a>
                            </Link>
                          )}
                        </li>
                      </Link>
                      <li
                        className={
                          router.pathname == "/user/settings"
                            ? "cp-user-active-page"
                            : router.pathname == "/user/faq"
                            ? "cp-user-active-page"
                            : ""
                        }
                      >
                        {navbar?.settings?.status && (
                          <Link
                            href={isLoggedIn ? "/user/settings" : "/signin"}
                          >
                            <a
                              className="arrow-icon"
                              href="#"
                              aria-expanded="true"
                              style={{ height: "48px" }}
                            >
                              <span className="cp-user-icon">
                                <FiSettings />
                              </span>
                              <span className="cp-user-name">
                                {navbar?.settings?.name
                                  ? navbar?.settings?.name
                                  : t("Settings")}
                              </span>
                            </a>
                          </Link>
                        )}

                        <ul className="dropdown-menu bg-transparent-main">
                          {navbar?.settings?.mySettings?.status && (
                            <Link
                              href={isLoggedIn ? "/user/settings" : "/signin"}
                            >
                              <li
                                className={
                                  router.pathname == "/user/settings"
                                    ? "cp-user-active-page"
                                    : ""
                                }
                              >
                                <a href="" className="menu-hover">
                                  <span className="cp-user-icon">
                                    <RiUserSettingsLine />
                                  </span>
                                  <span>
                                    {navbar?.settings?.mySettings?.name
                                      ? navbar?.settings?.mySettings?.name
                                      : t("My Settings")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.settings?.faq?.status && (
                            <Link href={isLoggedIn ? "/user/faq" : "/signin"}>
                              <li
                                className={
                                  router.pathname == "/user/faq"
                                    ? "cp-user-active-page"
                                    : ""
                                }
                              >
                                <a href="" className="menu-hover">
                                  <span className="cp-user-icon">
                                    <FaQq />
                                  </span>
                                  <span>
                                    {navbar?.settings?.faq?.name
                                      ? navbar?.settings?.faq?.name
                                      : t("FAQ")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                        </ul>
                      </li>
                      <li
                        className={
                          router.pathname == "/gift-cards" ||
                          router.pathname == "/gift-cards/theme-cards" ||
                          router.pathname == "/gift-cards/my-cards"
                            ? "cp-user-active-page"
                            : ""
                        }
                      >
                        <Link href={isLoggedIn ? "/gift-cards" : "/signin"}>
                          <a
                            className="arrow-icon"
                            href="#"
                            aria-expanded="true"
                            style={{ height: "48px" }}
                          >
                            <span className="cp-user-icon">
                              <AiFillGift />
                            </span>
                            <span className="cp-user-name">
                              {navbar?.giftCards?.name
                                ? navbar?.giftCards?.name
                                : t("Gift Cards")}
                            </span>
                          </a>
                        </Link>

                        <ul className="dropdown-menu bg-transparent-main">
                          <Link
                            href={
                              isLoggedIn ? "/gift-cards/theme-cards" : "/signin"
                            }
                          >
                            <li
                              className={
                                router.pathname == "/gift-cards/theme-cards"
                                  ? "cp-user-active-page"
                                  : ""
                              }
                            >
                              <a href="" className="menu-hover">
                                <span className="cp-user-icon">
                                  <IoCardSharp />
                                </span>
                                <span>
                                  {navbar?.giftCards?.themedCards?.name
                                    ? navbar?.giftCards?.themedCards?.name
                                    : t("Themed Cards")}
                                </span>
                              </a>
                            </li>
                          </Link>

                          <Link
                            href={
                              isLoggedIn ? "/gift-cards/my-cards" : "/signin"
                            }
                          >
                            <li
                              className={
                                router.pathname == "/gift-cards/my-cards"
                                  ? "cp-user-active-page"
                                  : ""
                              }
                            >
                              <a href="" className="menu-hover">
                                <span className="cp-user-icon">
                                  <IoCardSharp />
                                </span>
                                <span>
                                  {navbar?.giftCards?.themedCards?.name
                                    ? navbar?.giftCards?.themedCards?.name
                                    : t("My Cards")}
                                </span>
                              </a>
                            </li>
                          </Link>
                        </ul>
                      </li>
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
                      {navbar?.trade?.status && (
                        <li
                          className={
                            router.pathname == "/exchange/dashboard" ||
                            router.pathname == "/p2p"
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
                            {navbar?.trade?.status && (
                              <Link
                                href={
                                  router.locale !== "en"
                                    ? `/${router.locale}/exchange/dashboard`
                                    : "/exchange/dashboard"
                                }
                              >
                                <li
                                  className={
                                    router.pathname == "/exchange/dashboard"
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
                            )}
                            {parseInt(settings?.p2p_module) === 1 && (
                              <Link href={isLoggedIn ? "/p2p" : "/signin"}>
                                <li
                                  className={
                                    router.pathname == "/p2p"
                                      ? "active-navbar"
                                      : ""
                                  }
                                >
                                  <a
                                    href=""
                                    className="px-3 py-2 text-primary-color-two"
                                    onClick={() => setActive(false)}
                                  >
                                    <span>{t("P2P Trading")}</span>
                                  </a>
                                </li>
                              </Link>
                            )}
                          </ul>
                        </li>
                      )}

                      {navbar?.wallet?.status && (
                        <Link
                          href={
                            isLoggedIn === true ? "/user/my-wallet" : "/signin"
                          }
                        >
                          <li
                            className={
                              router.pathname == "/user/my-wallet"
                                ? "active-navbar nav-item"
                                : router.pathname == "/user/swap-coin"
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
                      )}

                      {parseInt(settings.launchpad_settings) === 1 &&
                        navbar?.ico?.status && (
                          <Link href={isLoggedIn ? "/ico" : "/signin"}>
                            <li
                              className={
                                router.pathname == "/ico"
                                  ? "active-navbar nav-item"
                                  : "nav-item"
                              }
                            >
                              <a
                                href="#"
                                className="nav-link text-primary-color-two"
                                onClick={() => setActive(false)}
                              >
                                {navbar?.ico?.name
                                  ? navbar?.ico?.name
                                  : t("ICO")}
                              </a>
                            </li>
                          </Link>
                        )}

                      {parseInt(settings.currency_deposit_status) === 1 &&
                        navbar?.fiat?.status && (
                          <li
                            className={
                              router.pathname == "/fiat-deposit"
                                ? "active-navbar nav-item dropdown"
                                : router.pathname == "/fiat-withdrawal"
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
                              {navbar?.fiat?.name
                                ? navbar?.fiat?.name
                                : t("Fiat")}
                            </a>
                            <ul
                              className="dropdown-menu bg-transparent border-0 py-0 my-0"
                              aria-labelledby="navbarDropdown"
                            >
                              {navbar?.fiat?.deposit?.status && (
                                <Link
                                  href={
                                    isLoggedIn ? "/fiat-deposit" : "/signin"
                                  }
                                >
                                  <li
                                    className={
                                      router.pathname == "/fiat-deposit"
                                        ? "active-navbar"
                                        : ""
                                    }
                                  >
                                    <a
                                      href=""
                                      className="px-3 py-2 text-primary-color-two"
                                      onClick={() => setActive(false)}
                                    >
                                      <span>
                                        {navbar?.fiat?.deposit.name
                                          ? navbar?.fiat?.deposit.name
                                          : t("Deposit")}
                                      </span>
                                    </a>
                                  </li>
                                </Link>
                              )}
                              {navbar?.fiat?.withdrawal?.status && (
                                <Link
                                  href={
                                    isLoggedIn ? "/fiat-withdrawal" : "/signin"
                                  }
                                >
                                  <li
                                    className={
                                      router.pathname == "/fiat-withdrawal"
                                        ? "active-navbar"
                                        : ""
                                    }
                                  >
                                    <a
                                      href=""
                                      className="px-3 py-2 text-primary-color-two"
                                      onClick={() => setActive(false)}
                                    >
                                      <span>
                                        {navbar?.fiat?.withdrawal.name
                                          ? navbar?.fiat?.withdrawal.name
                                          : t("Withdrawal")}
                                      </span>
                                    </a>
                                  </li>
                                </Link>
                              )}
                            </ul>
                          </li>
                        )}

                      <li
                        className={
                          router.asPath == "/user/swap-history" ||
                          router.asPath == "/user/buy-order-history" ||
                          router.asPath == "/user/sell-order-history" ||
                          router.asPath == "/user/transaction-history" ||
                          router.asPath == "/user/currency-deposit-history" ||
                          router.asPath ==
                            "/user/wallet-history?type=deposit" ||
                          router.asPath ==
                            "/user/wallet-history?type=withdrawal" ||
                          router.asPath == "/user/stop-limit-order-history" ||
                          router.asPath == "/user/currency-withdraw-history" ||
                          router.asPath ==
                            "/user/referral-earning-withdrawal/" +
                              REFERRAL_TYPE_DEPOSIT ||
                          router.asPath ==
                            "/user/referral-earning-trade/" +
                              REFERRAL_TYPE_TRADE
                            ? "active-navbar nav-item dropdown"
                            : "nav-item dropdown"
                        }
                      >
                        {navbar?.reports?.status && (
                          <a
                            className="nav-link text-primary-color-two dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {navbar?.reports?.name
                              ? navbar?.reports?.name
                              : t("Reports")}
                          </a>
                        )}
                        <ul
                          className="dropdown-menu bg-transparent border-0 py-0 my-0"
                          aria-labelledby="navbarDropdown"
                        >
                          {navbar?.reports?.depositHistory?.status && (
                            <Link
                              href={
                                isLoggedIn
                                  ? "/user/wallet-history?type=deposit"
                                  : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath ==
                                  "/user/wallet-history?type=deposit"
                                    ? "active-navbar"
                                    : ""
                                }
                              >
                                <a
                                  href=""
                                  className="px-3 py-2 text-primary-color-two"
                                  onClick={() => setActive(false)}
                                >
                                  <span>
                                    {navbar?.reports?.depositHistory?.name
                                      ? navbar?.reports?.depositHistory?.name
                                      : t("Deposit History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.reports?.withdrawalHistory?.status && (
                            <Link
                              href={
                                isLoggedIn
                                  ? "/user/wallet-history?type=withdrawal"
                                  : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath ==
                                  "/user/wallet-history?type=withdrawal"
                                    ? "active-navbar"
                                    : ""
                                }
                              >
                                <a
                                  href=""
                                  className="px-3 py-2 text-primary-color-two"
                                  onClick={() => setActive(false)}
                                >
                                  <span>
                                    {navbar?.reports?.withdrawalHistory?.name
                                      ? navbar?.reports?.withdrawalHistory?.name
                                      : t("Withdrawal History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.reports?.swapHistory?.status && (
                            <Link
                              href={
                                isLoggedIn ? "/user/swap-history" : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath == "/user/swap-history"
                                    ? "active-navbar"
                                    : ""
                                }
                              >
                                <a
                                  href=""
                                  className="px-3 py-2 text-primary-color-two"
                                  onClick={() => setActive(false)}
                                >
                                  <span>
                                    {navbar?.reports?.swapHistory?.name
                                      ? navbar?.reports?.swapHistory?.name
                                      : t("Swap History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.reports?.buyOrderHistory?.status && (
                            <Link
                              href={
                                isLoggedIn
                                  ? "/user/buy-order-history"
                                  : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath == "/user/buy-order-history"
                                    ? "active-navbar"
                                    : ""
                                }
                              >
                                <a
                                  href=""
                                  className="px-3 py-2 text-primary-color-two"
                                  onClick={() => setActive(false)}
                                >
                                  <span>
                                    {navbar?.reports?.buyOrderHistory?.name
                                      ? navbar?.reports?.buyOrderHistory?.name
                                      : t("Buy Order History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.reports?.sellOrderHistory?.status && (
                            <Link
                              href={
                                isLoggedIn
                                  ? "/user/sell-order-history"
                                  : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath == "/user/sell-order-history"
                                    ? "active-navbar"
                                    : ""
                                }
                              >
                                <a
                                  href=""
                                  className="px-3 py-2 text-primary-color-two"
                                  onClick={() => setActive(false)}
                                >
                                  <span>
                                    {navbar?.reports?.sellOrderHistory?.name
                                      ? navbar?.reports?.sellOrderHistory?.name
                                      : t("Sell Order History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.reports?.transactionHistory?.status && (
                            <Link
                              href={
                                isLoggedIn
                                  ? "/user/transaction-history"
                                  : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath == "/user/transaction-history"
                                    ? "active-navbar"
                                    : ""
                                }
                              >
                                <a
                                  href=""
                                  className="px-3 py-2 text-primary-color-two"
                                  onClick={() => setActive(false)}
                                >
                                  <span>
                                    {navbar?.reports?.transactionHistory?.name
                                      ? navbar?.reports?.transactionHistory
                                          ?.name
                                      : t("Transaction History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.reports?.fiatDepositHistory?.status &&
                            parseInt(settings.currency_deposit_status) ===
                              1 && (
                              <Link
                                href={
                                  isLoggedIn
                                    ? "/user/currency-deposit-history"
                                    : "/signin"
                                }
                              >
                                <li
                                  className={
                                    router.asPath ==
                                    "/user/currency-deposit-history"
                                      ? "active-navbar"
                                      : ""
                                  }
                                >
                                  <a
                                    href=""
                                    className="px-3 py-2 text-primary-color-two"
                                    onClick={() => setActive(false)}
                                  >
                                    <span>
                                      {navbar?.reports?.fiatDepositHistory?.name
                                        ? navbar?.reports?.fiatDepositHistory
                                            ?.name
                                        : t("Fiat Deposit History")}
                                    </span>
                                  </a>
                                </li>
                              </Link>
                            )}
                          <Link
                            href={
                              isLoggedIn
                                ? "/user/stop-limit-order-history"
                                : "/signin"
                            }
                          >
                            <li
                              className={
                                router.asPath ==
                                "/user/stop-limit-order-history"
                                  ? "active-navbar"
                                  : ""
                              }
                            >
                              <a
                                href=""
                                className="px-3 py-2 text-primary-color-two"
                                onClick={() => setActive(false)}
                              >
                                <span>{t("Stop Limit History")}</span>
                              </a>
                            </li>
                          </Link>
                          <Link
                            href={
                              isLoggedIn
                                ? "/user/referral-earning-withdrawal/" +
                                  REFERRAL_TYPE_DEPOSIT
                                : "/signin"
                            }
                          >
                            <li
                              className={
                                router.asPath ==
                                "/user/referral-earning-withdrawal/" +
                                  REFERRAL_TYPE_DEPOSIT
                                  ? "active-navbar"
                                  : ""
                              }
                            >
                              <a
                                href=""
                                className="px-3 py-2 text-primary-color-two"
                                onClick={() => setActive(false)}
                              >
                                <span>
                                  {t("Referral earning from withdrawal")}
                                </span>
                              </a>
                            </li>
                          </Link>
                          <Link
                            href={
                              isLoggedIn
                                ? "/user/referral-earning-trade/" +
                                  REFERRAL_TYPE_TRADE
                                : "/signin"
                            }
                          >
                            <li
                              className={
                                router.asPath ==
                                "/user/referral-earning-trade/" +
                                  REFERRAL_TYPE_TRADE
                                  ? "active-navbar"
                                  : ""
                              }
                            >
                              <a
                                href=""
                                className="px-3 py-2 text-primary-color-two"
                                onClick={() => setActive(false)}
                              >
                                <span>{t("Referral earning from trade")}</span>
                              </a>
                            </li>
                          </Link>
                          {navbar?.reports?.fiatWithdrawalHistory?.status && (
                            <Link
                              href={
                                isLoggedIn
                                  ? "/user/currency-withdraw-history"
                                  : "/signin"
                              }
                            >
                              <li
                                className={
                                  router.asPath ==
                                  "/user/currency-withdraw-history"
                                    ? "active-navbar"
                                    : ""
                                }
                              >
                                <a
                                  href=""
                                  className="px-3 py-2 text-primary-color-two"
                                  onClick={() => setActive(false)}
                                >
                                  <span>
                                    {navbar?.reports?.fiatWithdrawalHistory
                                      ?.name
                                      ? navbar?.reports?.fiatWithdrawalHistory
                                          ?.name
                                      : t("Fiat Withdrawal History")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                        </ul>
                      </li>

                      {navbar?.myProfile?.status && (
                        <Link href={isLoggedIn ? "/user/profile" : "/signin"}>
                          <li
                            className={
                              router.pathname == "/user/profile"
                                ? "active-navbar nav-item"
                                : "nav-item"
                            }
                          >
                            <a
                              href="#"
                              className="nav-link text-primary-color-two"
                              onClick={() => setActive(false)}
                            >
                              <span>
                                {navbar?.myProfile?.name
                                  ? navbar?.myProfile?.name
                                  : t("My Profile")}
                              </span>
                            </a>
                          </li>
                        </Link>
                      )}

                      <Link href={isLoggedIn ? "/user/referral" : "/signin"}>
                        <li
                          className={
                            router.pathname == "/user/referral"
                              ? "active-navbar nav-item"
                              : "nav-item"
                          }
                        >
                          {navbar?.myReferral?.status && (
                            <Link href="/user/referral">
                              <a
                                href="#"
                                className="nav-link text-primary-color-two"
                                onClick={() => setActive(false)}
                              >
                                <span>
                                  {navbar?.myReferral?.name
                                    ? navbar.myReferral?.name
                                    : t("My Referral")}
                                </span>
                              </a>
                            </Link>
                          )}
                        </li>
                      </Link>

                      <li
                        className={
                          router.pathname == "/user/settings"
                            ? "active-navbar nav-item dropdown"
                            : router.pathname == "/user/faq"
                            ? "active-navbar nav-item dropdown"
                            : "nav-item dropdown"
                        }
                      >
                        {navbar?.settings?.status && (
                          <a
                            className="nav-link text-primary-color-two dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span>
                              {navbar?.settings?.name
                                ? navbar?.settings?.name
                                : t("Settings")}
                            </span>
                          </a>
                        )}
                        <ul
                          className="dropdown-menu bg-transparent border-0 py-0 my-0"
                          aria-labelledby="navbarDropdown"
                        >
                          {navbar?.settings?.mySettings?.status && (
                            <Link
                              href={isLoggedIn ? "/user/settings" : "/signin"}
                            >
                              <li
                                className={
                                  router.pathname == "/user/settings"
                                    ? "active-navbar"
                                    : ""
                                }
                              >
                                <a
                                  href=""
                                  className="px-3 py-2 text-primary-color-two"
                                  onClick={() => setActive(false)}
                                >
                                  <span>
                                    {navbar?.settings?.mySettings?.name
                                      ? navbar?.settings?.mySettings?.name
                                      : t("My Settings")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {navbar?.settings?.faq?.status && (
                            <Link href={isLoggedIn ? "/user/faq" : "/signin"}>
                              <li
                                className={
                                  router.pathname == "/user/faq"
                                    ? "active-navbar"
                                    : ""
                                }
                              >
                                <a
                                  href=""
                                  className="px-3 py-2 text-primary-color-two"
                                  onClick={() => setActive(false)}
                                >
                                  <span>
                                    {navbar?.settings?.faq?.name
                                      ? navbar?.settings?.faq?.name
                                      : t("FAQ")}
                                  </span>
                                </a>
                              </li>
                            </Link>
                          )}
                        </ul>
                      </li>
                      <li
                        className={
                          router.pathname == "/gift-cards" ||
                          router.pathname == "/gift-cards/theme-cards" ||
                          router.pathname == "/gift-cards/my-cards"
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
                          <span>
                            {navbar?.giftCards?.name
                              ? navbar?.giftCards?.name
                              : t("Gift Cards")}
                          </span>
                        </a>

                        <ul
                          className="dropdown-menu bg-transparent border-0 py-0 my-0"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link
                            href={
                              isLoggedIn ? "/gift-cards/theme-cards" : "/signin"
                            }
                          >
                            <li
                              className={
                                router.pathname == "/gift-cards/theme-cards"
                                  ? "active-navbar"
                                  : ""
                              }
                            >
                              <a
                                href=""
                                className="px-3 py-2 text-primary-color-two"
                                onClick={() => setActive(false)}
                              >
                                <span>
                                  {navbar?.giftCards?.themedCards?.name
                                    ? navbar?.giftCards?.themedCards?.name
                                    : t("Themed Cards")}
                                </span>
                              </a>
                            </li>
                          </Link>

                          <Link
                            href={
                              isLoggedIn ? "/gift-cards/my-cards" : "/signin"
                            }
                          >
                            <li
                              className={
                                router.pathname == "/gift-cards/my-cards"
                                  ? "active-navbar"
                                  : ""
                              }
                            >
                              <a
                                href=""
                                className="px-3 py-2 text-primary-color-two"
                                onClick={() => setActive(false)}
                              >
                                <span>
                                  {navbar?.giftCards?.themedCards?.name
                                    ? navbar?.giftCards?.themedCards?.name
                                    : t("My Cards")}
                                </span>
                              </a>
                            </li>
                          </Link>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </OutsideClickHandler>
        </>
      ) : !isLoggedIn && isLoading === false ? (
        <UnAuthNav />
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
