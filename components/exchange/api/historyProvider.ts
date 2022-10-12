import { getChartData } from "service/trading-chart";
const history: any = {};

export default {
  history: history,
  hitted: false,

  //@ts-ignore
  getBars: function (symbolInfo, resolution, from, to, first, limit) {
    const base = localStorage.getItem("base_coin_id");
    const trade = localStorage.getItem("trade_coin_id");

    this.hitted = true;
    return getChartData(15, from, to, base, trade).then((data: any) => {
      alert(limit);
      if (data.data.data.length) {
        const myBars = data.data.data;
        const klines4800 = [...myBars];
        const bars = klines4800.map((el: any) => ({
          time: el.time * 1000,
          low: el.low,
          high: el.high,
          open: el.open,
          close: el.close,
          volume: el.volume,
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
