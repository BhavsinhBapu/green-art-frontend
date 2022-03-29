import { getUserCoinForSwap } from "service/swap";

export const getUserCoinForSwapAction = async (setList: any) => {
  const { wallets } = await getUserCoinForSwap();
  setList(wallets);
  return wallets;
};
