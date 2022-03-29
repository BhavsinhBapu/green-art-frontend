import request from "lib/request";

export const getUserCoinForSwap = async () => {
  const { data } = await request.get(`/coin-swap-app`);
  return data;
};
