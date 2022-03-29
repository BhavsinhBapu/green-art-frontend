import request from "lib/request";

export const appDashboardData = async (pair: string | null) => {
  if (pair) {
    const { data } = await request.get(`/app-dashboard/${pair}`);
    return data;
  } else {
    return null;
  }
};

export const buyLimitApp = async (
  amount: number,
  price: number,
  trade_coin_id: string,
  base_coin_id: string
) => {
  const { data } = await request.post(`/buy-limit-app`, {
    amount,
    price,
    trade_coin_id,
    base_coin_id,
  });
  return data;
};
// buy - market - app;
export const buyMarketApp = async (
  amount: number,
  price: number,
  trade_coin_id: string,
  base_coin_id: string
) => {
  const { data } = await request.post(`/buy-market-app`, {
    amount,
    price,
    trade_coin_id,
    base_coin_id,
  });
  return data;
};
// buy - stop - limit - app;
export const buyStopLimitApp = async (
  amount: number,
  limit: number,
  stop: number,
  trade_coin_id: string,
  base_coin_id: string
) => {
  const { data } = await request.post(`/buy-stop-limit-app`, {
    amount,

    limit,
    stop,
    trade_coin_id,
    base_coin_id,
  });
  return data;
};
// sell - limit - app;
export const sellLimitApp = async (
  amount: number,
  price: number,
  trade_coin_id: string,
  base_coin_id: string
) => {
  const { data } = await request.post(`/sell-limit-app`, {
    amount,
    price,
    trade_coin_id,
    base_coin_id,
  });
  return data;
};
export const sellMarketApp = async (
  amount: number,
  price: number,
  trade_coin_id: string,
  base_coin_id: string
) => {
  const { data } = await request.post(`/sell-market-app`, {
    amount,
    price,
    trade_coin_id,
    base_coin_id,
  });
  return data;
};
export const sellStopLimitApp = async (
  amount: number,
  limit: number,
  stop: number,
  trade_coin_id: string,
  base_coin_id: string
) => {
  const { data } = await request.post(`/buy-stop-limit-app`, {
    amount,
    limit,
    stop,
    trade_coin_id,
    base_coin_id,
  });
  return data;
};
export const GetAllSellOrdersAppApi = async (
  order_type: string,
  base_coin_id: number,
  trade_coin_id: number,
  per_page: number,
  dashboard_type: string
) => {
  const { data } = await request.get(
    `/get-all-sell-orders-app?order_type=${order_type}&base_coin_id=${base_coin_id}&trade_coin_id=${trade_coin_id}&per_page=${per_page}&dashboard_type=${dashboard_type}`
  );
  return data;
};
// get-my-trades-app?base_coin_id=2&trade_coin_id=1&per_page=7&dashboard_type=dashboard
export const GetAllTradeOrdersAppApi = async (
  base_coin_id: number,
  trade_coin_id: number,
  per_page: number,
  dashboard_type: string
) => {
  const { data } = await request.get(
    `/get-my-trades-app?base_coin_id=${base_coin_id}&trade_coin_id=${trade_coin_id}&per_page=${per_page}&dashboard_type=${dashboard_type}`
  );
  return data;
};
