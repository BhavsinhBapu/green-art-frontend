import request from "lib/request";

export const getUserCoinForSwap = async () => {
  const { data } = await request.get(`/coin-swap-app`);
  return data;
};
// get-rate-app?from_coin_id=21&to_coin_id=22&amount=5
export const getRate = async (
  from_coin_id: number,
  to_coin_id: number,
  amount: number
) => {
  const { data } = await request.get(
    `/get-rate-app?from_coin_id=${from_coin_id}&to_coin_id=${to_coin_id}&amount=${amount}`
  );
  return data;
};
// swap - coin - app;
export const swapCoin = async (
  from_coin_id: number,
  to_coin_id: number,
  amount: number
) => {
  const { data } = await request.post(`/swap-coin-app`, {
    from_coin_id,
    to_coin_id,
    amount,
  });
  return data;
};
