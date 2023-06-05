import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import { widget } from "../../public/static/charting_library";
import Datafeed from "components/exchange/api";
import { StudyOverrides } from "../../public/static/charting_library/charting_library";

import {
  DISABLED_FEATURES,
  ENABLED_FEATURES,
  TIME_FRAMES,
} from "./api/chartConfig";
import { RootState } from "state/store";
import { useDispatch, useSelector } from "react-redux";
import { listenMessages } from "state/actions/exchange";
import { useRouter } from "next/router";

function getLanguageFromURL() {
  const regex = new RegExp("[\\?&]lang=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
let socketCall = 0;

export const TVChartContainer: React.FC = () => {
  const ref = useRef(null);
  const { isLoggedIn, user } = useSelector((state: RootState) => state.user);
  const { theme } = useSelector((state: RootState) => state.common);

  const dispatch = useDispatch();
  const router = useRouter();

  const { currentPair } = useSelector((state: RootState) => state.exchange);
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const widgetOptions = {
      height: 480,
      width: 1400,
      symbol: `${currentPair?.replace("_", "/")}`,
      style: 1,
      theme: localTheme === "dark" ? "dark" : "light",
      datafeed: Datafeed,
      interval: "15",
      container: ref.current,
      library_path: "/static/charting_library/",
      locale: getLanguageFromURL() || "en",
      charts_storage_url: "https://saveload.tradingview.com",
      charts_storage_api_version: "1.1",
      client_id: "tradingview.com",
      user_id: "public_user_id",
      fullscreen: false,
      autosize: true,
      studies_overrides: {
        "volume.volume.color.0": "#dc3545",
        "volume.volume.color.1": "#32d777",
        "volume.volume.transparency": 0,
        "volume.volume ma.color": "#32d777",
        "volume.volume ma.transparency": 0,
        "volume.options.showStudyArguments": false,
        "volume.options.showStudyTitles": false,
        "volume.options.showStudyValues": false,
        "volume.options.showLegend": false,
        "volume.options.showStudyOutput": false,
        "volume.options.showStudyOverlay": false,
        "volume.options.showSeriesTitle": false,
        "volume.options.showSeriesOHLC": false,
        "volume.options.showBarChange": false,
        "volume.options.showCountdown": false,
        "moving average.show": true,
        "moving average.period": 20,
        "moving average.color": "#ff9900",
        "moving average.plottype": "line",
      },
      overrides: {
        "mainSeriesProperties.candleStyle.upColor": "#ffffff",
        "mainSeriesProperties.candleStyle.downColor": "#000000",
        "mainSeriesProperties.candleStyle.drawBorder": true,
        "mainSeriesProperties.candleStyle.borderUpColor": "#00ff00",
        "mainSeriesProperties.candleStyle.borderDownColor": "#ff0000",
      },
      enabled_features: ENABLED_FEATURES,
      disabled_features: DISABLED_FEATURES,
      custom_css_url: "css/style.css",
      time_frames: TIME_FRAMES,
      toolbar: false,
    };

    const chartInit = (config: any) => {
      
      const widgetInstance = new widget(config);
      //@ts-ignore

      window.tvWidget = widgetInstance;
      //@ts-ignore

      window.tvWidget.onChartReady(() => {
        //@ts-ignore
        window.tvWidget.applyOverrides({
          "paneProperties.background":
            localTheme === "dark" ? "rgb(11, 14, 17)" : "#fff",
          "paneProperties.backgroundType": "solid",
          "mainSeriesProperties.candleStyle.upColor": "#32d777",
          "mainSeriesProperties.candleStyle.downColor": "#dc3545",
          "mainSeriesProperties.candleStyle.drawBorder": true,
          "mainSeriesProperties.candleStyle.borderUpColor": "#32d777",
          "mainSeriesProperties.candleStyle.borderDownColor": "#dc3545",
          "mainSeriesProperties.candleStyle.wickUpColor": "#32d777",
          "mainSeriesProperties.candleStyle.wickDownColor": "#dc3545",
          "mainSeriesProperties.hollowCandleStyle.upColor": "#32d777",
          "mainSeriesProperties.hollowCandleStyle.downColor": "#dc3545",
          "mainSeriesProperties.hollowCandleStyle.drawWick": true,
          "mainSeriesProperties.hollowCandleStyle.drawBorder": true,
          "mainSeriesProperties.hollowCandleStyle.borderUpColor": "#32d777",
          "mainSeriesProperties.hollowCandleStyle.borderDownColor": "#dc3545",
          "mainSeriesProperties.hollowCandleStyle.wickUpColor": "#32d777",
          "mainSeriesProperties.hollowCandleStyle.wickDownColor": "#dc3545",
          "mainSeriesProperties.haStyle.upColor": "#32d777",
          "mainSeriesProperties.haStyle.downColor": "#dc3545",
          "mainSeriesProperties.haStyle.drawWick": true,
          "mainSeriesProperties.haStyle.drawBorder": true,
          "mainSeriesProperties.haStyle.borderUpColor": "#32d777",
          "mainSeriesProperties.haStyle.borderDownColor": "#dc3545",
          "mainSeriesProperties.haStyle.wickUpColor": "#32d777",
          "mainSeriesProperties.haStyle.wickDownColor": "#dc3545",
          "mainSeriesProperties.barStyle.upColor": "#32d777",
          "mainSeriesProperties.barStyle.downColor": "#dc3545",
          "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
          "mainSeriesProperties.barStyle.dontDrawOpen": false,
          "mainSeriesProperties.lineStyle.color": "#dc3545",
        });
      });
    };

    chartInit(widgetOptions);

    return () => {
      //@ts-ignore
      if (window.tvWidget !== null) {
        //@ts-ignore

        window.tvWidget.remove();
        //@ts-ignore

        window.tvWidget = null;
      }
    };
  }, [currentPair]); // Include 'theme' in the dependencies array
  useEffect(() => {
    //@ts-ignore
    window.tvWidget?.onChartReady(() => {
      //@ts-ignore
      window.tvWidget.applyOverrides({
        "paneProperties.background":
          theme === "dark" ? "rgb(11, 14, 17)" : "#fff",
        "paneProperties.backgroundType": "solid",
        "mainSeriesProperties.candleStyle.upColor": "#32d777",
        "mainSeriesProperties.candleStyle.downColor": "#dc3545",
        "mainSeriesProperties.candleStyle.drawBorder": true,
        "mainSeriesProperties.candleStyle.borderUpColor": "#32d777",
        "mainSeriesProperties.candleStyle.borderDownColor": "#dc3545",
        "mainSeriesProperties.candleStyle.wickUpColor": "#32d777",
        "mainSeriesProperties.candleStyle.wickDownColor": "#dc3545",
        "mainSeriesProperties.hollowCandleStyle.upColor": "#32d777",
        "mainSeriesProperties.hollowCandleStyle.downColor": "#dc3545",
        "mainSeriesProperties.hollowCandleStyle.drawWick": true,
        "mainSeriesProperties.hollowCandleStyle.drawBorder": true,
        "mainSeriesProperties.hollowCandleStyle.borderUpColor": "#32d777",
        "mainSeriesProperties.hollowCandleStyle.borderDownColor": "#dc3545",
        "mainSeriesProperties.hollowCandleStyle.wickUpColor": "#32d777",
        "mainSeriesProperties.hollowCandleStyle.wickDownColor": "#dc3545",
        "mainSeriesProperties.haStyle.upColor": "#32d777",
        "mainSeriesProperties.haStyle.downColor": "#dc3545",
        "mainSeriesProperties.haStyle.drawWick": true,
        "mainSeriesProperties.haStyle.drawBorder": true,
        "mainSeriesProperties.haStyle.borderUpColor": "#32d777",
        "mainSeriesProperties.haStyle.borderDownColor": "#dc3545",
        "mainSeriesProperties.haStyle.wickUpColor": "#32d777",
        "mainSeriesProperties.haStyle.wickDownColor": "#dc3545",
        "mainSeriesProperties.barStyle.upColor": "#32d777",
        "mainSeriesProperties.barStyle.downColor": "#dc3545",
        "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
        "mainSeriesProperties.barStyle.dontDrawOpen": false,
        "mainSeriesProperties.lineStyle.color": "#dc3545",
      });
      //@ts-ignore

      window.tvWidget
        ?.changeTheme(theme === "dark" ? "Dark" : "Light")
        .then(() => {
          //@ts-ignore

          window.tvWidget.applyOverrides({
            "paneProperties.background":
              theme === "dark" ? "rgb(11, 14, 17)" : "#fff",
            "paneProperties.backgroundType": "solid",
            "mainSeriesProperties.candleStyle.upColor": "#32d777",
            "mainSeriesProperties.candleStyle.downColor": "#dc3545",
            "mainSeriesProperties.candleStyle.drawBorder": true,
            "mainSeriesProperties.candleStyle.borderUpColor": "#32d777",
            "mainSeriesProperties.candleStyle.borderDownColor": "#dc3545",
            "mainSeriesProperties.candleStyle.wickUpColor": "#32d777",
            "mainSeriesProperties.candleStyle.wickDownColor": "#dc3545",
            "mainSeriesProperties.hollowCandleStyle.upColor": "#32d777",
            "mainSeriesProperties.hollowCandleStyle.downColor": "#dc3545",
            "mainSeriesProperties.hollowCandleStyle.drawWick": true,
            "mainSeriesProperties.hollowCandleStyle.drawBorder": true,
            "mainSeriesProperties.hollowCandleStyle.borderUpColor": "#32d777",
            "mainSeriesProperties.hollowCandleStyle.borderDownColor": "#dc3545",
            "mainSeriesProperties.hollowCandleStyle.wickUpColor": "#32d777",
            "mainSeriesProperties.hollowCandleStyle.wickDownColor": "#dc3545",
            "mainSeriesProperties.haStyle.upColor": "#32d777",
            "mainSeriesProperties.haStyle.downColor": "#dc3545",
            "mainSeriesProperties.haStyle.drawWick": true,
            "mainSeriesProperties.haStyle.drawBorder": true,
            "mainSeriesProperties.haStyle.borderUpColor": "#32d777",
            "mainSeriesProperties.haStyle.borderDownColor": "#dc3545",
            "mainSeriesProperties.haStyle.wickUpColor": "#32d777",
            "mainSeriesProperties.haStyle.wickDownColor": "#dc3545",
            "mainSeriesProperties.barStyle.upColor": "#32d777",
            "mainSeriesProperties.barStyle.downColor": "#dc3545",
            "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
            "mainSeriesProperties.barStyle.dontDrawOpen": false,
            "mainSeriesProperties.lineStyle.color": "#dc3545",
          });
        });
    });
  }, [theme]);

  useEffect(() => {
    listenMessages(dispatch, user);
  }, [currentPair]);

  return (
    <>
      <header className={styles.VersionHeader}></header>
      <div ref={ref} className={styles.TVChartContainer} />
    </>
  );
};
