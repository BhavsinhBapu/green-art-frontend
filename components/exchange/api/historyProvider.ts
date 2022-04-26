import Cookies from "js-cookie";
import { getChartData } from "service/trading-chart";
import { apiRequest } from "lib/request";
const history: any = {};
const api_root =
  "https://tradexpro-laravel.cdibrandstudio.com/api/get-exchange-chart-data-app?base_coin_id=2&trade_coin_id=1&interval=1440&start_time=1639918197&end_time=1670004597";

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

    if (this.hitted === false) {
      console.log("      document.URL;", document.URL);
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
        const myBars = data.data;
        let klines4800: any = [];
        for (let i = 0; i < 80; i++) {
          myBars.map((el: any) => {
            let j = i;
            klines4800.push({
              time: el.time + j, // TradingView requires bar time in ms
              low: el.low,
              high: el.high,
              open: el.open,
              close: el.close,
              volume: parseFloat(el.volume),
            });
          });
        }
        if (data.data.length) {
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
    } else {
      return [];
    }
  },
};
