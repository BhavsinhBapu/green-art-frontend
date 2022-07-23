import React, { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "state/store";
import { LogoutAction } from "state/actions/user";
const DashboardNavbar = () => {
  const { isLoggedIn, user } = useSelector((state: RootState) => state.user);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cp-user-top-bar dark-board">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-2 col-lg-2 col-4">
              <div className="cp-user-logo">
                <Link href="/">
                  <a href="">
                    <img
                      src="/logo.svg"
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
                  <Link href="/exchange/dashboard">
                    <li>
                      <a href="">
                        <span className="cp-user-icon">
                          <img
                            src="/sidebar-icons/dashboard.svg"
                            className="img-fluid cp-user-side-bar-icon"
                            alt=""
                          />
                          <img
                            src="/sidebar-icons/hover/dashboard.svg"
                            className="img-fluid cp-user-side-bar-icon-hover"
                            alt=""
                          />
                        </span>
                        <span className="cp-user-name">Trade</span>
                      </a>
                    </li>
                  </Link>

                  <Link
                    href={
                      isLoggedIn ? "/user/my-wallet" : "/authentication/signin"
                    }
                  >
                    <li>
                      <a href="">
                        <span className="cp-user-icon">
                          <img
                            src="/sidebar-icons/Wallet.svg"
                            className="img-fluid cp-user-side-bar-icon"
                            alt=""
                          />
                          <img
                            src="/sidebar-icons/Wallet.svg"
                            className="img-fluid cp-user-side-bar-icon-hover"
                            alt=""
                          />
                        </span>
                        <span className="cp-user-name">Wallet</span>
                      </a>
                    </li>
                  </Link>
                  <li>
                    <a className="arrow-icon" href="#" aria-expanded="true">
                      <span className="cp-user-icon">
                        <img
                          src="/sidebar-icons/Membership.svg"
                          className="img-fluid cp-user-side-bar-icon"
                          alt=""
                        />
                        <img
                          src="/sidebar-icons/hover/Membership-1.svg"
                          className="img-fluid cp-user-side-bar-icon-hover"
                          alt=""
                        />
                      </span>
                      <span className="cp-user-name">Reports</span>
                    </a>
                    <ul>
                      <Link
                        href={
                          isLoggedIn
                            ? "/user/wallet-history?type=deposit"
                            : "/authentication/signin"
                        }
                      >
                        <li>
                          <a href="">Deposit History</a>
                        </li>
                      </Link>
                      <Link
                        href={
                          isLoggedIn
                            ? "/user/wallet-history?type=withdrawal"
                            : "/authentication/signin"
                        }
                      >
                        <li>
                          <a href="">Withdrawal History</a>
                        </li>
                      </Link>
                      <Link
                        href={
                          isLoggedIn
                            ? "/user/swap-history"
                            : "/authentication/signin"
                        }
                      >
                        <li>
                          <a href="">Swap History</a>
                        </li>
                      </Link>
                      <Link
                        href={
                          isLoggedIn
                            ? "/user/buy-order-history"
                            : "/authentication/signin"
                        }
                      >
                        <li>
                          <a href="">Buy Order History</a>
                        </li>
                      </Link>
                      <Link
                        href={
                          isLoggedIn
                            ? "/user/sell-order-history"
                            : "/authentication/signin"
                        }
                      >
                        <li>
                          <a href="">Sell Order History</a>
                        </li>
                      </Link>
                      <Link
                        href={
                          isLoggedIn
                            ? "/user/transaction-history"
                            : "/authentication/signin"
                        }
                      >
                        <li>
                          <a href="">Transaction History</a>
                        </li>
                      </Link>
                    </ul>
                  </li>
                  <Link
                    href={
                      isLoggedIn ? "/user/profile" : "/authentication/signin"
                    }
                  >
                    <li>
                      <a href="">
                        <span className="cp-user-icon">
                          <img
                            src="/sidebar-icons/user.svg"
                            className="img-fluid cp-user-side-bar-icon"
                            alt=""
                          />
                          <img
                            src="/sidebar-icons/hover/user.svg"
                            className="img-fluid cp-user-side-bar-icon-hover"
                            alt=""
                          />
                        </span>
                        <span className="cp-user-name">My Profile</span>
                      </a>
                    </li>
                  </Link>
                  <Link
                    href={
                      isLoggedIn ? "/user/referral" : "/authentication/signin"
                    }
                  >
                    <li>
                      <a href="">
                        <span className="cp-user-icon">
                          <img
                            src="/sidebar-icons/referral.svg"
                            className="img-fluid cp-user-side-bar-icon"
                            alt=""
                          />
                          <img
                            src="/sidebar-icons/hover/referral.svg"
                            className="img-fluid cp-user-side-bar-icon-hover"
                            alt=""
                          />
                        </span>
                        <span className="cp-user-name">My Referral</span>
                      </a>
                    </li>
                  </Link>
                  <li>
                    <a className="arrow-icon" href="#" aria-expanded="true">
                      <span className="cp-user-icon">
                        <img
                          src="/sidebar-icons/settings.svg"
                          className="img-fluid cp-user-side-bar-icon"
                          alt=""
                        />
                        <img
                          src="/sidebar-icons/hover/settings.svg"
                          className="img-fluid cp-user-side-bar-icon-hover"
                          alt=""
                        />
                      </span>
                      <span className="cp-user-name">Settings</span>
                    </a>
                    <ul>
                      <Link
                        href={
                          isLoggedIn
                            ? "/user/settings"
                            : "/authentication/signin"
                        }
                      >
                        <li>
                          <a href="">My Settings</a>
                        </li>
                      </Link>
                      <Link
                        href={
                          isLoggedIn ? "/user/faq" : "/authentication/signin"
                        }
                      >
                        <li>
                          <a href="">FAQ</a>
                        </li>
                      </Link>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-xl-2 col-lg-2 col-8">
              <div className="cp-user-top-bar-right">
                {isLoggedIn && (
                  <ul>
                    <li className="hm-notify" id="notification_item">
                      <div className="btn-group dropdown">
                        <div className="dropdown-menu notification-list dropdown-menu-right">
                          <div className="text-center p-2 border-bottom nt-title">
                            New Notifications
                          </div>
                          <div
                            className="scroll-wrapper scrollbar-inner"
                            style={{
                              position: "relative",
                            }}
                          >
                            <ul
                              className="scrollbar-inner scroll-content"
                              style={{
                                height: "auto",
                                marginBottom: "0px",
                                marginRight: "0px",
                                maxHeight: "0px",
                              }}
                            ></ul>
                            <div className="scroll-element scroll-x">
                              <div className="scroll-element_outer">
                                <div className="scroll-element_size"></div>
                                <div className="scroll-element_track"></div>
                                <div className="scroll-bar"></div>
                              </div>
                            </div>
                            <div className="scroll-element scroll-y">
                              <div className="scroll-element_outer">
                                <div className="scroll-element_size"></div>
                                <div className="scroll-element_track"></div>
                                <div className="scroll-bar"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="hm-notify" id="notification_item">
                      <div className="btn-group profile-dropdown">
                        <button
                          type="button"
                          className="btn dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="cp-user-avater">
                            <span className="cp-user-img">
                              {user?.photo && (
                                <img
                                  src={user?.photo}
                                  className="img-fluid"
                                  alt="user"
                                />
                              )}
                            </span>
                            <span className="cp-user-avater-info"></span>
                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <span className="big-user-thumb">
                            <img
                              src={user?.photo}
                              className="img-fluid"
                              alt=""
                            />
                          </span>
                          <div className="user-name">
                            <p>{user?.first_name!}</p>
                          </div>
                          <button className="dropdown-item" type="button">
                            <a href="">
                              <i className="fa fa-user-circle-o"></i> Profile
                            </a>
                          </button>
                          <Link href="/user/settings">
                            <button className="dropdown-item" type="button">
                              <a href="">
                                <i className="fa fa-cog"></i> My Settings
                              </a>
                            </button>
                          </Link>
                          <Link href="/user/my-wallet">
                            <button className="dropdown-item" type="button">
                              <a>
                                <i className="fa fa-credit-card"></i> My Wallet
                              </a>
                            </button>
                          </Link>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => {
                              dispatch(LogoutAction());
                            }}
                          >
                            <a>
                              <i className="fa fa-sign-out"></i> Logout
                            </a>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                )}

                <div
                  className="cp-user-sidebar-toggler-s2"
                  onClick={() => {
                    //ADD TOGGLE SIDEBAR TO BODY
                    // document.body.classList.toggle("sidebar-cllopse");
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

      <div className={`cp-user-sidebar ${active ? "active" : ""}`}>
        <div className="cp-user-sidebar-menu scrollbar-inner">
          <nav>
            <ul id="metismenu">
              <li className=" cp-user-active-page ">
                <a href="">
                  <span className="cp-user-icon">
                    <img
                      src=""
                      className="img-fluid cp-user-side-bar-icon"
                      alt=""
                    />
                    <img
                      src=""
                      className="img-fluid cp-user-side-bar-icon-hover"
                      alt=""
                    />
                  </span>
                  <span className="cp-user-name">Dashboard</span>
                </a>
              </li>
              <li>
                <a className="arrow-icon" href="#" aria-expanded="true">
                  <span className="cp-user-icon">
                    <img
                      src=""
                      className="img-fluid cp-user-side-bar-icon"
                      alt=""
                    />
                    <img
                      src=""
                      className="img-fluid cp-user-side-bar-icon-hover"
                      alt=""
                    />
                  </span>
                  <span className="cp-user-name">Wallet</span>
                </a>
                <ul>
                  <li>
                    <a href="">My Wallet</a>
                  </li>
                  <li>
                    <a href="">Swap Coin</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="arrow-icon" href="#" aria-expanded="true">
                  <span className="cp-user-icon">
                    <img
                      src=""
                      className="img-fluid cp-user-side-bar-icon"
                      alt=""
                    />
                    <img
                      src=""
                      className="img-fluid cp-user-side-bar-icon-hover"
                      alt=""
                    />
                  </span>
                  <span className="cp-user-name">Reports</span>
                </a>
                <ul>
                  <li>
                    <a href="">Deposit History</a>
                  </li>
                  <li>
                    <a href="">Withdrawal History</a>
                  </li>
                  <li>
                    <a href="">Swap History</a>
                  </li>
                  <li>
                    <a href="">Buy Order History</a>
                  </li>
                  <li>
                    <a href="">Sell Order History</a>
                  </li>
                  <li>
                    <a href="">Transaction History</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="arrow-icon" href="#" aria-expanded="true">
                  <span className="cp-user-icon">
                    <img
                      src=""
                      className="img-fluid cp-user-side-bar-icon"
                      alt=""
                    />
                    <img
                      src=""
                      className="img-fluid cp-user-side-bar-icon-hover"
                      alt=""
                    />
                  </span>
                  <span className="cp-user-name">My Profile</span>
                </a>
                <ul>
                  <li>
                    <a href="">Profile</a>
                  </li>
                  <li>
                    <a href="">Edit Profile</a>
                  </li>
                  <li>
                    <a href="">Phone Verification</a>
                  </li>
                  <li>
                    <a href="">Security</a>
                  </li>
                  <li>
                    <a href="">Verification List</a>
                  </li>
                  <li>
                    <a href="">Personal Verification</a>
                  </li>
                  <li>
                    <a href="">Change Password</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">
                  <span className="cp-user-icon">
                    <img
                      src=""
                      className="img-fluid cp-user-side-bar-icon"
                      alt=""
                    />
                    <img
                      src=""
                      className="img-fluid cp-user-side-bar-icon-hover"
                      alt=""
                    />
                  </span>
                  <span className="cp-user-name">My Referral</span>
                </a>
              </li>
              <li>
                <a className="arrow-icon" href="#" aria-expanded="true">
                  <span className="cp-user-icon">
                    <img
                      src=""
                      className="img-fluid cp-user-side-bar-icon"
                      alt=""
                    />
                    <img
                      src=""
                      className="img-fluid cp-user-side-bar-icon-hover"
                      alt=""
                    />
                  </span>
                  <span className="cp-user-name">Settings</span>
                </a>
                <ul>
                  <li>
                    <a href="">My Settings</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
