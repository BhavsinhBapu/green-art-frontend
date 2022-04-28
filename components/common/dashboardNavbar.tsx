import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "state/store";
import { LogoutAction } from "state/actions/user";
const DashboardNavbar = () => {
  const { isLoggedIn, user } = useSelector((state: RootState) => state.user);
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
                  {/* <Link href={"/user/my-wallet"}> */}

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

                  {/* </Link> */}
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
            {isLoggedIn ? (
              <div className="col-xl-2 col-lg-2 col-8">
                <div className="cp-user-top-bar-right">
                  <ul>
                    <li className="hm-notify" id="notification_item">
                      <div className="btn-group dropdown">
                        {/* <button
                        type="button"
                        className="btn notification-btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="notify-value hm-notify-number">0</span>
                        <img
                          src="/notification.png"
                          className="img-fluid"
                          alt="" /
                        />
                      </button> */}
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
                          <button className="dropdown-item" type="button">
                            <a href="-wallet">
                              <i className="fa fa-credit-card"></i> My Wallet
                            </a>
                          </button>
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
                  <div
                    className="cp-user-sidebar-toggler-s2"
                    onClick={() => {
                      //ADD TOGGLE SIDEBAR TO BODY
                      document.body.classList.toggle("_sidebar-cllopse");
                    }}
                  >
                    <img src="/menu.svg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-xl-2 col-lg-2 col-8"></div>
            )}
          </div>
        </div>
      </div>

      <div className="cp-user-sidebar">
        <div className="cp-user-sidebar-menu scrollbar-inner">
          <nav>
            <ul id="metismenu">
              <li className=" cp-user-active-page ">
                <a href="https://tradexpro-laravel.cdibrandstudio.com/user/exchange/dashboard">
                  <span className="cp-user-icon">
                    <img
                      src="https://tradexpro-laravel.cdibrandstudio.com/assets/user/images/sidebar-icons/dashboard.svg"
                      className="img-fluid cp-user-side-bar-icon"
                      alt=""
                    />
                    <img
                      src="https://tradexpro-laravel.cdibrandstudio.com/assets/user/images/sidebar-icons/hover/dashboard.svg"
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
                      src="https://tradexpro-laravel.cdibrandstudio.com/assets/user/images/sidebar-icons/Wallet.svg"
                      className="img-fluid cp-user-side-bar-icon"
                      alt=""
                    />
                    <img
                      src="https://tradexpro-laravel.cdibrandstudio.com/assets/user/images/sidebar-icons/hover/Wallet.svg"
                      className="img-fluid cp-user-side-bar-icon-hover"
                      alt=""
                    />
                  </span>
                  <span className="cp-user-name">Wallet</span>
                </a>
                <ul>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/my-wallet">
                      My Wallet
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/coin-swap">
                      Swap Coin
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="arrow-icon" href="#" aria-expanded="true">
                  <span className="cp-user-icon">
                    <img
                      src="https://tradexpro-laravel.cdibrandstudio.com/assets/user/images/sidebar-icons/Membership.svg"
                      className="img-fluid cp-user-side-bar-icon"
                      alt=""
                    />
                    <img
                      src="https://tradexpro-laravel.cdibrandstudio.com/assets/user/images/sidebar-icons/hover/Membership-1.svg"
                      className="img-fluid cp-user-side-bar-icon-hover"
                      alt=""
                    />
                  </span>
                  <span className="cp-user-name">Reports</span>
                </a>
                <ul>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/wallet-history?type=deposit">
                      Deposit History
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/wallet-history?type=withdrawal">
                      Withdrawal History
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/coin-convert-history">
                      Swap History
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/exchange/all-buy-orders-history">
                      Buy Order History
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/exchange/all-sell-orders-history">
                      Sell Order History
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/exchange/all-transaction-history">
                      Transaction History
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="arrow-icon" href="#" aria-expanded="true">
                  <span className="cp-user-icon">
                    <img
                      src="https://tradexpro-laravel.cdibrandstudio.com/assets/user/images/sidebar-icons/user.svg"
                      className="img-fluid cp-user-side-bar-icon"
                      alt=""
                    />
                    <img
                      src="https://tradexpro-laravel.cdibrandstudio.com/assets/user/images/sidebar-icons/hover/user.svg"
                      className="img-fluid cp-user-side-bar-icon-hover"
                      alt=""
                    />
                  </span>
                  <span className="cp-user-name">My Profile</span>
                </a>
                <ul>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/edit-profile">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/phone-verification">
                      Phone Verification
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/security-setting">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/profile-verification-list">
                      Verification List
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/personal-verification">
                      Personal Verification
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/change-password">
                      Change Password
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/activity">
                      Activity
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://tradexpro-laravel.cdibrandstudio.com/user/referral">
                  <span className="cp-user-icon">
                    <img
                      src="https://tradexpro-laravel.cdibrandstudio.com/assets/user/images/sidebar-icons/referral.svg"
                      className="img-fluid cp-user-side-bar-icon"
                      alt=""
                    />
                    <img
                      src="https://tradexpro-laravel.cdibrandstudio.com/assets/user/images/sidebar-icons/hover/referral.svg"
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
                      src="https://tradexpro-laravel.cdibrandstudio.com/assets/user/images/sidebar-icons/settings.svg"
                      className="img-fluid cp-user-side-bar-icon"
                      alt=""
                    />
                    <img
                      src="https://tradexpro-laravel.cdibrandstudio.com/assets/user/images/sidebar-icons/hover/settings.svg"
                      className="img-fluid cp-user-side-bar-icon-hover"
                      alt=""
                    />
                  </span>
                  <span className="cp-user-name">Settings</span>
                </a>
                <ul>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/setting">
                      My Settings
                    </a>
                  </li>
                  <li>
                    <a href="https://tradexpro-laravel.cdibrandstudio.com/user/faq">
                      FAQ
                    </a>
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
