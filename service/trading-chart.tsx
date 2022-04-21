import request from "lib/request";

// https://tradexpro-laravel.cdibrandstudio.com/api/get-exchange-chart-data-app?base_coin_id=2&trade_coin_id=1&interval=1440&start_time=1639918197&end_time=1670004597

export const getChartData = (interval: any, startTime: any, endTime: any) => {
  return request({
    url: `/get-exchange-chart-data-app?base_coin_id=${localStorage.getItem(
      "base_coin_id"
    )}&trade_coin_id=${localStorage.getItem(
      "trade_coin_id"
    )}&interval=${interval}&start_time=${startTime}&end_time=${endTime}`,
    method: "GET",
  });
};
