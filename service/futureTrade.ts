import request from "lib/futureTradeRequest";

export const ordersHistoryDashboard = async (
  base_coin_id: string,
  trade_coin_id: string,
  dashboard_type: string,
  order_type: string
) => {
  const { data } = await request.get(
    `/get-all-orders-app?base_coin_id=${base_coin_id}&trade_coin_id=${trade_coin_id}&dashboard_type=${dashboard_type}&order_type=${order_type}`
  );
  return data;
};
export const appGetPair = async () => {
  const { data } = await request.get(`/app-get-pair`);
  return data;
};
