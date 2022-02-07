import type { NextPage } from "next";
import DashboardNavbar from "components/common/dashboardNavbar";
const Dashboard: NextPage = () => {
  return (
    <div className="background-col">
      <DashboardNavbar />
      <div className="cp-user-sidebar">
        <div
          className="scroll-wrapper cp-user-sidebar-menu scrollbar-inner"
          style={{ position: "relative" }}
        >
          <div
            className="cp-user-sidebar-menu scrollbar-inner scroll-content"
            style={{
              height: "auto",
              marginBottom: "0px",
              marginRight: "0px",
              maxHeight: "0px",
            }}
          >
            <nav>
              <ul id="metismenu" className="metismenu">
                <li className=" cp-user-active-page ">
                  <a href="http://localhost:8000/user/exchange/dashboard">
                    <span className="cp-user-icon">
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/dashboard.svg"
                        alt=""
                        className="img-fluid cp-user-side-bar-icon"
                      />{" "}
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/hover/dashboard.svg"
                        alt=""
                        className="img-fluid cp-user-side-bar-icon-hover"
                      />
                    </span>{" "}
                    <span className="cp-user-name">Dashboard</span>
                  </a>
                </li>{" "}
                <li>
                  <a href="#" aria-expanded="true" className="arrow-icon">
                    <span className="cp-user-icon">
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/Wallet.svg"
                        alt=""
                        className="img-fluid cp-user-side-bar-icon"
                      />{" "}
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/hover/Wallet.svg"
                        alt=""
                        className="img-fluid cp-user-side-bar-icon-hover"
                      />
                    </span>{" "}
                    <span className="cp-user-name">Wallet</span>
                  </a>{" "}
                  <ul className="mm-collapse">
                    <li>
                      <a href="http://localhost:8000/user/my-wallet">
                        My Wallet
                      </a>
                    </li>{" "}
                    <li>
                      <a href="http://localhost:8000/user/coin-swap">
                        Swap Coin
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li>
                  <a href="#" aria-expanded="true" className="arrow-icon">
                    <span className="cp-user-icon">
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/Membership.svg"
                        alt=""
                        className="img-fluid cp-user-side-bar-icon"
                      />{" "}
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/hover/Membership-1.svg"
                        alt=""
                        className="img-fluid cp-user-side-bar-icon-hover"
                      />
                    </span>{" "}
                    <span className="cp-user-name">Reports</span>
                  </a>{" "}
                  <ul className="mm-collapse">
                    <li>
                      <a href="http://localhost:8000/user/wallet-history?type=deposit">
                        Deposit History
                      </a>
                    </li>{" "}
                    <li>
                      <a href="http://localhost:8000/user/wallet-history?type=withdrawal">
                        Withdrawal History
                      </a>
                    </li>{" "}
                    <li>
                      <a href="http://localhost:8000/user/coin-convert-history">
                        Swap History
                      </a>
                    </li>{" "}
                    <li>
                      <a href="http://localhost:8000/user/exchange/all-buy-orders-history">
                        Buy Order History
                      </a>
                    </li>{" "}
                    <li>
                      <a href="http://localhost:8000/user/exchange/all-sell-orders-history">
                        Sell Order History
                      </a>
                    </li>{" "}
                    <li>
                      <a href="http://localhost:8000/user/exchange/all-transaction-history">
                        Transaction History
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li>
                  <a href="http://localhost:8000/user/profile">
                    <span className="cp-user-icon">
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/user.svg"
                        alt=""
                        className="img-fluid cp-user-side-bar-icon"
                      />{" "}
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/hover/user.svg"
                        alt=""
                        className="img-fluid cp-user-side-bar-icon-hover"
                      />
                    </span>{" "}
                    <span className="cp-user-name">My Profile</span>
                  </a>
                </li>{" "}
                <li>
                  <a href="http://localhost:8000/user/referral">
                    <span className="cp-user-icon">
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/referral.svg"
                        alt=""
                        className="img-fluid cp-user-side-bar-icon"
                      />{" "}
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/hover/referral.svg"
                        alt=""
                        className="img-fluid cp-user-side-bar-icon-hover"
                      />
                    </span>{" "}
                    <span className="cp-user-name">My Referral</span>
                  </a>
                </li>{" "}
                <li>
                  <a href="#" aria-expanded="true" className="arrow-icon">
                    <span className="cp-user-icon">
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/settings.svg"
                        alt=""
                        className="img-fluid cp-user-side-bar-icon"
                      />{" "}
                      <img
                        src="http://localhost:8000/assets/user/images/sidebar-icons/hover/settings.svg"
                        alt=""
                        className="img-fluid cp-user-side-bar-icon-hover"
                      />
                    </span>{" "}
                    <span className="cp-user-name">Settings</span>
                  </a>{" "}
                  <ul className="mm-collapse">
                    <li>
                      <a href="http://localhost:8000/user/setting">
                        My Settings
                      </a>
                    </li>{" "}
                    <li>
                      <a href="http://localhost:8000/user/faq">FAQ</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="scroll-element scroll-x">
            <div className="scroll-element_outer">
              <div className="scroll-element_size" />
              <div className="scroll-element_track" />
              <div className="scroll-bar" />
            </div>
          </div>
          <div className="scroll-element scroll-y">
            <div className="scroll-element_outer">
              <div className="scroll-element_size" />
              <div className="scroll-element_track" />
              <div className="scroll-bar" />
            </div>
          </div>
        </div>
      </div>{" "}
      <div
        id="notificationShow"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        className="modal fade"
      >
        <div
          role="document"
          className="modal-dialog modal-lg modal-dialog-centered"
        >
          <div className="modal-content dark-modal">
            <div className="modal-header align-items-center">
              <h5 id="exampleModalCenterTitle" className="modal-title">
                New Notifications
              </h5>{" "}
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                className="close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>{" "}
            <div className="modal-body">
              <div className="hm-form">
                <div className="row">
                  <div className="col-12">
                    <h6 id="n_title" /> <p id="n_date" /> <p id="n_notice" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="cp-user-main-wrapper-dashboard">
        <div className="container-fluid">
          <div
            role="alert"
            id="web_socket_notification"
            className="alert alert-success alert-dismissible fade show d-none"
          >
            <span id="socket_message" />{" "}
            <button
              type="button"
              data-dismiss="alert"
              aria-label="Close"
              className="close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>{" "}
          <div
            id="confirm-modal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            className="modal fade"
          >
            <div role="document" className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <button
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="close"
                >
                  <img
                    src="http://localhost:8000/assets/user/images/close.svg"
                    alt=""
                    className="img-fluid"
                  />
                </button>{" "}
                <div className="text-center">
                  <img
                    src="http://localhost:8000/assets/user/images/add-pockaet-vector.svg"
                    alt=""
                    className="img-fluid img-vector"
                  />{" "}
                  <h3 id="confirm-title" />
                </div>{" "}
                <div className="modal-body">
                  <a
                    id="confirm-link"
                    href="#"
                    className="btn btn-block cp-user-move-btn"
                  >
                    Confirm
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="cp-user-custom-card exchange-area">
            <div id="dashboard">
              <div className="row">
                <div className="col-xl-12">
                  <div className="cxchange-summary-wrap">
                    <div className="cxchange-summary-name">
                      <div className="summber-coin-type">
                        <span className="coin-badge">BTC/USDT</span>{" "}
                        <i aria-hidden="true" className="fa fa-angle-down" />{" "}
                        <div className="cp-user-buy-coin-content-area">
                          <div className="cp-user-wallet-table dashboard-coin_pairs table-responsive">
                            <div
                              id="exchangeCoinPair_wrapper"
                              className="dataTables_wrapper no-footer"
                            >
                              <div
                                id="exchangeCoinPair_filter"
                                className="dataTables_filter"
                              >
                                <label>
                                  <input
                                    type="search"
                                    className=""
                                    placeholder="Search"
                                    aria-controls="exchangeCoinPair"
                                  />
                                </label>
                              </div>
                              <div
                                id="exchangeCoinPair_processing"
                                className="dataTables_processing"
                                style={{ display: "none" }}
                              >
                                Processing...
                              </div>
                              <div className="dataTables_scroll">
                                <div
                                  className="dataTables_scrollHead"
                                  style={{
                                    overflow: "hidden",
                                    position: "relative",
                                    border: "0px",
                                    width: "100%",
                                  }}
                                >
                                  <div
                                    className="dataTables_scrollHeadInner"
                                    style={{
                                      boxSizing: "content-box",
                                      width: "415px",
                                      paddingRight: "17px",
                                    }}
                                  >
                                    <table
                                      className="table dataTable no-footer"
                                      role="grid"
                                      style={{
                                        marginLeft: "0px",
                                        width: "415px",
                                      }}
                                    >
                                      <thead>
                                        <tr role="row">
                                          <th
                                            className="text-left text-green w-30 sorting_asc"
                                            tabIndex={0}
                                            aria-controls="exchangeCoinPair"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "104.672px" }}
                                            aria-label="Coins: activate to sort column descending"
                                            aria-sort="ascending"
                                          >
                                            Coins
                                          </th>
                                          <th
                                            className="text-center w-40 sorting"
                                            tabIndex={0}
                                            aria-controls="exchangeCoinPair"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "103.281px" }}
                                            aria-label="Last: activate to sort column ascending"
                                          >
                                            Last
                                          </th>
                                          <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="exchangeCoinPair"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "147.047px" }}
                                            aria-label="Balance: activate to sort column ascending"
                                          >
                                            Balance
                                          </th>
                                        </tr>
                                      </thead>
                                    </table>
                                  </div>
                                </div>
                                <div
                                  className="dataTables_scrollBody"
                                  style={{
                                    position: "relative",
                                    overflow: "auto",
                                    height: "448px",
                                    width: "100%",
                                  }}
                                >
                                  <table
                                    id="exchangeCoinPair"
                                    className="table dataTable no-footer"
                                    role="grid"
                                    style={{ width: "100%" }}
                                  >
                                    <thead>
                                      <tr role="row" style={{ height: "0px" }}>
                                        <th
                                          className="text-left text-green w-30 sorting_asc"
                                          aria-controls="exchangeCoinPair"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "104.672px",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            borderTopWidth: "0px",
                                            borderBottomWidth: "0px",
                                            height: "0px",
                                          }}
                                          aria-label="Coins: activate to sort column descending"
                                          aria-sort="ascending"
                                        >
                                          <div
                                            className="dataTables_sizing"
                                            style={{
                                              height: 0,
                                              overflow: "hidden",
                                            }}
                                          >
                                            Coins
                                          </div>
                                        </th>
                                        <th
                                          className="text-center w-40 sorting"
                                          aria-controls="exchangeCoinPair"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "103.281px",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            borderTopWidth: "0px",
                                            borderBottomWidth: "0px",
                                            height: "0px",
                                          }}
                                          aria-label="Last: activate to sort column ascending"
                                        >
                                          <div
                                            className="dataTables_sizing"
                                            style={{
                                              height: 0,
                                              overflow: "hidden",
                                            }}
                                          >
                                            Last
                                          </div>
                                        </th>
                                        <th
                                          className="sorting"
                                          aria-controls="exchangeCoinPair"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "147.047px",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            borderTopWidth: "0px",
                                            borderBottomWidth: "0px",
                                            height: "0px",
                                          }}
                                          aria-label="Balance: activate to sort column ascending"
                                        >
                                          <div
                                            className="dataTables_sizing"
                                            style={{
                                              height: 0,
                                              overflow: "hidden",
                                            }}
                                          >
                                            Balance
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>{" "}
                                    <tbody>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-BCH_BTC"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={1}
                                            data-tradeid={5}
                                          >
                                            BCH/BTC
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-BCH_DASH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={6}
                                            data-tradeid={5}
                                          >
                                            BCH/DASH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-BCH_DOGE"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={4}
                                            data-tradeid={5}
                                          >
                                            BCH/DOGE
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-BCH_ETH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={2}
                                            data-tradeid={5}
                                          >
                                            BCH/ETH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-BCH_LTC"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={3}
                                            data-tradeid={5}
                                          >
                                            BCH/LTC
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-BCH_USDT"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={7}
                                            data-tradeid={5}
                                          >
                                            BCH/USDT
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-BTC_BCH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={5}
                                            data-tradeid={1}
                                          >
                                            BTC/BCH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-BTC_DASH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={6}
                                            data-tradeid={1}
                                          >
                                            BTC/DASH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-BTC_DOGE"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={4}
                                            data-tradeid={1}
                                          >
                                            BTC/DOGE
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-BTC_ETH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={2}
                                            data-tradeid={1}
                                          >
                                            BTC/ETH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-BTC_LTC"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={3}
                                            data-tradeid={1}
                                          >
                                            BTC/LTC
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even selected"
                                        id="market-BTC_USDT"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={7}
                                            data-tradeid={1}
                                          >
                                            BTC/USDT
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-DASH_BCH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={5}
                                            data-tradeid={6}
                                          >
                                            DASH/BCH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-DASH_BTC"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={1}
                                            data-tradeid={6}
                                          >
                                            DASH/BTC
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-DASH_DOGE"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={4}
                                            data-tradeid={6}
                                          >
                                            DASH/DOGE
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-DASH_ETH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={2}
                                            data-tradeid={6}
                                          >
                                            DASH/ETH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-DASH_LTC"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={3}
                                            data-tradeid={6}
                                          >
                                            DASH/LTC
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-DASH_USDT"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={7}
                                            data-tradeid={6}
                                          >
                                            DASH/USDT
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-DOGE_BCH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={5}
                                            data-tradeid={4}
                                          >
                                            DOGE/BCH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-DOGE_BTC"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={1}
                                            data-tradeid={4}
                                          >
                                            DOGE/BTC
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-DOGE_DASH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={6}
                                            data-tradeid={4}
                                          >
                                            DOGE/DASH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-DOGE_ETH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={2}
                                            data-tradeid={4}
                                          >
                                            DOGE/ETH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-DOGE_LTC"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={3}
                                            data-tradeid={4}
                                          >
                                            DOGE/LTC
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-DOGE_USDT"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={7}
                                            data-tradeid={4}
                                          >
                                            DOGE/USDT
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-ETH_BCH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={5}
                                            data-tradeid={2}
                                          >
                                            ETH/BCH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-ETH_BTC"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={1}
                                            data-tradeid={2}
                                          >
                                            ETH/BTC
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-ETH_DASH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={6}
                                            data-tradeid={2}
                                          >
                                            ETH/DASH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-ETH_DOGE"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={4}
                                            data-tradeid={2}
                                          >
                                            ETH/DOGE
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-ETH_LTC"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={3}
                                            data-tradeid={2}
                                          >
                                            ETH/LTC
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-ETH_USDT"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={7}
                                            data-tradeid={2}
                                          >
                                            ETH/USDT
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-LTC_BCH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={5}
                                            data-tradeid={3}
                                          >
                                            LTC/BCH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-LTC_BTC"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={1}
                                            data-tradeid={3}
                                          >
                                            LTC/BTC
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-LTC_DASH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={6}
                                            data-tradeid={3}
                                          >
                                            LTC/DASH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-LTC_DOGE"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={4}
                                            data-tradeid={3}
                                          >
                                            LTC/DOGE
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-LTC_ETH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={2}
                                            data-tradeid={3}
                                          >
                                            LTC/ETH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-LTC_USDT"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={7}
                                            data-tradeid={3}
                                          >
                                            LTC/USDT
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-USDT_BCH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={5}
                                            data-tradeid={7}
                                          >
                                            USDT/BCH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-USDT_BTC"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={1}
                                            data-tradeid={7}
                                          >
                                            USDT/BTC
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-USDT_DASH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={6}
                                            data-tradeid={7}
                                          >
                                            USDT/DASH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-USDT_DOGE"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={4}
                                            data-tradeid={7}
                                          >
                                            USDT/DOGE
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="odd"
                                        id="market-USDT_ETH"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={2}
                                            data-tradeid={7}
                                          >
                                            USDT/ETH
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                      <tr
                                        role="row"
                                        className="even"
                                        id="market-USDT_LTC"
                                      >
                                        <td
                                          className="text-left text-green w-30 sorting_1"
                                          style={{ padding: "5px" }}
                                        >
                                          <a
                                            className="text-info select_coin_pair p-0 m-0"
                                            data-baseid={3}
                                            data-tradeid={7}
                                          >
                                            USDT/LTC
                                          </a>
                                        </td>
                                        <td
                                          className=" text-center w-40"
                                          style={{ padding: "5px" }}
                                        >
                                          0.0000
                                        </td>
                                        <td style={{ padding: "5px" }}>
                                          0.000
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <span className="font-weight-bold">Bitcoin</span>
                    </div>{" "}
                    <div className="cxchange-summary-featured">
                      <ul className="cxchange-summary-items">
                        <li>
                          <span className="label">Last price</span>{" "}
                          <span className="value">0.00000000</span>
                        </li>{" "}
                        <li>
                          <span className="label">24h change</span>{" "}
                          <span className="value decrease">0.00000000</span>
                        </li>{" "}
                        <li>
                          <span className="label">24h high</span>{" "}
                          <span className="value">0.00000000</span>
                        </li>{" "}
                        <li>
                          <span className="label">24h Low</span>{" "}
                          <span className="value">0.00000000</span>
                        </li>{" "}
                        <li>
                          <span className="label"> 24h volume: </span>{" "}
                          <span className="value">0.00000000</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-xl-6">
                  <div className="cp-user-buy-coin-content-area">
                    <div className="card cp-user-custom-card">
                      <div className="card-body">
                        <div className="cp-user-card-header-area">
                          <div className="cp-user-title">
                            <h4>Trade chart</h4>
                          </div>
                        </div>{" "}
                        <div className="graph-loader">
                          <div
                            id="trade_chart_container"
                            className="h-100"
                            style={{ visibility: "visible" }}
                          >
                            <iframe
                              id="tradingview_6a41e"
                              name="tradingview_6a41e"
                              src="http://localhost:8000/assets/exchange/chart_library/static/en-tv-chart.aa0061904b783ada8056.html#symbol=BTC%E2%88%92USDT&interval=24&toolbarbg=262626&widgetbar=%7B%22details%22%3Afalse%2C%22watchlist%22%3Afalse%2C%22watchlist_settings%22%3A%7B%22default_symbols%22%3A%5B%5D%7D%7D&timeFrames=%5B%7B%22text%22%3A%225y%22%2C%22resolution%22%3A%221440%22%2C%22description%22%3A%22All%22%2C%22title%22%3A%22All%22%2C%22value%22%3A%2260m%22%2C%22from%22%3A0%7D%2C%7B%22text%22%3A%221y%22%2C%22resolution%22%3A%221440%22%2C%22description%22%3A%221%20Year%22%2C%22value%22%3A%2212m%22%2C%22from%22%3A31536000%7D%2C%7B%22text%22%3A%223m%22%2C%22resolution%22%3A%221440%22%2C%22description%22%3A%223%20Months%22%2C%22value%22%3A%223m%22%2C%22from%22%3A7776000%7D%2C%7B%22text%22%3A%221m%22%2C%22resolution%22%3A%22240%22%2C%22description%22%3A%221%20Month%22%2C%22value%22%3A%221m%22%2C%22from%22%3A2592000%7D%2C%7B%22text%22%3A%227d%22%2C%22resolution%22%3A%22120%22%2C%22description%22%3A%227%20Days%22%2C%22value%22%3A%227d%22%2C%22from%22%3A604800%7D%2C%7B%22text%22%3A%223d%22%2C%22resolution%22%3A%2230%22%2C%22description%22%3A%223%20Days%22%2C%22value%22%3A%223d%22%2C%22from%22%3A259200%7D%2C%7B%22text%22%3A%221d%22%2C%22resolution%22%3A%2215%22%2C%22description%22%3A%221%20Day%22%2C%22value%22%3A%221d%22%2C%22from%22%3A86400%7D%5D&locale=en&uid=tradingview_6a41e&clientId=tradingview.com&userId=public_user_id&chartsStorageVer=1.1&customCSS=http%3A%2F%2Flocalhost%3A8000%2Fassets%2Fexchange%2Fchart_library%2Fstyle.css&debug=false&timezone=Etc%2FUTC&theme=dark"
                              frameBorder={0}
                              scrolling="no"
                              allowFullScreen
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="orders-area mt-4">
                    <div className="orders-area-top">
                      <div className="top-left">
                        <ul
                          id="ordersTab"
                          role="tablist"
                          className="nav nav-tabs"
                        >
                          <li role="presentation" className="nav-item">
                            <a
                              id="Open-orders-tab"
                              data-toggle="tab"
                              href="#Open-orders"
                              role="tab"
                              aria-controls="Open-orders"
                              aria-selected="true"
                              className="nav-link active"
                            >
                              Open orders
                            </a>
                          </li>{" "}
                          <li role="presentation" className="nav-item">
                            <a
                              id="Order-history-tab"
                              data-toggle="tab"
                              href="#Order-history"
                              role="tab"
                              aria-controls="Order-history"
                              aria-selected="false"
                              className="nav-link"
                            >
                              Order history
                            </a>
                          </li>{" "}
                          <li role="presentation" className="nav-item">
                            <a
                              id="Trade-history-tab"
                              data-toggle="tab"
                              href="#Trade-history"
                              role="tab"
                              aria-controls="Trade-history"
                              aria-selected="false"
                              className="nav-link"
                            >
                              Trade history
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>{" "}
                    <div id="ordersTabContent" className="tab-content">
                      <div
                        id="Open-orders"
                        role="tabpanel"
                        aria-labelledby="Open-orders-tab"
                        className="tab-pane fade show active"
                      >
                        <div className="table-responsive">
                          <table id="myOrderBookTable" className="table">
                            <thead>
                              <tr>
                                <th>Date</th> <th>Type</th>{" "}
                                <th>
                                  Amount(<span>BTC</span>)
                                </th>{" "}
                                <th>
                                  Price(<span>USDT</span>)
                                </th>{" "}
                                <th>
                                  Total(<span>USDT</span>)
                                </th>{" "}
                                <th>
                                  Fees(<span>USDT</span>)
                                </th>{" "}
                                <th>Action</th>
                              </tr>
                            </thead>{" "}
                            <tbody />
                          </table>
                        </div>
                      </div>{" "}
                      <div
                        id="Order-history"
                        role="tabpanel"
                        aria-labelledby="Order-history-tab"
                        className="tab-pane fade"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="table-responsive">
                              <table id="myBuyOrderBookTable" className="table">
                                <thead>
                                  <tr>
                                    <th>Date</th>{" "}
                                    <th>
                                      Amount(<span>BTC</span>)
                                    </th>{" "}
                                    <th>
                                      Price(<span>USDT</span>)
                                    </th>{" "}
                                    <th>Status</th>
                                  </tr>
                                </thead>{" "}
                                <tbody />
                              </table>
                            </div>
                          </div>{" "}
                          <div className="col-md-6">
                            <div className="table-responsive">
                              <table
                                id="mySellOrderBookTable"
                                className="table"
                              >
                                <thead>
                                  <tr>
                                    <th>Date</th>{" "}
                                    <th>
                                      Amount(<span>BTC</span>)
                                    </th>{" "}
                                    <th>
                                      Price(<span>USDT</span>)
                                    </th>{" "}
                                    <th>Status</th>
                                  </tr>
                                </thead>{" "}
                                <tbody />
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <div
                        id="Trade-history"
                        role="tabpanel"
                        aria-labelledby="Trade-history-tab"
                        className="tab-pane fade"
                      >
                        <div className="table-responsive">
                          <table id="myTradeTable" className="table">
                            <thead>
                              <tr>
                                <th>
                                  Price(<span>USDT</span>)
                                </th>{" "}
                                <th>Amount</th> <th>Time</th>
                              </tr>
                            </thead>{" "}
                            <tbody />
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="trades-section">
                        <div className="trades-headers mb-3">
                          <h3>Order Book</h3>
                        </div>{" "}
                        <div className="buy-order">
                          <div className="trades-table">
                            <div className="trades-table-header">
                              <div className="trades-table-row" />
                            </div>
                            <div className="trades-table-body" />
                            <div
                              id="exchangeAllBuyOrders_wrapper"
                              className="dataTables_wrapper no-footer"
                            >
                              <div
                                id="exchangeAllBuyOrders_processing"
                                className="dataTables_processing"
                                style={{ display: "none" }}
                              >
                                Processing...
                              </div>
                              <div className="dataTables_scroll">
                                <div
                                  className="dataTables_scrollHead"
                                  style={{
                                    overflow: "hidden",
                                    position: "relative",
                                    border: "0px",
                                    width: "100%",
                                  }}
                                >
                                  <div
                                    className="dataTables_scrollHeadInner"
                                    style={{
                                      boxSizing: "content-box",
                                      width: "431.25px",
                                      paddingRight: "0px",
                                    }}
                                  >
                                    <table
                                      className="table dataTable no-footer"
                                      role="grid"
                                      style={{
                                        marginLeft: "0px",
                                        width: "431.25px",
                                      }}
                                    >
                                      <thead>
                                        <tr role="row">
                                          <th
                                            className="trades-table-col price text-pink w-30 sorting_desc"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "109.906px" }}
                                            aria-label="Price(USDT)"
                                          >
                                            Price(<span>USDT</span>)
                                          </th>
                                          <th
                                            className="trades-table-col amount text-center w-30 sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "133.656px" }}
                                            aria-label="Amount"
                                          >
                                            Amount
                                          </th>
                                          <th
                                            className="trades-table-col volume sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "127.688px" }}
                                            aria-label="	My Size"
                                          >
                                            {" "}
                                            My Size
                                          </th>
                                        </tr>
                                      </thead>
                                    </table>
                                  </div>
                                </div>
                                <div
                                  className="dataTables_scrollBody"
                                  style={{
                                    position: "relative",
                                    overflow: "auto",
                                    height: "425px",
                                    width: "100%",
                                  }}
                                >
                                  <table
                                    id="exchangeAllBuyOrders"
                                    className="table dataTable no-footer"
                                    role="grid"
                                    style={{ width: "100%" }}
                                  >
                                    <thead>
                                      <tr role="row" style={{ height: "0px" }}>
                                        <th
                                          className="trades-table-col price text-pink w-30 sorting_desc"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "109.906px",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            borderTopWidth: "0px",
                                            borderBottomWidth: "0px",
                                            height: "0px",
                                          }}
                                          aria-label="Price(USDT)"
                                        >
                                          <div
                                            className="dataTables_sizing"
                                            style={{
                                              height: 0,
                                              overflow: "hidden",
                                            }}
                                          >
                                            Price(<span>USDT</span>)
                                          </div>
                                        </th>
                                        <th
                                          className="trades-table-col amount text-center w-30 sorting_disabled"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "133.656px",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            borderTopWidth: "0px",
                                            borderBottomWidth: "0px",
                                            height: "0px",
                                          }}
                                          aria-label="Amount"
                                        >
                                          <div
                                            className="dataTables_sizing"
                                            style={{
                                              height: 0,
                                              overflow: "hidden",
                                            }}
                                          >
                                            Amount
                                          </div>
                                        </th>
                                        <th
                                          className="trades-table-col volume sorting_disabled"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "127.688px",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            borderTopWidth: "0px",
                                            borderBottomWidth: "0px",
                                            height: "0px",
                                          }}
                                          aria-label="	My Size"
                                        >
                                          <div
                                            className="dataTables_sizing"
                                            style={{
                                              height: 0,
                                              overflow: "hidden",
                                            }}
                                          >
                                            {" "}
                                            My Size
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>{" "}
                                    <tbody>
                                      <tr className="odd">
                                        <td
                                          valign="top"
                                          colSpan={3}
                                          className="dataTables_empty"
                                        >
                                          No data available in table
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>{" "}
                            <div className="trades-table-footer">
                              <div className="trades-table-row">
                                <div className="trades-table-col volume">
                                  <a
                                    href="http://localhost:8000/user/exchange/get-all-buy-orders?order_type=buy&base_coin_type=USDT&trade_coin_type=BTC"
                                    className="more-btn"
                                  >
                                    More
                                  </a>
                                </div>{" "}
                                <div className="trades-table-col price total-price" />{" "}
                                <div className="trades-table-col price total-price">
                                  <span>0.00</span> <span>USDT</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="sell-order">
                          <div className="trades-table">
                            <div className="trades-table-body" />
                            <div
                              id="exchangeAllSellOrders_wrapper"
                              className="dataTables_wrapper no-footer"
                            >
                              <div
                                id="exchangeAllSellOrders_processing"
                                className="dataTables_processing"
                                style={{ display: "none" }}
                              >
                                Processing...
                              </div>
                              <div className="dataTables_scroll">
                                <div
                                  className="dataTables_scrollHead"
                                  style={{
                                    overflow: "hidden",
                                    position: "relative",
                                    border: "0px",
                                    width: "100%",
                                  }}
                                >
                                  <div
                                    className="dataTables_scrollHeadInner"
                                    style={{
                                      boxSizing: "content-box",
                                      width: "431.25px",
                                      paddingRight: "0px",
                                    }}
                                  >
                                    <table
                                      className="table dataTable no-footer"
                                      role="grid"
                                      style={{
                                        marginLeft: "0px",
                                        width: "431.25px",
                                      }}
                                    >
                                      <thead>
                                        <tr role="row">
                                          {/* <th
                                            className="text-pink w-30 sorting_asc"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "109.766px" }}
                                            aria-label
                                          /> */}
                                          {/* <th
                                            className="text-center w-30 sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "130.734px" }}
                                            aria-label
                                          />
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "130.75px" }}
                                            aria-label
                                          /> */}
                                        </tr>
                                      </thead>
                                    </table>
                                  </div>
                                </div>
                                <div
                                  className="dataTables_scrollBody"
                                  style={{
                                    position: "relative",
                                    overflow: "auto",
                                    height: "425px",
                                    width: "100%",
                                  }}
                                >
                                  <table
                                    id="exchangeAllSellOrders"
                                    className="table dataTable no-footer"
                                    role="grid"
                                    style={{ width: "100%" }}
                                  >
                                    <thead>
                                      <tr role="row" style={{ height: "0px" }}>
                                        {/* <th
                                          className="text-pink w-30 sorting_asc"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "109.766px",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            borderTopWidth: "0px",
                                            borderBottomWidth: "0px",
                                            height: "0px",
                                          }}
                                          aria-label
                                        >
                                          <div
                                            className="dataTables_sizing"
                                            style={{
                                              height: 0,
                                              overflow: "hidden",
                                            }}
                                          />
                                        </th>
                                        <th
                                          className="text-center w-30 sorting_disabled"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "130.734px",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            borderTopWidth: "0px",
                                            borderBottomWidth: "0px",
                                            height: "0px",
                                          }}
                                          aria-label
                                        >
                                          <div
                                            className="dataTables_sizing"
                                            style={{
                                              height: 0,
                                              overflow: "hidden",
                                            }}
                                          />
                                        </th>
                                        <th
                                          className="sorting_disabled"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "130.75px",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            borderTopWidth: "0px",
                                            borderBottomWidth: "0px",
                                            height: "0px",
                                          }}
                                          aria-label
                                        >
                                          <div
                                            className="dataTables_sizing"
                                            style={{
                                              height: 0,
                                              overflow: "hidden",
                                            }}
                                          />
                                        </th> */}
                                      </tr>
                                    </thead>{" "}
                                    <tbody>
                                      <tr className="odd">
                                        <td
                                          valign="top"
                                          colSpan={3}
                                          className="dataTables_empty"
                                        >
                                          No data available in table
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>{" "}
                            <div className="trades-table-footer">
                              <div className="trades-table-row">
                                <div className="trades-table-col volume">
                                  <a
                                    href="http://localhost:8000/user/exchange/get-all-sell-orders?order_type=sell&base_coin_type=USDT&trade_coin_type=BTC"
                                    className="more-btn"
                                  >
                                    More
                                  </a>
                                </div>{" "}
                                <div className="trades-table-col price total-price" />{" "}
                                <div className="trades-table-col price total-price">
                                  <span>0.00</span> <span>BTC</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="col-lg-6">
                      <div className="exchange-box order-box">
                        <div className="trades-headers">
                          <ul
                            id="pills-tab"
                            role="tablist"
                            className="nav nav-pills transfer-tabs"
                          >
                            <li role="presentation" className="nav-item">
                              <a
                                id="pills-transfer-1-tab"
                                data-toggle="pill"
                                href="#pills-transfer-1"
                                role="tab"
                                aria-controls="pills-transfer-1"
                                aria-selected="true"
                                className="nav-link active"
                              >
                                Buy
                              </a>
                            </li>{" "}
                            <li role="presentation" className="nav-item">
                              <a
                                id="pills-transfer-2-tab"
                                data-toggle="pill"
                                href="#pills-transfer-2"
                                role="tab"
                                aria-controls="pills-transfer-2"
                                aria-selected="false"
                                className="nav-link "
                              >
                                Sell
                              </a>
                            </li>
                          </ul>
                        </div>{" "}
                        <div id="pills-tabContent" className="tab-content">
                          <div
                            id="pills-transfer-1"
                            role="tabpanel"
                            aria-labelledby="pills-transfer-1-tab"
                            className="tab-pane fade show active "
                          >
                            <ul
                              id="BuyTab"
                              role="tablist"
                              className="nav nav-tabs inner-tabs-menu"
                            >
                              <li role="presentation" className="nav-item">
                                <a
                                  id="Limit-tab"
                                  data-toggle="tab"
                                  href="#Limit"
                                  role="tab"
                                  aria-controls="Limit"
                                  aria-selected="true"
                                  className="nav-link active"
                                >
                                  Limit
                                </a>
                              </li>{" "}
                              <li role="presentation" className="nav-item">
                                <a
                                  id="Market-tab"
                                  data-toggle="tab"
                                  href="#Market"
                                  role="tab"
                                  aria-controls="Market"
                                  aria-selected="false"
                                  className="nav-link"
                                >
                                  Market
                                </a>
                              </li>{" "}
                              <li role="presentation" className="nav-item">
                                <a
                                  id="Stop-limit-tab"
                                  data-toggle="tab"
                                  href="#Stop-limit"
                                  role="tab"
                                  aria-controls="Stop-limit"
                                  aria-selected="false"
                                  className="nav-link"
                                >
                                  Stop-limit
                                </a>
                              </li>
                            </ul>{" "}
                            <div id="BuyTabContent" className="tab-content">
                              <div
                                id="Limit"
                                role="tabpanel"
                                aria-labelledby="Limit-tab"
                                className="tab-pane fade show active"
                              >
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="cp-user-profile-info">
                                      <form id="buy-form" className="mt-4">
                                        <input
                                          type="hidden"
                                          name="_token"
                                          defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                                        />{" "}
                                        <div className="form-group mt-4">
                                          <div className="total-top">
                                            <label>Total</label>{" "}
                                            <label>Available</label>
                                          </div>{" "}
                                          <div className="total-top-blance">
                                            <div className="total-blance">
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span>0</span>
                                              </span>{" "}
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span className="base_coin_type">
                                                  USDT
                                                </span>
                                              </span>
                                            </div>{" "}
                                            <div className="avilable-blance">
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span>0</span>
                                              </span>{" "}
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span className="base_coin_type">
                                                  USDT
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Price</label>{" "}
                                          <input
                                            name="price"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="base_coin_type">
                                              USDT
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Amount</label>{" "}
                                          <input
                                            name="amount"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="trade_coin_type">
                                              BTC
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Total Amount</label>{" "}
                                          <input
                                            // disabled
                                            name="total_amount"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="base_coin_type">
                                              USDT
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-4">
                                          <a
                                            href="http://localhost:8000/login"
                                            className="btn btn-danger"
                                          >
                                            {" "}
                                            Login
                                          </a>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                              <div
                                id="Market"
                                role="tabpanel"
                                aria-labelledby="Market-tab"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="cp-user-profile-info">
                                      <form id="buy-form" className="mt-4">
                                        <input
                                          type="hidden"
                                          name="_token"
                                          defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                                        />{" "}
                                        <div className="form-group mt-4">
                                          <div className="total-top">
                                            <label>Total</label>{" "}
                                            <label>Available</label>
                                          </div>{" "}
                                          <div className="total-top-blance">
                                            <div className="total-blance">
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span>0</span>
                                              </span>{" "}
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span className="base_coin_type">
                                                  USDT
                                                </span>
                                              </span>
                                            </div>{" "}
                                            <div className="avilable-blance">
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span>0</span>
                                              </span>{" "}
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span className="base_coin_type">
                                                  USDT
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Price</label>{" "}
                                          <p className="form-control">Market</p>{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="base_coin_type">
                                              USDT
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Amount</label>{" "}
                                          <input
                                            name="amount"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="trade_coin_type">
                                              BTC
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-4">
                                          <a
                                            href="http://localhost:8000/login"
                                            className="btn btn-danger"
                                          >
                                            {" "}
                                            Login
                                          </a>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                              <div
                                id="Stop-limit"
                                role="tabpanel"
                                aria-labelledby="Stop-limit-tab"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="cp-user-profile-info">
                                      <form
                                        id="stop-limit-form"
                                        className="mt-4"
                                      >
                                        <input
                                          type="hidden"
                                          name="_token"
                                          defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                                        />{" "}
                                        <div className="form-group mt-4">
                                          <div className="total-top">
                                            <label>Total</label>{" "}
                                            <label>Available</label>
                                          </div>{" "}
                                          <div className="total-top-blance">
                                            <div className="total-blance">
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span>0</span>
                                              </span>{" "}
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span className="base_coin_type">
                                                  USDT
                                                </span>
                                              </span>
                                            </div>{" "}
                                            <div className="avilable-blance">
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span>0</span>
                                              </span>{" "}
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span className="base_coin_type">
                                                  USDT
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Stop</label>{" "}
                                          <input
                                            name="stop"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="base_coin_type">
                                              USDT
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Limit</label>{" "}
                                          <input
                                            name="limit"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="base_coin_type">
                                              USDT
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Amount</label>{" "}
                                          <input
                                            name="amount"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="trade_coin_type">
                                              BTC
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Total Amount</label>{" "}
                                          <input
                                            // disabled
                                            name="total_amount"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="base_coin_type">
                                              USDT
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-4 d-flex justify-content-between flex-wrap">
                                          <a
                                            href="http://localhost:8000/login"
                                            className="btn btn-danger"
                                          >
                                            {" "}
                                            Login
                                          </a>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div
                            id="pills-transfer-2"
                            role="tabpanel"
                            aria-labelledby="pills-transfer-2-tab"
                            className="tab-pane fade "
                          >
                            <ul
                              id="SellTab"
                              role="tablist"
                              className="nav nav-tabs inner-tabs-menu"
                            >
                              <li role="presentation" className="nav-item">
                                <a
                                  id="sell-Limit-tab"
                                  data-toggle="tab"
                                  href="#LimitSell"
                                  role="tab"
                                  aria-controls="LimitSell"
                                  aria-selected="true"
                                  className="nav-link active"
                                >
                                  Limit
                                </a>
                              </li>{" "}
                              <li role="presentation" className="nav-item">
                                <a
                                  id="sell-Market-tab"
                                  data-toggle="tab"
                                  href="#MarketSell"
                                  role="tab"
                                  aria-controls="MarketSell"
                                  aria-selected="false"
                                  className="nav-link"
                                >
                                  Market
                                </a>
                              </li>{" "}
                              <li role="presentation" className="nav-item">
                                <a
                                  id="sell-Stop-limit-tab"
                                  data-toggle="tab"
                                  href="#Stop-limitSell"
                                  role="tab"
                                  aria-controls="Stop-limitSell"
                                  aria-selected="false"
                                  className="nav-link"
                                >
                                  Stop-limit
                                </a>
                              </li>
                            </ul>{" "}
                            <div id="SellTabContent" className="tab-content">
                              <div
                                id="LimitSell"
                                role="tabpanel"
                                aria-labelledby="Limit-tab"
                                className="tab-pane fade show active"
                              >
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="cp-user-profile-info">
                                      <form
                                        method="POST"
                                        action="http://localhost:8000/user/exchange/sell"
                                        id="sell-form"
                                        className="mt-4"
                                      >
                                        <input
                                          type="hidden"
                                          name="_token"
                                          defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                                        />{" "}
                                        <div className="form-group mt-4">
                                          <div className="total-top">
                                            <label>Total</label>{" "}
                                            <label>Available</label>
                                          </div>{" "}
                                          <div className="total-top-blance">
                                            <div className="total-blance">
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span>0.00</span>
                                              </span>{" "}
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span className="base_coin_type">
                                                  BTC
                                                </span>
                                              </span>
                                            </div>{" "}
                                            <div className="avilable-blance">
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span>0.00</span>
                                              </span>{" "}
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span className="base_coin_type">
                                                  BTC
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Price</label>{" "}
                                          <input
                                            name="price"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="base_coin_type">
                                              USDT
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Amount</label>{" "}
                                          <input
                                            name="amount"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="trade_coin_type">
                                              BTC
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Total Amount</label>{" "}
                                          <input
                                            // disabled
                                            name="total_amount"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="base_coin_type">
                                              USDT
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-4">
                                          <a
                                            href="http://localhost:8000/login"
                                            className="btn btn-danger"
                                          >
                                            {" "}
                                            Login
                                          </a>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                              <div
                                id="MarketSell"
                                role="tabpanel"
                                aria-labelledby="Market-tab"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="cp-user-profile-info">
                                      <form
                                        method="POST"
                                        action="http://localhost:8000/user/exchange/sell"
                                        id="sell-form"
                                        className="mt-4"
                                      >
                                        <input
                                          type="hidden"
                                          name="_token"
                                          defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                                        />{" "}
                                        <div className="form-group mt-4">
                                          <div className="total-top">
                                            <label>Total</label>{" "}
                                            <label>Available</label>
                                          </div>{" "}
                                          <div className="total-top-blance">
                                            <div className="total-blance">
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span>0.00</span>
                                              </span>{" "}
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span className="base_coin_type">
                                                  BTC
                                                </span>
                                              </span>
                                            </div>{" "}
                                            <div className="avilable-blance">
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span>0.00</span>
                                              </span>{" "}
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span className="base_coin_type">
                                                  BTC
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Price</label>{" "}
                                          <p className="form-control">Market</p>{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="base_coin_type">
                                              USDT
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Amount</label>{" "}
                                          <input
                                            name="amount"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="trade_coin_type">
                                              BTC
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-4">
                                          <a
                                            href="http://localhost:8000/login"
                                            className="btn btn-danger"
                                          >
                                            {" "}
                                            Login
                                          </a>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                              <div
                                id="Stop-limitSell"
                                role="tabpanel"
                                aria-labelledby="Stop-limit-tab"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="cp-user-profile-info">
                                      <form
                                        id="stop-limit-form"
                                        className="mt-4"
                                      >
                                        <input
                                          type="hidden"
                                          name="_token"
                                          defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                                        />{" "}
                                        <div className="form-group mt-4">
                                          <div className="total-top">
                                            <label>Total</label>{" "}
                                            <label>Available</label>
                                          </div>{" "}
                                          <div className="total-top-blance">
                                            <div className="total-blance">
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span>0.00</span>
                                              </span>{" "}
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span className="base_coin_type">
                                                  BTC
                                                </span>
                                              </span>
                                            </div>{" "}
                                            <div className="avilable-blance">
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span>0.00</span>
                                              </span>{" "}
                                              <span
                                                className="text-warning"
                                                style={{ fontWeight: 700 }}
                                              >
                                                <span className="base_coin_type">
                                                  BTC
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Stop</label>{" "}
                                          <input
                                            name="stop"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="base_coin_type">
                                              USDT
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Limit</label>{" "}
                                          <input
                                            name="limit"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="base_coin_type">
                                              USDT
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Amount</label>{" "}
                                          <input
                                            name="amount"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="trade_coin_type">
                                              BTC
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-3">
                                          <label>Total Amount</label>{" "}
                                          <input
                                            // disabled
                                            name="total_amount"
                                            type="text"
                                            placeholder=""
                                            className="form-control number_only"
                                          />{" "}
                                          <span
                                            className="text-warning blns"
                                            style={{ fontWeight: 700 }}
                                          >
                                            <span className="base_coin_type">
                                              USDT
                                            </span>
                                          </span>
                                        </div>{" "}
                                        <div className="form-group mt-4 d-flex justify-content-between flex-wrap">
                                          <a
                                            href="http://localhost:8000/login"
                                            className="btn btn-danger"
                                          >
                                            {" "}
                                            Login
                                          </a>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="trades-section mt-4">
                        <div className="trades-headers mb-3">
                          <h3>Trades</h3>
                        </div>{" "}
                        <div className="primary-table">
                          <div className="table-header">
                            <div className="table-row" />
                          </div>
                          <div className="table-body" />
                          <div
                            id="marketTradeTable_wrapper"
                            className="dataTables_wrapper no-footer"
                          >
                            <div
                              id="marketTradeTable_processing"
                              className="dataTables_processing"
                              style={{ display: "none" }}
                            >
                              Processing...
                            </div>
                            <div className="dataTables_scroll">
                              <div
                                className="dataTables_scrollHead"
                                style={{
                                  overflow: "hidden",
                                  position: "relative",
                                  border: "0px",
                                  width: "100%",
                                }}
                              >
                                <div
                                  className="dataTables_scrollHeadInner"
                                  style={{
                                    boxSizing: "content-box",
                                    width: "431.25px",
                                    paddingRight: "0px",
                                  }}
                                >
                                  <table
                                    className="table dataTable no-footer"
                                    role="grid"
                                    style={{
                                      marginLeft: "0px",
                                      width: "431.25px",
                                    }}
                                  >
                                    <thead>
                                      <tr role="row">
                                        <th
                                          className="table-col price sorting_disabled"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{ width: "170.656px" }}
                                          aria-label="Price(USDT)"
                                        >
                                          Price(<span>USDT</span>)
                                        </th>
                                        <th
                                          className="table-col amount sorting_disabled"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{ width: "120.75px" }}
                                          aria-label="Amount"
                                        >
                                          Amount
                                        </th>
                                        <th
                                          className="table-col time text-right sorting_desc"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{ width: "79.8438px" }}
                                          aria-label="Time"
                                        >
                                          Time
                                        </th>
                                      </tr>
                                    </thead>
                                  </table>
                                </div>
                              </div>
                              <div
                                className="dataTables_scrollBody"
                                style={{
                                  position: "relative",
                                  overflow: "auto",
                                  height: "244px",
                                  width: "100%",
                                }}
                              >
                                <table
                                  id="marketTradeTable"
                                  className="table dataTable no-footer dtr-inline"
                                  role="grid"
                                  style={{ width: "100%" }}
                                >
                                  <thead>
                                    <tr role="row" style={{ height: "0px" }}>
                                      <th
                                        className="table-col price sorting_disabled"
                                        rowSpan={1}
                                        colSpan={1}
                                        style={{
                                          width: "170.656px",
                                          paddingTop: "0px",
                                          paddingBottom: "0px",
                                          borderTopWidth: "0px",
                                          borderBottomWidth: "0px",
                                          height: "0px",
                                        }}
                                        aria-label="Price(USDT)"
                                      >
                                        <div
                                          className="dataTables_sizing"
                                          style={{
                                            height: "0px",
                                            overflow: "hidden",
                                          }}
                                        >
                                          Price(<span>USDT</span>)
                                        </div>
                                      </th>
                                      <th
                                        className="table-col amount sorting_disabled"
                                        rowSpan={1}
                                        colSpan={1}
                                        style={{
                                          width: "120.75px",
                                          paddingTop: "0px",
                                          paddingBottom: "0px",
                                          borderTopWidth: "0px",
                                          borderBottomWidth: "0px",
                                          height: "0px",
                                        }}
                                        aria-label="Amount"
                                      >
                                        <div
                                          className="dataTables_sizing"
                                          style={{
                                            height: "0px",
                                            overflow: "hidden",
                                          }}
                                        >
                                          Amount
                                        </div>
                                      </th>
                                      <th
                                        className="table-col time text-right sorting_desc"
                                        rowSpan={1}
                                        colSpan={1}
                                        style={{
                                          width: "79.8438px",
                                          paddingTop: "0px",
                                          paddingBottom: "0px",
                                          borderTopWidth: "0px",
                                          borderBottomWidth: "0px",
                                          height: "0px",
                                        }}
                                        aria-label="Time"
                                      >
                                        <div
                                          className="dataTables_sizing"
                                          style={{
                                            height: "0px",
                                            overflow: "hidden",
                                          }}
                                        >
                                          Time
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>{" "}
                                  <tbody>
                                    <tr className="odd">
                                      <td
                                        valign="top"
                                        colSpan={3}
                                        className="dataTables_empty"
                                      >
                                        No data available in table
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Dashboard;
