import { useApi, usePostApiFunction } from "helpers/hooks";
import { useEffect, useState } from "react";
import { getAdsCreateSettings, getMarketHighestLowest } from "service/p2p";

export const useAddPostInitial = () => {
  const [addTabButton, setAddTabButton] = useState(true);
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [selectedCurrency, setselectedCurrency] = useState<any>(null);
  const [pricePoint, setPricePoint] = useState({
    highest_price: 0,
    lowest_price: 0,
  });
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
    setAddTabButton,
    addTabButton,
    addStep,
    setAddStep,
    selectedAsset,
    selectedCurrency,
    setSelectedAsset,
    setselectedCurrency,
    pricePoint,
  };
};
