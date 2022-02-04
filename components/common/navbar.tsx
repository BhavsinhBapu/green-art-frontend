import React from "react";
import Link from "next/link";
const navbar = () => {
  return (
    <div className="cp-user-top-bar">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-2 col-lg-2 col-4">
            <div className="cp-user-logo">
              <a href="http://localhost:8000/user/exchange/dashboard">
                <img
                  src="/logo.svg"
                  className="img-fluid cp-user-logo-large"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 d-none d-lg-block">
            <nav className="main-menu">
              <ul>
                <li className="">
                  <a href="/user/dashboard">
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
                <Link href="/user/my-wallet">
                  <li className=" cp-user-active-page  arrow-icon">
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
                  </li>
                </Link>
                <li className="">
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
                  <ul className="">
                    <Link href="/user/deposit-history?type=deposit">
                      <li className="">
                        <a>Deposit History</a>
                      </li>
                    </Link>
                    <Link href="/user/deposit-history?type=withdraw">
                      <li className="">
                        <a>Withdrawal History</a>
                      </li>
                    </Link>
                    <Link href="/user/swap-history">
                      <li className="">
                        <a>Swap History</a>
                      </li>
                    </Link>
                    <Link href="/user/buy-order-history">
                      <li className="">
                        <a href="">Buy Order History</a>
                      </li>
                    </Link>
                    <Link href="/user/sell-order-history">
                      <li className="">
                        <a href="">Sell Order History</a>
                      </li>
                    </Link>
                    <Link href="/user/transaction-history">
                      <li className="">
                        <a href="">Transaction History</a>
                      </li>
                    </Link>
                  </ul>
                </li>

                <li className="">
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
                <Link href="/referral">
                  <li className="">
                    <a href="http://localhost:8000/user/referral">
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
                <li className="">
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
                  <ul className="">
                    <li className="">
                      <a href="http://localhost:8000/user/setting">
                        My Settings
                      </a>
                    </li>
                    <li className="">
                      <a href="http://localhost:8000/user/faq">FAQ</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-xl-2 col-lg-2 col-8">
            <div className="cp-user-top-bar-right">
              <ul>
                <li className="hm-notify" id="notification_item">
                  <div className="btn-group dropdown">
                    <button
                      type="button"
                      className="btn notification-btn dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="notify-value hm-notify-number"> 0 </span>
                      <img
                        src="/img/icons/notification.png"
                        className="img-fluid"
                        alt=""
                      />
                    </button>
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
                <li>
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
                          <img
                            src="https://www.w3schools.com/howto/img_avatar2.png"
                            className="img-fluid"
                            alt=""
                          />
                        </span>
                        <span className="cp-user-avater-info"></span>
                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <span className="big-user-thumb">
                        <img src="/avater.svg" className="img-fluid" alt="" />
                      </span>
                      <div className="user-name">
                        <p>Mr User</p>
                      </div>
                      <button className="dropdown-item" type="button">
                        <a href="http://localhost:8000/user/profile">
                          <i className="fa fa-user-circle-o"></i> Profile
                        </a>
                      </button>
                      <button className="dropdown-item" type="button">
                        <a href="http://localhost:8000/user/setting">
                          <i className="fa fa-cog"></i> My Settings
                        </a>
                      </button>
                      <button className="dropdown-item" type="button">
                        <a href="http://localhost:8000/user/my-wallet">
                          <i className="fa fa-credit-card"></i> My Wallet
                        </a>
                      </button>
                      <button className="dropdown-item" type="button">
                        <a href="http://localhost:8000/logout">
                          <i className="fa fa-sign-out"></i> Logout
                        </a>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="cp-user-sidebar-toggler-s2">
                <img src="/menu.svg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
