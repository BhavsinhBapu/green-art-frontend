import { useApi } from "helpers/hooks";
import { useState } from "react";
import { getAdsCreateSettings } from "service/p2p";

export const useAddPostInitial = () => {
  const [addTabButton, setAddTabButton] = useState(true);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedCurrency, setselectedCurrency] = useState(null);
  const [addStep, setAddStep] = useState("stepOne");
  const { data, loading, error, refreshData } = useApi(getAdsCreateSettings);
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
  };
};
