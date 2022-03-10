import request from "lib/request";

export const WalletListApi = async (url: string) => {
  const { data } = await request.get(url);
  return data;
};

export const WalletDepositApi = async (id: number) => {
  const { data } = await request.post(`/wallet-deposit-${id}`);
  return data;
};
