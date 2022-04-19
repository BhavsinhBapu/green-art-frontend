import { HistoryCallback } from "public/static/charting_library/charting_library";
import historyProvider from "./historyProvider";

const supportedResolutions = [
  "1",
  "3",
  "5",
  "15",
  "30",
  "60",
  "120",
  "240",
  "D",
];

const config = {
  supported_resolutions: supportedResolutions,
};
export default {
  onReady: (cb: any) => {
    console.log("=====onReady running");
    setTimeout(() => cb(config), 0);
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
    from: any,
    to: any,
    onHistoryCallback: HistoryCallback,
    onErrorCallback: any,
    firstDataRequest: any
  ) {
    console.log("=====getBars runninggggggggggggggggggggggggggggggg");
    // console.log('function args',arguments)
    // console.log(`Requesting bars between ${new Date(from * 1000).toISOString()} and ${new Date(to * 1000).toISOString()}`)
    historyProvider
      //@ts-ignore

      .getBars(symbolInfo, resolution, from, to, firstDataRequest)
      .then((bars) => {
        // console.log("Got bars", bars);
        if (bars.length) {
          try {
            console.log("on History callback is calling ==============>", bars);
            onHistoryCallback(bars, { noData: false });
          } catch (error) {
            console.log("onHistoryCallback error", error);
          }
        } else {
          onHistoryCallback(bars, { noData: true });
        }
      })
      .catch((err) => {
        console.log(
          { err },
          "thisssssssssssssssssssssssssssssssssssssssssssssssssssssss"
        );
        // onErrorCallback(err);
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
