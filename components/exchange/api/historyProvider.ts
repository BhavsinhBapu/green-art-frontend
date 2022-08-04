import Cookies from "js-cookie";
import { getChartData } from "service/trading-chart";
import { apiRequest } from "lib/request";
const history: any = {};

export default {
  history: history,
  hitted: false,

  //@ts-ignore
  getBars: function (symbolInfo, resolution, from, to, first, limit) {
    var split_symbol = symbolInfo.name.split(/[:/]/);
    const url =
      resolution === "D"
        ? "/data/histoday"
        : resolution >= 60
        ? "/data/histohour"
        : "/data/histominute";

    const base = localStorage.getItem("base_coin_id");
    const trade = localStorage.getItem("trade_coin_id");

    this.hitted = true;
    return getChartData(
      1440,
      from,
      to,
      base ? base : 2,
      trade ? trade : 1
    ).then((data: any) => {
      if (data.data.data.length) {
        const myBars = data.data.data;
        const klines4800 = [...myBars];
        console.log("getBars", klines4800);
        const bars = klines4800.map((el: any) => ({
          time: parseFloat(el[0]) + 1000, // time
          low: parseFloat(el[4]), //low
          high: parseFloat(el[3]), // high
          open: parseFloat(el[1]), // open
          close: parseFloat(el[2]), // close
          volume: parseFloat(el[5]), // volume
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
