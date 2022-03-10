import request from "lib/request";

// export const WalletListApi = async (page: number) => {
//   const { data } = await request.get(`/wallet-list?page=${page}`);
//   return data;
// };

export const WalletListApi = async (url: string) => {
  const { data } = await request.get(url);
  return data;
};
