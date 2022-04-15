import * as React from "react";
import styles from "./index.module.css";
import {
  widget,
  version,
  ChartingLibraryWidgetOptions,
} from "../../public/static/charting_library";
import Datafeed from "components/exchange/api";
import {
  DISABLED_FEATURES,
  ENABLED_FEATURES,
  getBackgroundColor,
  getChartOverrides,
  getChartStudiesOverrides,
  getLoadingScreenStyle,
  TIME_FRAMES,
} from "./api/chartConfig";
function getLanguageFromURL() {
  const regex = new RegExp("[\\?&]lang=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export class TVChartContainer extends React.PureComponent {
  static defaultProps = {
    symbol: "AAPL",
    interval: "D",
    datafeedUrl: "https://demo_feed.tradingview.com",
    datafeed: Datafeed,
    libraryPath: "/static/charting_library/",
    chartsStorageUrl: "https://saveload.tradingview.com",
    chartsStorageApiVersion: "1.1",
    clientId: "tradingview.com",
    userId: "public_user_id",
    fullscreen: false,
    autosize: true,
    studiesOverrides: {},
  };

  tvWidget = null;
  //@ts-ignore
  constructor(props) {
    super(props);
    //@ts-ignore
    this.ref = React.createRef();
  }

  componentDidMount() {
    const widgetOptions = {
      height: 480,
      width: 1400,
      //@ts-ignore
      symbol: this.props.symbol,
      style: 1,

      // BEWARE: no trailing slash is expected in feed URL
      //@ts-ignore
      datafeed: new window.Datafeeds.UDFCompatibleDatafeed(
        //@ts-ignore
        this.props.datafeedUrl
      ),
      // datafeed: Datafeed,

      //@ts-ignore
      interval: this.props.interval,
      //@ts-ignore
      container: this.ref.current,
      //@ts-ignore
      library_path: this.props.libraryPath,

      locale: getLanguageFromURL() || "en",
      // disabled_features: ["use_localstorage_for_settings"],
      // enabled_features: ["study_templates"],
      //@ts-ignore
      charts_storage_url: this.props.chartsStorageUrl,
      //@ts-ignore
      charts_storage_api_version: this.props.chartsStorageApiVersion,
      //@ts-ignore

      client_id: this.props.clientId,
      //@ts-ignore
      user_id: this.props.userId,

      //@ts-ignore
      fullscreen: this.props.fullscreen,
      //@ts-ignore
      autosize: this.props.autosize,
      //@ts-ignore
      studies_overrides: this.props.studiesOverrides,
      overrides: {
        "paneProperties.background": "#131722",
        "paneProperties.vertGridProperties.color": "#363c4e",
        "paneProperties.horzGridProperties.color": "#363c4e",
        "symbolWatermarkProperties.transparency": 90,
        "scalesProperties.textColor": "#AAA",
      },
      //@ts-ignore
      enabled_features: ENABLED_FEATURES,
      //@ts-ignore
      disabled_features: DISABLED_FEATURES,
      custom_css_url: "charting_library/chart-v3-ethfinex-theme.css",

      //@ts-ignore
      time_frames: TIME_FRAMES,

      toolbar: false,
    };
    //@ts-ignore
    const tvWidget = new widget(widgetOptions);
    //@ts-ignore
    this.tvWidget = tvWidget;

    tvWidget.onChartReady(() => {
      tvWidget.headerReady().then(() => {
        const button = tvWidget.createButton();
        button.setAttribute("title", "Click to show a notification popup");
        button.classList.add("apply-common-tooltip");
        button.addEventListener("click", () =>
          tvWidget.showNoticeDialog({
            title: "Notification",
            body: "TradingView Charting Library API works correctly",
            callback: () => {
              console.log("Noticed!");
            },
          })
        );

        button.innerHTML = "Check API";
      });
    });
  }

  componentWillUnmount() {
    if (this.tvWidget !== null) {
      //@ts-ignore
      this.tvWidget.remove();
      this.tvWidget = null;
    }
  }

  render() {
    return (
      <>
        <header className={styles.VersionHeader}>
          <h1>
            TradingView Charting Library and Next.js Integration Example{" "}
            {version()}
          </h1>
        </header>
        {/* @ts-ignore */}
        <div ref={this.ref} className={styles.TVChartContainer} />
      </>
    );
  }
}
