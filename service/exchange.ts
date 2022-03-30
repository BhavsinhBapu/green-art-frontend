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
// get-my-all-orders-app?base_coin_id=2&trade_coin_id=1&dashboard_type=dashboard&order_type=buy_sell
export const ordersHistoryDashboard = async (
  base_coin_id: string,
  trade_coin_id: string,
  dashboard_type: string,
  order_type: string
) => {
  const { data } = await request.get(
    `/get-my-all-orders-app?base_coin_id=${base_coin_id}&trade_coin_id=${trade_coin_id}&dashboard_type=${dashboard_type}&order_type=${order_type}`
  );
  return data;
};
// get-my-trades-app?base_coin_id=1&trade_coin_id=2&dashboard_type=dashboard
export const tradesHistoryDashboard = async (
  base_coin_id: string,
  trade_coin_id: string,
  dashboard_type: string
) => {
  const { data } = await request.get(
    `/get-my-trades-app?base_coin_id=${base_coin_id}&trade_coin_id=${trade_coin_id}&dashboard_type=${dashboard_type}`
  );
  return data;
};
// get-exchange-all-orders-app?per_page=9&dashboard_type=dashboard&order_type=buy&base_coin_id=1&trade_coin_id=2
export const openBookDashboard = async (
  base_coin_id: string,
  trade_coin_id: string,
  dashboard_type: string,
  order_type: string,
  per_page: number
) => {
  const { data } = await request.get(
    `/get-exchange-all-orders-app?per_page=${per_page}&dashboard_type=${dashboard_type}&order_type=${order_type}&base_coin_id=${base_coin_id}&trade_coin_id=${trade_coin_id}`
  );
  return data;
};
