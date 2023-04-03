import { useApi } from "helpers/hooks";
import { getAdsCreateSettings } from "service/p2p";

export const useAddPostInitial = () => {
  const { data, loading, error,refreshData } = useApi(getAdsCreateSettings);
  return { data, loading, error, refreshData };
};
