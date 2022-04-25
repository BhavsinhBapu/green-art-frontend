import historyProvider from "./historyProvider";
import stream from "./stream";
const supportedResolutions = [
  "1",
  "3",
  "5",
  "15",
  "30",
  "60",
  "120",
  "240",
  "360",
  "D",
  "W",
  "M",
];

const config = {
  supported_resolutions: supportedResolutions,
};
export default {
  onReady: (cb: any) => {
    console.log("=====onReady=====");
    cb(config);
  },
  searchSymbols: (
    userInput: any,
    exchange: any,
    symbolType: any,
    onResultReadyCallback: any
  ) => {
    console.log("====Search Symbols running");
  },
  resolveSymbol: (
    symbolName: any,
    onSymbolResolvedCallback: any,
    onResolveErrorCallback: any
  ) => {
    // expects a symbolInfo object in response
    console.log("======resolveSymbol running");
    // console.log('resolveSymbol:',{symbolName})
    var split_data = symbolName.split(/[:/]/);
    // console.log({split_data})
    var symbol_stub = {
      name: symbolName,
      description: "",
      type: "crypto",
      session: "24x7",
      timezone: "Etc/UTC",
      ticker: symbolName,
      exchange: split_data[0],
      minmov: 1,
      pricescale: 100000000,
      has_intraday: true,
      intraday_multipliers: ["1", "60"],
      supported_resolution: supportedResolutions,
      volume_precision: 8,
      data_status: "streaming",
    };

    if (split_data[2].match(/USD|EUR|JPY|AUD|GBP|KRW|CNY/)) {
      symbol_stub.pricescale = 100;
    }
    setTimeout(function () {
      onSymbolResolvedCallback(symbol_stub);
      console.log("Resolving that symbol....", symbol_stub);
    }, 0);

    // onResolveErrorCallback('Not feeling it today')
  },

  getBars: function (
    symbolInfo: any,
    resolution: any,
    periodParams: any,
    onHistoryCallback: any,
    onError: any
  ) {
    const { from, to } = periodParams;
    const countBack = periodParams.countBack;
    const countForward = periodParams.countForward;
    //@ts-ignore
    historyProvider
      .getBars(
        symbolInfo,
        resolution,
        from * 1000,
        to * 1000,
        countBack,
        countForward
      )
      .then((bars: any) => {
        console.log("bars", periodParams);
        console.log("barssssssssssssssss", bars);
        if (bars.length) {
          onHistoryCallback(bars, { noData: false });
        } else {
          onHistoryCallback(bars, { noData: true });
        }
      })
      .catch((err: any) => {
        console.log("err", err);
        onError(err);
      });
  },

  subscribeBars: (
    symbolInfo: any,
    resolution: any,
    onRealtimeCallback: any,
    subscribeUID: any,
    onResetCacheNeededCallback: any
  ) => {
    console.log("=====subscribeBars runnning");
    stream.subscribeBars(
      symbolInfo,
      resolution,
      onRealtimeCallback,
      subscribeUID,
      onResetCacheNeededCallback
    );
  },
  unsubscribeBars: (subscriberUID: any) => {
    console.log("=====unsubscribeBars running");
  },
  calculateHistoryDepth: (
    resolution: any,
    resolutionBack: any,
    intervalBack: any
  ) => {
    //optional
    console.log("=====calculateHistoryDepth running");
    // while optional, this makes sure we request 24 hours of minute data at a time
    // CryptoCompare's minute data endpoint will throw an error if we request data beyond 7 days in the past, and return no data
    return resolution < 60
      ? { resolutionBack: "D", intervalBack: "1" }
      : undefined;
  },
  getMarks: (
    symbolInfo: any,
    startDate: any,
    endDate: any,
    onDataCallback: any,
    resolution: any
  ) => {
    //optional
    console.log("=====getMarks running");
  },
  getTimeScaleMarks: (
    symbolInfo: any,
    startDate: any,
    endDate: any,
    onDataCallback: any,
    resolution: any
  ) => {
    //optional
    console.log("=====getTimeScaleMarks running");
  },
  getServerTime: (cb: any) => {
    console.log("=====getServerTime running");
  },
};
