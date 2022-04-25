import request from "lib/request";

// https://tradexpro-laravel.cdibrandstudio.com/api/get-exchange-chart-data-app?base_coin_id=2&trade_coin_id=1&interval=1440&start_time=1639918197&end_time=1670004597

export const getChartData = (
  interval: any,
  startTime: any,
  endTime: any,
  base: any,
  trade: any
) => {
  return request({
    url: `/get-exchange-chart-data-app?base_coin_id=${base}&trade_coin_id=${trade}&interval=${interval}&start_time=${startTime}&end_time=${endTime}`,
    method: "GET",
  });
};
