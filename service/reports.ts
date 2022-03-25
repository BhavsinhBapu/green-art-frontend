import request from "lib/request";

export const WithdrawAndDepositHistoryApi = async (
  type: string,
  per_page: number,
  page: number
) => {
  const { data } = await request.get(
    `/wallet-history-app?type=${type}&per_page=${per_page}&page=${page}`
  );
  return data;
};
// get-all-sell-orders-app?order_type=buy&base_coin_id=1&trade_coin_id=2&per_page=7&dashboard_type=dashboard
export const GetAllSellOrdersApi = async (
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
