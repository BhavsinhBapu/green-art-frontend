import type { NextPage } from "next";
import Slider from "react-slick";
import styles from "../styles/Home.module.css";
import Cookies from "js-cookie";
import Link from "next/link";
const Home: NextPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div>
        {/* header-area start here */}
        <header className="header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-2">
                <div className="logo-area">
                  <a href="">
                    <img
                      src="/logo.svg"
                      className="img-fluid cp-user-logo-large"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-10">
                <div className="menu-area text-right">
                  <nav className="main-menu mobile-menu" >
                    <ul id="nav">
                      <li>
                        <a href="/exchange/dashboard">
                          <a>Exchange</a>
                        </a>
                      </li>
                      <li>
                        <Link href="/authentication/signin">
                          <a>Login</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/authentication/signup">
                          <a>Sign up</a>
                        </Link>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header-area end here */}
        {/* banner area start here */}
        {/* hero banenr area start here  */}
        <section className="hero-banner-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="banner-title">
                  Buy &amp; Sell Instantly and Hold Cryptocurrency
                </h1>
                <p className="banner-content">
                  Tradexpro exchange is such a marketplace where people can
                  trade directly with each other.
                </p>
                <a
                  href="https://tradexpro-exchange.itech-theme.com/sign-up"
                  className="primary-btn"
                >
                  Register Now
                </a>
              </div>
            </div>
            <div className="hero-banner-bottom">
              <ul className="item-list">
                <li className="single-item">
                  <a href="https://tradexpro-exchange.itech-theme.com/user/exchange/dashboard/BTC_USDT">
                    <h4>
                      BTC / USDT
                      <span className="percent  decrase ">0.00%</span>
                    </h4>
                    <h3>1.00000000</h3>
                    <h5>0.00</h5>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* hero banenr area end here  */}
        {/* about area start here  */}
        <section className="about-area">
          <div className="container">
            <Slider {...settings}>
              <div className="single-banner">
                <a href="#">
                  <img
                    src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/banner-image-2.png"
                    alt="about-image-phone"
                  />
                </a>
              </div>
              <div className="single-banner">
                <a href="#">
                  <img
                    src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/banner-image-3.png"
                    alt="about-image-phone"
                  />
                </a>
              </div>
              <div className="single-banner">
                <a href="#">
                  <img
                    src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/banner-image-4.png"
                    alt="about-image-phone"
                  />
                </a>
              </div>
              <div className="single-banner">
                <a href="#">
                  <img
                    src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/banner-image-2.png"
                    alt="about-image-phone"
                  />
                </a>
              </div>
              <div className="single-banner">
                <a href="#">
                  <img
                    src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/banner-image-4.png"
                    alt="about-image-phone"
                  />
                </a>
              </div>
              <div className="single-banner">
                <a href="#">
                  <img
                    src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/banner-image-2.png"
                    alt="about-image-phone"
                  />
                </a>
              </div>
            </Slider>
            <div className="about-info">
              <div className="single-info">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mirror css-1w66k1s"
                  >
                    <path
                      d="M12.867 18.47l5.13-.94L15.517 4l-5.18.95-3.25 3.94-4.85.89.5 2.71-1.97.36.36 1.97 1.97-.36.44 2.42 1.97-.36.79 4.28 1.97-.36-.79-4.28.98-.18 4.41 2.49zm-5.76-4.28l-1.97.36-.58-3.17 3.61-.66 3.25-3.92 2.5-.46 1.76 9.59-2.46.45-4.4-2.51-1.71.32zM22.871 8.792l-2.99.55.362 1.967 2.99-.55-.362-1.967zM19.937 13.183l-1.135 1.647 2.503 1.725 1.135-1.646-2.503-1.726zM19.006 4.052l-1.725 2.503 1.646 1.135 1.726-2.503-1.647-1.135z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>
                    Tradexpro Collect &amp; Win Christmas Edition: Trade TRX,
                    BTT, WIN, JST or SUN to Light Up the Christmas Tree &amp;
                    Share $300k in Rewards!
                  </span>
                </p>
                <a href="#" className="more-btn">
                  More
                </a>
              </div>
              <div className="single-info">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mirror css-1w66k1s"
                  >
                    <path
                      d="M12.867 18.47l5.13-.94L15.517 4l-5.18.95-3.25 3.94-4.85.89.5 2.71-1.97.36.36 1.97 1.97-.36.44 2.42 1.97-.36.79 4.28 1.97-.36-.79-4.28.98-.18 4.41 2.49zm-5.76-4.28l-1.97.36-.58-3.17 3.61-.66 3.25-3.92 2.5-.46 1.76 9.59-2.46.45-4.4-2.51-1.71.32zM22.871 8.792l-2.99.55.362 1.967 2.99-.55-.362-1.967zM19.937 13.183l-1.135 1.647 2.503 1.725 1.135-1.646-2.503-1.726zM19.006 4.052l-1.725 2.503 1.646 1.135 1.726-2.503-1.647-1.135z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Special Notice about Tradexpro in Portugal</span>
                </p>
                <a href="#" className="more-btn">
                  More
                </a>
              </div>
              <div className="single-info">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mirror css-1w66k1s"
                  >
                    <path
                      d="M12.867 18.47l5.13-.94L15.517 4l-5.18.95-3.25 3.94-4.85.89.5 2.71-1.97.36.36 1.97 1.97-.36.44 2.42 1.97-.36.79 4.28 1.97-.36-.79-4.28.98-.18 4.41 2.49zm-5.76-4.28l-1.97.36-.58-3.17 3.61-.66 3.25-3.92 2.5-.46 1.76 9.59-2.46.45-4.4-2.51-1.71.32zM22.871 8.792l-2.99.55.362 1.967 2.99-.55-.362-1.967zM19.937 13.183l-1.135 1.647 2.503 1.725 1.135-1.646-2.503-1.726zM19.006 4.052l-1.725 2.503 1.646 1.135 1.726-2.503-1.647-1.135z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Special Notice About Tradexpro Markets Limited</span>
                </p>
                <a href="#" className="more-btn">
                  More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* about area end here  */}
        {/* Market trend area start here  */}
        <section className="market-trend-area">
          <div className="container">
            <div className="section-title">
              <h2 className="title">Market trend</h2>
            </div>
            <div className="exchange-tab-menu">
              <ul className="nav nav-tabs" id="exchangeTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="CoreAssets-tab"
                    data-toggle="tab"
                    href="#CoreAssets"
                    role="tab"
                    aria-controls="CoreAssets"
                    aria-selected="true"
                  >
                    Core Assets
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="Gainers-tab"
                    data-toggle="tab"
                    href="#Gainers"
                    role="tab"
                    aria-controls="Gainers"
                    aria-selected="false"
                  >
                    24H Gainers
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="Listings-tab"
                    data-toggle="tab"
                    href="#Listings"
                    role="tab"
                    aria-controls="Listings"
                    aria-selected="false"
                  >
                    New Listings
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="exchangeTabContent">
              <div
                className="tab-pane fade show active"
                id="CoreAssets"
                role="tabpanel"
                aria-labelledby="CoreAssets-tab"
              >
                <div className="exchange-volume-table">
                  <div className="table-responsive">
                    <div
                      id="DataTables_Table_0_wrapper"
                      className="dataTables_wrapper no-footer"
                    >
                      <table
                        className="table table-borderless dataTable no-footer"
                        id="DataTables_Table_0"
                        role="grid"
                        aria-describedby="DataTables_Table_0_info"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "137.516px" }}
                            >
                              Market
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "81.2812px" }}
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "193.797px" }}
                            >
                              Change (24h)
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "182.297px" }}
                            >
                              Chart
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "207.766px" }}
                            >
                              Volume
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "127.344px" }}
                            >
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td>
                              <a className="cellMarket" href="#">
                                <div className="marketSymbols">
                                  <span className="quoteSymbol">BTC</span>
                                  <span className="baseSymbol">/ USDT</span>
                                </div>
                                <div className="currencyName">Bitcoin</div>
                              </a>
                            </td>
                            <td>5.00</td>
                            <td>
                              <span className="changePos  text-success ">
                                0.00000000
                              </span>
                            </td>
                            <td>
                              <img
                                src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/chart-image-1.png"
                                alt="chart-image"
                              />
                            </td>
                            <td>1.00000000 USDT</td>
                            <td>
                              <a
                                href="https://tradexpro-exchange.itech-theme.com/user/exchange/dashboard/BTC_USDT"
                                className="btnTrade btn-link"
                              >
                                Trade
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div
                        className="dataTables_info"
                        id="DataTables_Table_0_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 1 of 1 entries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Gainers"
                role="tabpanel"
                aria-labelledby="Gainers-tab"
              >
                <div className="exchange-volume-table">
                  <div className="table-responsive">
                    <div
                      id="DataTables_Table_1_wrapper"
                      className="dataTables_wrapper no-footer"
                    >
                      <table
                        className="table table-borderless dataTable no-footer"
                        id="DataTables_Table_1"
                        role="grid"
                        aria-describedby="DataTables_Table_1_info"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "0px" }}
                            >
                              Market
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "0px" }}
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "0px" }}
                            >
                              Change (24h)
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "0px" }}
                            >
                              Chart
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "0px" }}
                            >
                              Volume
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "0px" }}
                            >
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="odd">
                            <td
                              valign="top"
                              colSpan={6}
                              className="dataTables_empty"
                            >
                              No data available in table
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div
                        className="dataTables_info"
                        id="DataTables_Table_1_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 0 to 0 of 0 entries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Listings"
                role="tabpanel"
                aria-labelledby="Listings-tab"
              >
                <div className="exchange-volume-table">
                  <div className="table-responsive">
                    <div
                      id="DataTables_Table_2_wrapper"
                      className="dataTables_wrapper no-footer"
                    >
                      <table
                        className="table table-borderless dataTable no-footer"
                        id="DataTables_Table_2"
                        role="grid"
                        aria-describedby="DataTables_Table_2_info"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "0px" }}
                            >
                              Market
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "0px" }}
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "0px" }}
                            >
                              Change (24h)
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "0px" }}
                            >
                              Chart
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "0px" }}
                            >
                              Volume
                            </th>
                            <th
                              scope="col"
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "0px" }}
                            >
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td>
                              <a className="cellMarket" href="#">
                                <div className="marketSymbols">
                                  <span className="quoteSymbol">BTC</span>
                                  <span className="baseSymbol">/ USDT</span>
                                </div>
                                <div className="currencyName">Bitcoin</div>
                              </a>
                            </td>
                            <td>5.00</td>
                            <td>
                              <span className="changePos  text-success ">
                                0.00000000
                              </span>
                            </td>
                            <td>
                              <img
                                src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/chart-image-1.png"
                                alt="chart-image"
                              />
                            </td>
                            <td>1.00000000 USDT</td>
                            <td>
                              <a
                                href="https://tradexpro-exchange.itech-theme.com/user/exchange/dashboard/BTC_USDT"
                                className="btnTrade btn-link"
                              >
                                Trade
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div
                        className="dataTables_info"
                        id="DataTables_Table_2_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 1 of 1 entries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Market trend area end here  */}
        {/* Trade. Anywhere. area start here  */}
        <section className="trade-anywhere-area sectiob-bg">
          <div className="container">
            <div className="section-title">
              <h2 className="title">Trade. Anywhere.</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="trade-anywhere-left">
                  <img
                    className="trend-image"
                    src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/trade-imge.png"
                    alt="trade-imge"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="trade-anywhere-right">
                  <div className="qr-code-area">
                    <div className="qr-image">
                      <img
                        className="img-fluid"
                        src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/qr-code.png"
                        alt=""
                      />
                    </div>
                    <div className="qr-info">
                      <h4>Scan to Download</h4>
                      <h5>iOS &amp; Android</h5>
                    </div>
                  </div>
                  <div className="avable-items">
                    <ul className="item-lsit">
                      <li className="single-item">
                        <a href="#" className="item-link">
                          <img
                            className="icon"
                            src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/apple-logo.png"
                            alt="apple-logo"
                          />
                          <span>App Store</span>
                        </a>
                      </li>
                      <li className="single-item">
                        <a href="#" className="item-link">
                          <img
                            className="icon"
                            src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/android.png"
                            alt="android"
                          />
                          <span>Android APK</span>
                        </a>
                      </li>
                      <li className="single-item">
                        <a href="#" className="item-link">
                          <img
                            className="icon"
                            src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/google-play.png"
                            alt="google-play"
                          />
                          <span>Google Play</span>
                        </a>
                      </li>
                      <li className="single-item">
                        <a href="#" className="item-link">
                          <img
                            className="icon"
                            src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/command-symbol.png"
                            alt="command-symbol"
                          />
                          <span>MacOS</span>
                        </a>
                      </li>
                      <li className="single-item">
                        <a href="#" className="item-link">
                          <img
                            className="icon"
                            src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/windows.png"
                            alt="windows"
                          />
                          <span>Windows</span>
                        </a>
                      </li>
                      <li className="single-item">
                        <a href="#" className="item-link">
                          <img
                            className="icon"
                            src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/linux.png"
                            alt="linux"
                          />
                          <span>Linux</span>
                        </a>
                      </li>
                      <li className="single-item">
                        <a href="#" className="item-link">
                          <img
                            className="icon"
                            src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/api.png"
                            alt="api"
                          />
                          <span>API</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-more text-center">
              <a href="#" className="view-btn">
                More Download Options{" "}
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        {/* Trade. Anywhere. area end here  */}
        {/* Trade. Anywhere. area start here  */}
        <section className="trade-anywhere-area">
          <div className="container">
            <div className="section-title">
              <h2 className="title"> Secure trend System. </h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="trade-anywhere-left">
                  <img
                    src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/trade-imge.png"
                    alt="integration"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="trade-anywhere-right">
                  <h2 className="subtitle"> Easy Customization . </h2>
                  <p>
                    Codexpro Exchange is a complete crypto coins exchange
                    platform developed with Laravel. It works via coin payment.
                    There is no need for any personal node, it will connect with
                    a coin payment merchant account. Our system is 100% secure
                    and dynamic. It supports all crypto currency wallets
                    including Coin Payment, Deposit, Withdrawal, Referral
                    system, and whatever you need.{" "}
                  </p>
                  <a className="primary-btn">Know More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trade. Anywhere. area end here  */}
        {/* Get in touch. area start here  */}
        <section className="get-touch-area">
          <div className="container">
            <div className="section-title">
              <h2 className="title">Get in touch. Stay in touch.</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <a href="#" className="single-card">
                  <img
                    className="card-icon"
                    src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/touch-icon-1.png"
                    alt="icon"
                  />
                  <h3 className="card-title">24 / 7 Support</h3>
                  <p className="card-content">
                    Got a problem? Just get in touch. Our support team is
                    available 24/7.
                  </p>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#" className="single-card">
                  <img
                    className="card-icon"
                    src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/touch-icon-2.png"
                    alt="icon"
                  />
                  <h3 className="card-title">Blog</h3>
                  <p className="card-content">
                    News and updates from the world’s leading cryptocurrency
                    exchange.
                  </p>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#" className="single-card">
                  <img
                    className="card-icon"
                    src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/touch-icon-3.png"
                    alt="icon"
                  />
                  <h3 className="card-title">Community</h3>
                  <p className="card-content">
                    Binance is global. Join the discussion in our worldwide
                    communities.
                  </p>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#" className="single-card">
                  <img
                    className="card-icon"
                    src="https://tradexpro-exchange.itech-theme.com/assets/landing/images/touch-icon-4.png"
                    alt="icon"
                  />
                  <h3 className="card-title">Careers</h3>
                  <p className="card-content">
                    Help build the future of technology. Start your new career
                    at Binance.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Get in touch. area end here  */}
        {/* Start trading area start here  */}
        <section className="start-trading-area">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="title">Start trading now</h2>
            </div>
            <div className="trading-button text-center">
              <Link href="/authentication/signup">
                <a className="primary-btn mr-3">Sign Up</a>
              </Link>
              <Link href="/exchange/dashboard">
                <a className="secondary-btn" href="#">
                  Trade Now
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/* Start trading area end here  */}
        {/* footer area start here */}
        <footer className="footer-area pt--70">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                  <div className="single-wedgets text-widget">
                    <div className="widget-title">
                      <h4>Products</h4>
                    </div>
                    <div className="widget-inner">
                      <ul>
                        <li>
                          <a href="#banner-area">Home</a>
                        </li>
                        <li>
                          <a href="#features">Feature</a>
                        </li>
                        <li>
                          <a href="#integration">Integrations</a>
                        </li>
                        <li>
                          <a href="#about">About</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                  <div className="single-wedgets text-widget">
                    <div className="widget-title">
                      <h4>Service</h4>
                    </div>
                    <div className="widget-inner">
                      <ul>
                        <li>
                          <a href="#banner-area">Home</a>
                        </li>
                        <li>
                          <a href="#features">Feature</a>
                        </li>
                        <li>
                          <a href="#integration">Integrations</a>
                        </li>
                        <li>
                          <a href="#about">About</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                  <div className="single-wedgets text-widget">
                    <div className="widget-title">
                      <h4>Support</h4>
                    </div>
                    <div className="widget-inner">
                      <ul>
                        <li>
                          <a href="#banner-area">Home</a>
                        </li>
                        <li>
                          <a href="#features">Feature</a>
                        </li>
                        <li>
                          <a href="#integration">Integrations</a>
                        </li>
                        <li>
                          <a href="#about">About</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="single-wedgets social-link">
                    <div className="widget-title">
                      <h4>Community</h4>
                    </div>
                    <div className="widget-inner">
                      <ul>
                        <li>
                          <a>
                            <i className="fab fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a>
                            <i className="fab fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a>
                            <i className="fab fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a>
                            <i className="fab fa-youtube" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-bottom-wrap">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="copyright-area text-center text-md-left">
                      <p>
                        Copyright@2020{" "}
                        <a href="https://tradexpro-exchange.itech-theme.com">
                          TradexPro Admin
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-menu text-center text-md-right">
                      <ul></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer area end here */}
        {/* js file start */}
        {/* tweenmax canvas */}
        <a
          id="scrollUp"
          href="#top"
          style={{ position: "fixed", zIndex: 2147483647, display: "none" }}
        >
          <i className="fa fa-angle-up" />
        </a>
        {/* End js file */}
        <div id="vanillatoasts-container" />
      </div>
    </div>
  );
};

export default Home;
