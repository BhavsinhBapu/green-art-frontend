import request from "lib/request";

export const getFiatWithdrawDataApi = async () => {
  const { data } = await request.get(`wallet-currency-withdraw`);
  return data;
};

export const submitFiatWithdrawDataApi = async (
  currency: any,
  amount: any,
  bank_id: any
) => {
  const { data } = await request.post(`wallet-currency-withdraw`, {
    currency,
    amount,
    bank_id,
  });
  return data;
};
