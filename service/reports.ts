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
