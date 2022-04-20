import { TV_CHART } from "service/trading-chart";
import { apiRequest } from "lib/request";
const history: any = {};
const api_root = "https://min-api.cryptocompare.com";

// export default {
//   history,
//   getBars(symbolInfo: any, resolution: any, from: any, to: any, first: any) {
//     const splitSymbol = symbolInfo.name.split(":")[1].split(/[:/]/);
//     let intervale = 1440;
//     if (resolution === "1D" || resolution === "D") {
//       intervale = 1440;
//     } else {
//       intervale = resolution;
//     }
//     const url = `?interval=${intervale}&start_time=${from}&end_time=${to}&base_coin_id=${splitSymbol[0]}&trade_coin_id=${splitSymbol[1]}`;

//     return apiRequest(TV_CHART, null, null).then((data: any) => {
//       if (data.data.length) {
//         console.log(
//           "this is a big data lengthhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
//           data.data
//         );
//         const bars = data.map((el: any) => ({
//           time: el.timestamp * 1000, // TradingView requires bar time in ms
//           low: el.low,
//           high: el.high,
//           open: el.open,
//           close: el.close,
//           volume: parseFloat(el.volume),
//         }));
//         if (first) {
//           const lastBar = bars[bars.length - 1];
//           history[symbolInfo.name] = { lastBar };
//         }
//         return bars;
//       }
//       return [];
//     });
//   },
// };

export default {
  history: history,
  //@ts-ignore
  getBars: function (symbolInfo, resolution, from, to, first, limit) {
    var split_symbol = symbolInfo.name.split(/[:/]/);
    const url =
      resolution === "D"
        ? "/data/histoday"
        : resolution >= 60
        ? "/data/histohour"
        : "/data/histominute";
    const qs = {
      e: split_symbol[0],
      fsym: split_symbol[1],
      tsym: split_symbol[2],
      toTs: to,
      limit: limit ? limit : 2000,
      // aggregate: 1//resolution
    };
    console.log(qs, "this is qs");
    //time stamp

    return apiRequest(
      `${api_root}${url}?`,
      `${qs.e}&fsym=${qs.fsym}&tsym=${qs.tsym}&toTs=${qs.toTs}&limit=${qs.limit}`
    ).then((data: any) => {
      if (data.data.Data.length) {
        const myBars = data.data.Data;
        const klines4800 = [...myBars, ...myBars, ...myBars];
        const bars = klines4800.map((el: any) => ({
          time: el.time * 1000,
          low: el.low,
          high: el.high,
          open: el.open,
          close: el.close,
          volume: el.volumefrom,
        }));
        if (first) {
          const lastBar = bars[bars.length - 1];
          history[symbolInfo.name] = { lastBar };
        }
        return bars;
      }
      return [];
    });
  },
};
