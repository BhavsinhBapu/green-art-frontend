import p2pResuest from "lib/p2pRequest";
//Create Ads
export const createUpdateP2pAds = async (
  ads_type: any,
  coin_type: any,
  fiat_type: any,
  price_type: any,
  price: any,
  price_rate: any,
  amount: any,
  min_limit: any,
  max_limit: any,
  terms: any,
  auto_reply: any,
  countrys: any,
  payment_methods: any,
  time_limit: any,
  register_days: any,
  coin_holding: any
) => {
  const { data } = await p2pResuest.post("/ads", {
    ads_type: ads_type,
    coin_type: coin_type,
    fiat_type: fiat_type,
    price_type: price_type,
    price: price,
    price_rate: price_rate,
    amount: amount,
    min_limit: min_limit,
    max_limit: max_limit,
    terms: terms,
    auto_reply: auto_reply,
    payment_methods: payment_methods,
    countrys: countrys,
    time_limit: time_limit,
    register_days: register_days,
    coin_holding: coin_holding,
  });
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
export const AddPaymentMethod = async (
  payment_uid: string,
  uid: string,
  delete_key: string,
  username: string,
  bank_name: string,
  bank_account_number: string,
  account_opening_branch: string,
  transaction_reference: string,
  card_number: string,
  card_type: string,
  mobile_account_number: string
) => {
  const { data } = await p2pResuest.post("/payment-method", {
    payment_uid: payment_uid,
    uid: uid,
    delete: delete_key,
    username: username,
    bank_name: bank_name,
    bank_account_number: bank_account_number,
    account_opening_branch: account_opening_branch,
    transaction_reference: transaction_reference,
    card_number: card_number,
    card_type: card_type,
    mobile_account_number: mobile_account_number,
  });
  return data;
};
export const getPaymentMethods = async (per_page: number, page: number) => {
  const { data } = await p2pResuest.get(
    `/payment-method?per_page=${per_page}&page=${page}`
  );
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
  amount: number,
  price: number
) => {
  const { data } = await p2pResuest.post("/place-p2p-order", {
    ads_type: ads_type,
    ads_id: ads_id,
    payment_id: payment_id,
    amount: amount,
    price: price,
  });
  return data;
};
