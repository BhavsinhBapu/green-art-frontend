import request from "lib/request";

export const getFiatWithdrawDataApi = async () => {
  const { data } = await request.get(`wallet-currency-withdraw`);
  return data;
};

export const submitFiatWithdrawDataApi = async (
  currency: any,
  amount: any,
  bank_id: any,
  payment_info: any,
  method_id: any,
  method: any
) => {
  console.log(method, "payment_method_typepayment_method_type");
  const { data } = await request.post(
    `wallet-currency-withdraw`,
    payment_info
      ? {
          currency,
          amount,
          bank_id,
          payment_info,
          payment_method_type: method,
          payment_method_id: method_id,
        }
      : {
          currency,
          amount,
          bank_id,

          payment_method_type: method,
          payment_method_id: method_id,
        }
  );
  return data;
};

export const getFiatDepositDataApi = async () => {
  const { data } = await request.get(`wallet-currency-deposit`);
  return data;
};

export const submitFiatWalletDepositApi = async (credential: any) => {
  const { data } = await request.post("/wallet-currency-deposit", credential);
  return data;
};

export const GetFiatPaystackPaymentUrl = async (email: any, amount: any) => {
  const { data } = await request.post("/deposit-currency-paystack-url", {
    email: email,
    amount: amount,
  });
  return data;
};
