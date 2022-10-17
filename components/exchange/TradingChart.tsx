import * as React from "react";
import styles from "./index.module.css";
import { widget, version } from "../../public/static/charting_library";
import Datafeed from "components/exchange/api";
import {
  DISABLED_FEATURES,
  ENABLED_FEATURES,
  getChartOverrides,
  TIME_FRAMES,
} from "./api/chartConfig";

function getLanguageFromURL() {
  const regex = new RegExp("[\\?&]lang=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
type MyProps = {
  coinpair: any;
};
const pair = localStorage.getItem("current_pair")?.replace("_", "/");
localStorage.setItem("tradingview.ChartDrawingToolbarWidget.visible", "false");
export class TVChartContainer extends React.Component<MyProps> {
  static defaultProps = {
    symbol: `:${pair && pair}`,
    interval: "1",
    containerId: "tv_chart_container",
    libraryPath: "/static/charting_library/",
    chartsStorageUrl: "https://saveload.tradingview.com",
    chartsStorageApiVersion: "1.1",
    clientId: "tradingview.com",
    fullscreen: false,
    custom_css_url: "css/style.css",
    autosize: true,
    studiesOverrides: {},
  };
  // name = this.props.name;

  tvWidget = null;
  //@ts-ignore
  chartInit = (config) => {
    const tvWidget = new widget(config);
    //@ts-ignore
    this.tvWidget = tvWidget;
  };
  //@ts-ignore
  constructor(props) {
    super(props);
    //@ts-ignore
    this.ref = React.createRef();
  }

  componentDidMount() {
    console.log(version, "version");
    const widgetOptions = {
      height: 480,
      width: 1400,
      //@ts-ignore
      symbol: this.props.symbol,
      style: 1,
      //@ts-ignore
      datafeed: Datafeed,
      // datafeed: Datafeed,

      //@ts-ignore
      interval: this.props.interval,
      //@ts-ignore
      container: this.ref.current,
      //@ts-ignore
      library_path: this.props.libraryPath,
      //@ts-ignore

      locale: getLanguageFromURL() || "en",
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
      drawings_access: { type: "black", tools: [{ name: "Regression Trend" }] },
      //@ts-ignore
      // enabled_features: ENABLED_FEATURES,
      //@ts-ignore
      disabled_features: DISABLED_FEATURES,
      //@ts-ignore
      studies_overrides: this.props.studiesOverrides,
      custom_css_url: "css/style.css",
      //@ts-ignore
      overrides: getChartOverrides(this.props.theme),
      theme: "dark",

      //@ts-ignore
      time_frames: TIME_FRAMES,

      toolbar: false,
      //@ts-ignore
      // studies_overrides: {
      //   //@ts-ignore

      //   "moving average.ma.visible": true,
      //   "volume.volume.color.0": "#ffc107",
      //   "volume.volume.color.1": "#ffffff",
      //   "volume.volume.transparency": 0,
      //   "volume.volume ma.color": "#ffc107",
      //   "volume.volume ma.linewidth": 2,
      //   "volume.volume ma.plottype": "line",
      //   "volume.volume ma.transparency": 0,
      //   "volume.volume ma.visible": true,
      //   "volume.volume.plottype": "column",
      //   "volume.volume.show ma": true,
      // },
    };
    //@ts-ignore
    this.chartInit(widgetOptions);
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
        {/* @ts-ignore */}
        <div ref={this.ref} className={styles.TVChartContainer} />
      </>
    );
  }
}
