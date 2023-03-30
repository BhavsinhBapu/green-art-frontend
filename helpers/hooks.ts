import { useState, useEffect } from "react";

export const useApi = (apiFunction: any, options: any = {}) => {
  const [data, setData] = useState(options.initialData || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await apiFunction();
      setData(response);
      setError(null);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refreshIndex]);

  const refreshData = () => {
    setRefreshIndex((prevIndex) => prevIndex + 1);
  };

  const resetData = () => {
    setData(options.initialData || null);
    setError(null);
    setLoading(false);
  };

  return { data, loading, error, fetchData, refreshData, resetData };
};
