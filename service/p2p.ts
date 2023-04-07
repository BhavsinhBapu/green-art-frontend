import { AMOUNT_PRICE } from "helpers/core-constants";
import p2pResuest from "lib/p2pRequest";
//Create Ads
export const createUpdateP2pAds = async (formData: any) => {
  const { data } = await p2pResuest.post("/ads", formData);
  return data;
};
export const getAdsCreateSettings = async () => {
  const { data } = await p2pResuest.get("/ads-create-setting");
  return data;
};
export const getAdsAvailanleBalance = async (
  type: number,
  coin_type: string
) => {
  const { data } = await p2pResuest.post("/ads-available-balance", {
    type: type,
    coin_type: coin_type,
  });
  return data;
};
export const getMarketHighestLowest = async (coin_type: any, currency: any) => {
  const { data } = await p2pResuest.get(
    `/ads-price-get?coin_type=${coin_type}&currency=${currency}`
  );
  return data;
};
export const getMarketPrice = async (coin: any, currency: any) => {
  const { data } = await p2pResuest.post(`/get-market-price`, {
    coin: coin,
    currency: currency,
  });
  return data;
};
//Trade Page Ads
export const getAdsDetails = async (ads_type: number, uid: string) => {
  const { data } = await p2pResuest.get(
    `/ads-details?ads_type=${ads_type}&uid=${uid}`
  );
  return data;
};
// ads-market-setting
export const getAdsMarketSettings = async () => {
  const { data } = await p2pResuest.get(`/ads-market-setting`);
  return data;
};
export const adsFilterChanges = async (
  type: number,
  amount: number,
  coin: string,
  currency: string,
  payment_method: string,
  country: string,
  per_page: number,
  page: number
) => {
  const { data } = await p2pResuest.post(`/ads-filter-change`, {
    type: type,
    amount: amount,
    coin: coin,
    currency: currency,
    payment_method: payment_method,
    country: country,
    per_page: per_page,
    page: page,
  });
  return data;
};
//Payment Method
export const AddPaymentMethod = async (formData: any) => {
  const { data } = await p2pResuest.post("/payment-method", formData);
  return data;
};
export const paymentMethodDetails = async (uid: string) => {
  const { data } = await p2pResuest.get(`/details-payment-method-${uid}`);
  return data;
};
export const getPaymentMethods = async (per_page: number, page: number) => {
  const { data } = await p2pResuest.get(
    `/payment-method?per_page=${per_page}&page=${page}`
  );
  return data;
};
export const adminPaymentMethods = async () => {
  const { data } = await p2pResuest.get(`/admin-payment-method`);
  return data;
};
//my ads
export const changeAdsStatus = async (type: number, id: string) => {
  const { data } = await p2pResuest.post("/ads-status-change", {
    type: type,
    id: id,
  });
  return data;
};
export const userAdsFilterChange = async (
  type: number,
  coin: string,
  ads_status: number,
  from_date: string,
  to_date: string
) => {
  const { data } = await p2pResuest.post("/user-ads-filter", {
    type: type,
    coin: coin,
    ads_status: ads_status,
    from_date: from_date,
    to_date: to_date,
  });
  return data;
};
export const p2pOrderRate = async (
  ads_type: any,
  ads_id: any,
  amount: any,
  price: any
) => {
  const { data } = await p2pResuest.post(
    "/get-p2p-order-rate",
    amount
      ? {
          ads_type: ads_type,
          ads_id: ads_id,
          amount: amount,
        }
      : {
          ads_type: ads_type,
          ads_id: ads_id,
          price: price,
        }
  );
  return data;
};
//Wallet
export const getWalletList = async (per_page: number, page: number) => {
  const { data } = await p2pResuest.get(
    `/wallets?per_page=${per_page}&page=${page}`
  );
  return data;
};
export const walletBalanceTransfer = async (
  type: number,
  coin: string,
  amount: number
) => {
  const { data } = await p2pResuest.post("/transfer-wallet-balance", {
    type: type,
    coin: coin,
    amount: amount,
  });
  return data;
};
// trade
// place-p2p-order
export const placeP2POrder = async (
  ads_type: number,
  ads_id: string,
  payment_id: string,
  value: number,
  lastChanged: number
) => {
  const { data } = await p2pResuest.post(
    "/place-p2p-order",
    lastChanged === AMOUNT_PRICE
      ? {
          ads_type: ads_type,
          ads_id: ads_id,
          payment_id: payment_id,
          price: value,
        }
      : {
          ads_type: ads_type,
          ads_id: ads_id,
          payment_id: payment_id,
          amount: value,
        }
  );
  return data;
};
//

export const myP2pOrder = async (per_page: number, page: number) => {
  const { data } = await p2pResuest.get(
    `/my-p2p-order?per_page=${per_page}&page=${page}`
  );
  return data;
};
