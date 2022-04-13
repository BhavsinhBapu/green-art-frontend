import { TV_CHART } from "service/trading-chart";
import { apiRequest } from "lib/request";
const history: any = {};
export default {
  history,
  getBars(
    symbolInfo: any,
    resolution: any,
    from: any,
    to: any,
    first: any,
    limit: any
  ) {
    const splitSymbol = symbolInfo.name.split(":")[1].split(/[:/]/);
    let intervale = 1440;
    if (resolution === "1D" || resolution === "D") {
      intervale = 1440;
    } else {
      intervale = resolution;
    }
    const url = `?interval=${intervale}&start_time=${from}&end_time=${to}&base_coin_id=${splitSymbol[0]}&trade_coin_id=${splitSymbol[1]}`;
    return apiRequest(TV_CHART, null, url).then((data) => {
      if (data.data.data.length) {
        const bars = data.data.data.map((el: any) => ({
          time: el.timestamp * 1000, // TradingView requires bar time in ms
          low: el.low,
          high: el.high,
          open: el.open,
          close: el.close,
          volume: parseFloat(el.volume),
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
