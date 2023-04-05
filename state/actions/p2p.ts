import { FLOAT_PRICE, FIXED_PRICE } from "helpers/core-constants";
import { useApi, usePostApiFunction } from "helpers/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createUpdateP2pAds,
  getAdsCreateSettings,
  getMarketHighestLowest,
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
