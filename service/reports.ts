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

export const AllBuyOrdersHistoryApi = async (
  per_page: number,
  page: number
) => {
  const { data } = await request.get(
    `/all-buy-orders-history-app?per_page=${per_page}&page=${page}`
  );
  return data;
};

export const AllSellOrdersHistoryApi = async (
  per_page: number,
  page: number
) => {
  const { data } = await request.get(
    `/all-sell-orders-history-app?per_page=${per_page}&page=${page}`
  );
  return data;
};
