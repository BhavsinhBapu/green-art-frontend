import type { GetServerSideProps, NextPage } from "next";
import Slider from "react-slick";
import Link from "next/link";
import { landingPage } from "service/landing-page";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import Navbar from "components/common/navbar";
import { GetUserInfoByToken, GetUserInfoByTokenServer } from "service/user";
import { parseCookies } from "nookies";
const Home: NextPage = ({
  landing,
  bannerListdata,
  announcementListdata,
  featureListdata,
  socialData,
  asset_coin_pairs,
  hourly_coin_pairs,
  latest_coin_pairs,
  loggedin,
  landing_banner_image,
}: any) => {
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const { isLoggedIn } = useSelector((state: RootState) => state.user);
  return (
    <div>
      <div>
        {loggedin ? (
          <Navbar />
        ) : (
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
                    <nav className="main-menu mobile-menu">
                      <ul id="nav">
                        <li>
                          <a href="/exchange/dashboard">Exchange</a>
                        </li>
                        <li>
                          <Link href="/authentication/signin">Login</Link>
                        </li>
                        <li>
                          <Link href="/authentication/signup">Sign up</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>
        )}

        <section className="hero-banner-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="banner-title">
                  {landing?.landing_title ||
                    "Buy & Sell Instantly And Hold Cryptocurrency"}
                </h1>
                <p className="banner-content">
                  {landing?.landing_description ||
                    "Tradexpro exchange is such a marketplace where people can trade directly with each other."}
                </p>
                <a href="/authentication/signup" className="primary-btn">
                  Register Now
                </a>
              </div>
              <div className="col-md-6 ">
                <img
                  src={
                    landing_banner_image ||
                    "/undraw_crypto_flowers_re_dyqo.svg.svg"
                  }
                />
              </div>
            </div>
          </div>
        </section>

        <section className="about-area">
          <div className="container">
            <Slider {...settings}>
              {bannerListdata?.map((item: any, index: number) => (
                <div className="single-banner" key={index}>
                  <Link href={`/banner/${item.slug}`}>
                    <img
                      src={item.image}
                      alt="about-image-phone"
                      className="slider-image-class"
                    />
                  </Link>
                </div>
              ))}
            </Slider>
            <div className="about-info">
              {announcementListdata?.map((item: any, index: number) => (
                <div className="single-info" key={index}>
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
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="market-trend-area">
          <div className="container">
            <div className="section-title">
              <h2 className="title">
                {landing?.market_trend_title || "Market Trend"}
              </h2>
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
                          {asset_coin_pairs?.map((item: any, index: number) => (
                            <tr role="row" className="odd" key={index}>
                              <td>
                                <a className="cellMarket" href="#">
                                  <div className="marketSymbols">
                                    <span className="quoteSymbol">
                                      {item?.child_coin_name}
                                    </span>
                                    <span className="baseSymbol">
                                      /{item?.parent_coin_name}
                                    </span>
                                  </div>
                                  <div className="currencyName">Bitcoin</div>
                                </a>
                              </td>
                              <td className="txtBlack">{item.last_price}</td>
                              <td>
                                <span className="changePos  text-success ">
                                  {item.price_change}
                                </span>
                              </td>
                              <td>
                                {item.price_change >= 0 ? (
                                  <img
                                    src="/chart-image-1.png"
                                    alt="chart-image"
                                  />
                                ) : (
                                  <img
                                    src="/chart-image-2.png"
                                    alt="chart-image"
                                  />
                                )}
                              </td>
                              <td className="txtBlack">
                                {item.volume} {item.parent_coin_name}
                              </td>
                              <td
                                onClick={async () => {
                                  await localStorage.setItem(
                                    "base_coin_id",
                                    item?.parent_coin_id
                                  );
                                  await localStorage.setItem(
                                    "trade_coin_id",
                                    item?.child_coin_id
                                  );
                                  await localStorage.setItem(
                                    "current_pair",
                                    item?.child_coin_name +
                                      "_" +
                                      item?.parent_coin_name
                                  );
                                }}
                              >
                                <a
                                  href="/exchange/dashboard"
                                  className="btnTrade btn-link"
                                >
                                  Trade
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
                          {hourly_coin_pairs?.map(
                            (item: any, index: number) => (
                              <tr role="row" className="odd" key={index}>
                                <td>
                                  <a className="cellMarket" href="#">
                                    <div className="marketSymbols">
                                      <span className="quoteSymbol">
                                        {item?.child_coin_name}
                                      </span>
                                      <span className="baseSymbol">
                                        /{item?.parent_coin_name}
                                      </span>
                                    </div>
                                    <div className="currencyName">Bitcoin</div>
                                  </a>
                                </td>
                                <td className="txtBlack">{item.last_price}</td>
                                <td>
                                  <span className="changePos  text-success ">
                                    {item.price_change}
                                  </span>
                                </td>
                                <td>
                                  {item.price_change >= 0 ? (
                                    <img
                                      src="/chart-image-1.png"
                                      alt="chart-image"
                                    />
                                  ) : (
                                    <img
                                      src="/chart-image-2.png"
                                      alt="chart-image"
                                    />
                                  )}
                                </td>
                                <td className="txtBlack">
                                  {item.volume} {item.parent_coin_name}
                                </td>
                                <td
                                  onClick={async () => {
                                    await localStorage.setItem(
                                      "base_coin_id",
                                      item?.parent_coin_id
                                    );
                                    await localStorage.setItem(
                                      "trade_coin_id",
                                      item?.child_coin_id
                                    );
                                    await localStorage.setItem(
                                      "current_pair",
                                      item?.child_coin_name +
                                        "_" +
                                        item?.parent_coin_name
                                    );
                                  }}
                                >
                                  <a
                                    href="/exchange/dashboard"
                                    className="btnTrade btn-link"
                                  >
                                    Trade
                                  </a>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
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
                          {latest_coin_pairs?.map(
                            (item: any, index: number) => (
                              <tr role="row" className="odd" key={index}>
                                <td>
                                  <a className="cellMarket" href="#">
                                    <div className="marketSymbols">
                                      <span className="quoteSymbol">
                                        {item?.child_coin_name}
                                      </span>
                                      <span className="baseSymbol">
                                        /{item?.parent_coin_name}
                                      </span>
                                    </div>
                                    <div className="currencyName">Bitcoin</div>
                                  </a>
                                </td>
                                <td className="txtBlack">{item.last_price}</td>
                                <td>
                                  <span className="changePos  text-success ">
                                    {item.price_change}
                                  </span>
                                </td>
                                <td>
                                  {item.price_change >= 0 ? (
                                    <img
                                      src="/chart-image-1.png"
                                      alt="chart-image"
                                    />
                                  ) : (
                                    <img
                                      src="/chart-image-2.png"
                                      alt="chart-image"
                                    />
                                  )}
                                </td>
                                <td className="txtBlack">
                                  {item.volume} {item.parent_coin_name}
                                </td>
                                <td
                                  onClick={async () => {
                                    await localStorage.setItem(
                                      "base_coin_id",
                                      item?.parent_coin_id
                                    );
                                    await localStorage.setItem(
                                      "trade_coin_id",
                                      item?.child_coin_id
                                    );
                                    await localStorage.setItem(
                                      "current_pair",
                                      item?.child_coin_name +
                                        "_" +
                                        item?.parent_coin_name
                                    );
                                  }}
                                >
                                  <a
                                    href="/exchange/dashboard"
                                    className="btnTrade btn-link"
                                  >
                                    Trade
                                  </a>
                                </td>
                              </tr>
                            )
                          )}
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

        <section className="trade-anywhere-area sectiob-bg">
          <div className="container">
            <div className="section-title">
              <h2 className="title">{landing?.trade_anywhere_title}</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="trade-anywhere-left">
                  <img
                    className="trend-image"
                    src={landing?.trade_anywhere_left_img}
                    alt="trade-imge"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="trade-anywhere-right">
                  <div className="qr-code-area">
                    <div className="qr-image">
                      <img className="img-fluid" src="/qr-code.png" alt="" />
                    </div>
                    <div className="qr-info">
                      <h4>Scan to Download</h4>
                      <h5>iOS &amp; Android</h5>
                    </div>
                  </div>
                  <div className="avable-items">
                    <ul className="item-lsit">
                      <li className="single-item">
                        <a
                          href={landing?.apple_store_link}
                          className="item-link"
                        >
                          <img
                            className="icon"
                            src="/apple-logo.png"
                            alt="apple-logo"
                          />
                          <span>App Store</span>
                        </a>
                      </li>
                      <li className="single-item">
                        <a
                          href={landing?.google_store_link}
                          className="item-link"
                        >
                          <img
                            className="icon"
                            src="/android.png"
                            alt="android"
                          />
                          <span>Android APK</span>
                        </a>
                      </li>
                      <li className="single-item">
                        <a href="#" className="item-link">
                          <img
                            className="icon"
                            src="/google-play.png"
                            alt="google-play"
                          />
                          <span>Google Play</span>
                        </a>
                      </li>
                      <li className="single-item">
                        <a
                          href={landing?.macos_store_link}
                          className="item-link"
                        >
                          <img
                            className="icon"
                            src="/command-symbol.png"
                            alt="command-symbol"
                          />
                          <span>MacOS</span>
                        </a>
                      </li>
                      <li className="single-item">
                        <a
                          href={landing?.windows_store_link}
                          className="item-link"
                        >
                          <img
                            className="icon"
                            src="/windows.png"
                            alt="windows"
                          />
                          <span>Windows</span>
                        </a>
                      </li>
                      <li className="single-item">
                        <a
                          href={landing?.windows_store_link}
                          className="item-link"
                        >
                          <img className="icon" src="/linux.png" alt="linux" />
                          <span>Linux</span>
                        </a>
                      </li>
                      <li className="single-item">
                        <a href={landing?.api_link} className="item-link">
                          <img className="icon" src="/api.png" alt="api" />
                          <span>API</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-more text-center">
              <a href="https://play.google.com/" className="view-btn">
                More Download Options{" "}
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="trade-anywhere-area">
          <div className="container">
            <div className="section-title">
              <h2 className="title"> {landing?.secure_trade_title} </h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="trade-anywhere-left">
                  <img src={landing?.secure_trade_left_img} alt="integration" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="trade-anywhere-right">
                  <h2 className="subtitle"> {landing?.customization_title} </h2>
                  <p>{landing?.customization_details}</p>
                  <a href="/exchange/dashboard" className="primary-btn">
                    Know More
                  </a>
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
              <h2 className="title">{landing.landing_feature_title}.</h2>
            </div>

            <div className="row">
              {featureListdata.map((feature: any, index: any) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <a href="#" className="single-card">
                    <img
                      className="card-icon"
                      src={feature.feature_icon}
                      alt="icon"
                    />
                    <h3 className="card-title">{feature?.feature_title}</h3>
                    <p className="card-content">{feature?.description}</p>
                  </a>
                </div>
              ))}
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
                <a className="primary-btn mr-5">Sign Up</a>
              </Link>
              <Link href="/exchange/dashboard">
                <a className="primary-btn">Trade Now</a>
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
                        {socialData.map((social: any, index: any) => (
                          <li key={index}>
                            <a href={social.media_link}>
                              <img
                                src={social.media_icon}
                                alt={social.media_title}
                                height={20}
                                width={20}
                              />
                            </a>
                          </li>
                        ))}
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
                  <div className="col-md-12">
                    <div className="copyright-area text-center text-md-center">
                      <p>
                        Copyright@2022 <a href="">TradexPro</a>
                      </p>
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
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { data } = await landingPage();
  const cookies = parseCookies(ctx);
  const response = cookies.token
    ? await GetUserInfoByTokenServer(cookies.token)
    : false;
  return {
    props: {
      landing: data,
      bannerListdata: data.banner_list,
      announcementListdata: data.announcement_list,
      socialData: data.media_list,
      featureListdata: data.feature_list,
      asset_coin_pairs: data.asset_coin_pairs,
      hourly_coin_pairs: data.hourly_coin_pairs,
      latest_coin_pairs: data.latest_coin_pairs,
      loggedin: cookies.token ? response.success : false,
      landing_banner_image: data?.landing_banner_image
        ? data?.landing_banner_image
        : null,
    },
  };
};
export default Home;
