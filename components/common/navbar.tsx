import React from "react";

const navbar = () => {
  return (
    <div className="cp-user-top-bar">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-2 col-lg-2 col-4">
            <div className="cp-user-logo">
              <a href="http://localhost:8000/user/exchange/dashboard">
                <img
                  src="http://localhost:8000/assets/user/images/logo.svg"
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
                  <a href="http://localhost:8000/user/exchange/dashboard">
                    <span className="cp-user-icon">
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/dashboard.svg"
                        className="img-fluid cp-user-side-bar-icon"
                        alt=""
                      />
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/hover/dashboard.svg"
                        className="img-fluid cp-user-side-bar-icon-hover"
                        alt=""
                      />
                    </span>
                    <span className="cp-user-name">Trade</span>
                  </a>
                </li>
                <li className=" cp-user-active-page  ">
                  <a href="http://localhost:8000/user/my-wallet">
                    <span className="cp-user-icon">
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/Wallet.svg"
                        className="img-fluid cp-user-side-bar-icon"
                        alt=""
                      />
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/hover/Wallet.svg"
                        className="img-fluid cp-user-side-bar-icon-hover"
                        alt=""
                      />
                    </span>
                    <span className="cp-user-name">Wallet</span>
                  </a>
                </li>
                <li className="">
                  <a className="arrow-icon" href="#" aria-expanded="true">
                    <span className="cp-user-icon">
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/Membership.svg"
                        className="img-fluid cp-user-side-bar-icon"
                        alt=""
                      />
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/hover/Membership-1.svg"
                        className="img-fluid cp-user-side-bar-icon-hover"
                        alt=""
                      />
                    </span>
                    <span className="cp-user-name">Reports</span>
                  </a>
                  <ul className="">
                    <li className="">
                      <a href="http://localhost:8000/user/wallet-history?type=deposit">
                        Deposit History
                      </a>
                    </li>
                    <li className="">
                      <a href="http://localhost:8000/user/wallet-history?type=withdrawal">
                        Withdrawal History
                      </a>
                    </li>
                    <li className="">
                      <a href="http://localhost:8000/user/coin-convert-history">
                        Swap History
                      </a>
                    </li>
                    <li className="">
                      <a href="http://localhost:8000/user/exchange/all-buy-orders-history">
                        Buy Order History
                      </a>
                    </li>
                    <li className="">
                      <a href="http://localhost:8000/user/exchange/all-sell-orders-history">
                        Sell Order History
                      </a>
                    </li>
                    <li className="">
                      <a href="http://localhost:8000/user/exchange/all-transaction-history">
                        Transaction History
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <a href="http://localhost:8000/user/profile">
                    <span className="cp-user-icon">
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/user.svg"
                        className="img-fluid cp-user-side-bar-icon"
                        alt=""
                      />
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/hover/user.svg"
                        className="img-fluid cp-user-side-bar-icon-hover"
                        alt=""
                      />
                    </span>
                    <span className="cp-user-name">My Profile</span>
                  </a>
                </li>
                <li className="">
                  <a href="http://localhost:8000/user/referral">
                    <span className="cp-user-icon">
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/referral.svg"
                        className="img-fluid cp-user-side-bar-icon"
                        alt=""
                      />
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/hover/referral.svg"
                        className="img-fluid cp-user-side-bar-icon-hover"
                        alt=""
                      />
                    </span>
                    <span className="cp-user-name">My Referral</span>
                  </a>
                </li>
                <li className="">
                  <a className="arrow-icon" href="#" aria-expanded="true">
                    <span className="cp-user-icon">
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/settings.svg"
                        className="img-fluid cp-user-side-bar-icon"
                        alt=""
                      />
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/hover/settings.svg"
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
                        src="http://localhost:8000/assets/img/icons/notification.png"
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
                            src="http://localhost:8000/assets/img/avater.png"
                            className="img-fluid"
                            alt=""
                          />
                        </span>
                        <span className="cp-user-avater-info"></span>
                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <span className="big-user-thumb">
                        <img
                          src="http://localhost:8000/assets/img/avater.png"
                          className="img-fluid"
                          alt=""
                        />
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
                <img
                  src="http://localhost:8000/assets/user/images/menu.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
