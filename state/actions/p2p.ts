import {
  FLOAT_PRICE,
  FIXED_PRICE,
  PAYMENT_METHOD_BANK,
  PAYMENT_METHOD_CARD,
  PAYMENT_METHOD_MOBILE,
  BUY,
  SELL,
} from "helpers/core-constants";
import { useApi, usePostApiFunction } from "helpers/hooks";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createUpdateP2pAds,
  getAdsCreateSettings,
  getMarketHighestLowest,
  adminPaymentMethods,
  AddPaymentMethod,
  getPaymentMethods,
  paymentMethodDetails,
  adsFilterChanges,
  getAdsMarketSettings,
  getAdsDetails,
  p2pOrderRate,
  placeP2POrder,
  myP2pOrder,
} from "service/p2p";

export const useAddPostInitial = () => {
  const router = useRouter();
  const [adsType, setAdsType] = useState(1);
  const [registerDays, setregisterDays] = useState(0);
  const [coinHolding, setcoinHolding] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<any>([]);
  const [terms, setTerms] = useState("");
  const [auto_reply, setAuto_reply] = useState("");
  const [selectedPaymentTime, setSelectedPaymentTime] = useState<any>(null);
  const [Amount, setAmount] = useState({
    amount: 0,
    min_limit: 0,
    max_limit: 0,
  });
  const [priceType, setPriceType] = useState(FIXED_PRICE);
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [selectedCurrency, setselectedCurrency] = useState<any>(null);
  const [pricePoint, setPricePoint] = useState({
    highest_price: 0,
    lowest_price: 0,
    price: 0,
  });
  const createUpdateP2pAdsAction = async () => {
    let paymentMethodsCommaSeparated = selectedPayment
      .map((method: any) => method.value)
      .join(",");
    let selectedCountryCommaSeparated = selectedCountry
      .map((method: any) => method.value)
      .join(",");
    const formData: any = new FormData();
    formData.append("ads_type", adsType);
    formData.append("coin_type", selectedAsset.value);
    formData.append("fiat_type", selectedCurrency.value);
    formData.append("price_type", priceType);
    formData.append("price", pricePoint.price);
    formData.append("price_rate", pricePoint.price);
    formData.append("amount", Amount.amount);
    formData.append("min_limit", Amount.min_limit);
    formData.append("max_limit", Amount.max_limit);
    formData.append("terms", terms);
    formData.append("auto_reply", auto_reply);
    formData.append("countrys", selectedCountryCommaSeparated);
    formData.append("payment_methods", paymentMethodsCommaSeparated);
    formData.append("time_limit", selectedPaymentTime.value);
    formData.append("register_days", registerDays);
    formData.append("coin_holding", coinHolding);
    const response = await createUpdateP2pAds(formData);
    if (response.success) {
      toast.success(response.message);
      router.push("/p2p");
    } else {
      toast.error(response.message);
    }
  };
  const [addStep, setAddStep] = useState("stepOne");
  const { data, loading, error, refreshData } = useApi(getAdsCreateSettings);
  const {
    data: marketData,
    error: marketError,
    loading: marketLoading,
    postData,
    resetData,
  }: any = usePostApiFunction(getMarketHighestLowest);

  useEffect(() => {
    if (selectedAsset && selectedCurrency) {
      postData(selectedAsset.value, selectedCurrency.value);
    }
  }, [selectedAsset, selectedCurrency]);
  useEffect(() => {
    if (marketData?.success) {
      setPricePoint(marketData.data);
    }
  }, [marketData]);
  return {
    data,
    loading,
    error,
    refreshData,
    addStep,
    setAddStep,
    selectedAsset,
    selectedCurrency,
    setSelectedAsset,
    setselectedCurrency,
    pricePoint,
    priceType,
    setPriceType,
    setPricePoint,
    setSelectedPayment,
    selectedPayment,
    selectedPaymentTime,
    setSelectedPaymentTime,
    Amount,
    setAmount,
    terms,
    setTerms,
    auto_reply,
    setAuto_reply,
    selectedCountry,
    setSelectedCountry,
    registerDays,
    coinHolding,
    setregisterDays,
    setcoinHolding,
    adsType,
    setAdsType,
    createUpdateP2pAdsAction,
  };
};

export const useCreatePaymentMethods = () => {
  const router: any = useRouter();
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedMethods, setSelectedMethods] = useState<any>();
  const [SubmitData, setSubmitData] = useState({
    payment_uid: "",
    username: "",
    bank_name: "",
    bank_account_number: "",
    account_opening_branch: "",
    transaction_reference: "",
    card_number: "",
    card_type: "",
    mobile_account_number: "",
  });
  const getData = async () => {
    let payments: any = [];

    const response = await adminPaymentMethods();
    response?.data?.map((asset: any) => {
      const obj = {
        value: asset.uid,
        label: asset.name,
        payment_type: asset.payment_type,
      };
      payments.push(obj);
    });
    setPaymentMethods(payments);
  };
  const handleSelectedMethod = (e: any) => {
    setSelectedMethods(e);
    setSubmitData({ ...SubmitData, payment_uid: e.value });
  };
  const handleCardSelectedMethod = (e: any) => {
    setSubmitData({ ...SubmitData, card_type: e.value });
  };
  useEffect(() => {
    getData();
  }, []);
  const submitData = async () => {
    const formData = new FormData();
    formData.append("payment_uid", SubmitData.payment_uid);
    formData.append("username", SubmitData.username);
    if (selectedMethods?.payment_type === PAYMENT_METHOD_BANK) {
      formData.append("bank_name", SubmitData.bank_name);
      formData.append("bank_account_number", SubmitData.bank_account_number);
      formData.append(
        "account_opening_branch",
        SubmitData.account_opening_branch
      );
      formData.append(
        "transaction_reference",
        SubmitData.transaction_reference
      );
    }
    if (selectedMethods?.payment_type === PAYMENT_METHOD_CARD) {
      formData.append("card_number", SubmitData.card_number);
      formData.append("card_type", SubmitData.card_type);
    }
    if (selectedMethods?.payment_type === PAYMENT_METHOD_MOBILE) {
      formData.append(
        "mobile_account_number",
        SubmitData.mobile_account_number
      );
    }

    const response = await AddPaymentMethod(formData);
    if (response.success) {
      toast.success(response.message);
      router.push("/p2p/p2p-profile");
    } else {
      toast.error(response.message);
    }
  };

  const getDetails = async () => {
    const response = await paymentMethodDetails(router.query.uid.toString());
    setSubmitData(response.data);
    setSelectedMethods({
      payment_type: parseInt(response.data.admin_pamynt_method.payment_type),
    });
  };
  const editData = async () => {
    const formData = new FormData();
    formData.append("payment_uid", SubmitData.payment_uid);
    formData.append("uid", router?.query?.uid);
    formData.append("username", SubmitData.username);
    if (selectedMethods?.payment_type === PAYMENT_METHOD_BANK) {
      formData.append("bank_name", SubmitData.bank_name);
      formData.append("bank_account_number", SubmitData.bank_account_number);
      formData.append(
        "account_opening_branch",
        SubmitData.account_opening_branch
      );
      formData.append(
        "transaction_reference",
        SubmitData.transaction_reference
      );
    }
    if (selectedMethods?.payment_type === PAYMENT_METHOD_CARD) {
      formData.append("card_number", SubmitData.card_number);
      formData.append("card_type", SubmitData.card_type);
    }
    if (selectedMethods?.payment_type === PAYMENT_METHOD_MOBILE) {
      formData.append(
        "mobile_account_number",
        SubmitData.mobile_account_number
      );
    }

    const response = await AddPaymentMethod(formData);
    if (response.success) {
      toast.success(response.message);
      // router.push("/p2p/payment-methods");
    } else {
      toast.error(response.message);
    }
  };
  useEffect(() => {
    if (router.query.uid) {
      getDetails();
    }
  }, [router.query.uid]);

  return {
    paymentMethods,
    setPaymentMethods,
    handleSelectedMethod,
    selectedMethods,
    setSelectedMethods,
    setSubmitData,
    SubmitData,
    handleCardSelectedMethod,
    submitData,
    editData,
    uid: router.query.uid,
  };
};

export const deletePaymentMethodsAction = async (
  per_page: number,
  page: number,
  setReport: React.Dispatch<SetStateAction<object>>,
  setProcessing: React.Dispatch<SetStateAction<boolean>>,
  setStillHistory: React.Dispatch<SetStateAction<boolean>>,
  uid: string
) => {
  setProcessing(true);
  const formData = new FormData();
  formData.append("delete", uid);
  const responseOne = await AddPaymentMethod(formData);
  if (responseOne.success) {
    toast.success(responseOne.message);
  } else {
    toast.error(responseOne.message);
  }

  const response = await getPaymentMethods(per_page, page);
  setReport(response.data.data);
  setStillHistory(response.data);
  setProcessing(false);
  return response;
};
// myP2pOrder
export const myP2pOrderAction = async (
  per_page: number,
  page: number,
  setReport: React.Dispatch<SetStateAction<object>>,
  setProcessing: React.Dispatch<SetStateAction<boolean>>,
  setStillHistory: React.Dispatch<SetStateAction<boolean>>
) => {
  setProcessing(true);
  const response = await myP2pOrder(per_page, page);
  setReport(response.data.data);
  setStillHistory(response.data);
  setProcessing(false);
  return response;
};
export const getPaymentMethodsAction = async (
  per_page: number,
  page: number,
  setReport: React.Dispatch<SetStateAction<object>>,
  setProcessing: React.Dispatch<SetStateAction<boolean>>,
  setStillHistory: React.Dispatch<SetStateAction<boolean>>
) => {
  setProcessing(true);
  const response = await getPaymentMethods(per_page, page);
  setReport(response.data.data);
  setStillHistory(response.data);
  setProcessing(false);
  return response;
};

export const landingPageAction = async (
  type: any,
  amount: any,
  coin: any,
  currency: any,
  payment_method: any,
  country: any,
  per_page: any,
  page: any,
  setHistory: any,
  setProcessing: any,
  setStillHistory: any,
  setSettings: any
) => {
  setProcessing(true);
  const { data } = await getAdsMarketSettings();
  setSettings(data);
  const response = await adsFilterChanges(
    type,
    amount,
    coin,
    currency,
    payment_method,
    country,
    per_page,
    page
  );
  setHistory(response?.data?.data);
  setStillHistory(response?.data);
  setProcessing(false);
};
export const landingSettingsAction = async (
  setProcessing: any,
  setSettings: any,
  setFilters: any,
  filters: any
) => {
  setProcessing(true);
  const { data } = await getAdsMarketSettings();
  setSettings(data);
  if (data?.assets?.length > 0) {
    setFilters({ ...filters, coin: data?.assets[0]?.coin_type });
  }
  setProcessing(false);
};
// getAdsMarketSettings;
export const getAdsDetailsAction = async (
  uid: any,
  type: any,
  setDetails: any
) => {
  const { data } = await getAdsDetails(type, uid);
  setDetails(data);
  console.log(
    data,
    "datadatadatadatadatadatadatadatadatadatadatadatadatadatadata"
  );
};
export const p2pOrderRateAction = async (
  ads_type: any,
  ads_id: any,
  amount: any,
  price: any,
  setRate: any
) => {
  const { data } = await p2pOrderRate(
    parseInt(ads_type) === BUY ? SELL : BUY,
    ads_id,
    amount,
    price
  );
  setRate(data);
  console.log(data, "My data");
};

export const placeP2POrderAction = async (
  ads_type: any,
  ads_id: any,
  payment_id: any,
  value: any,
  lastChanged: any
) => {
  const response = await placeP2POrder(
    ads_type,
    ads_id,
    payment_id,
    value,
    lastChanged
  );
  if (response.success) {
    toast.success(response.message);
  } else {
    toast.error(response.message);
  }
};
