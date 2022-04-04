import { getUserCoinForSwap, getRate } from "service/swap";

export const getUserCoinForSwapAction = async (setList: any) => {
  const { data } = await getUserCoinForSwap();
  console.log(data.wallets, "wallets");
  setList(data.wallets);
  return data.wallets;
};
export const getRateAction = async (
  from_coin_id: number,
  to_coin_id: number,
  amount: number,
  setRate: any
) => {
  const data = await getRate(from_coin_id, to_coin_id, amount);
  setRate({
    wallet_rate: data.wallet_rate,
    convert_rate: data.convert_rate,
    rate: data.rate,
  });
  return data.convert_rate;
};
