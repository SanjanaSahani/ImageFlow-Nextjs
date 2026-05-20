"use client";

import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const useAxios = (url: string) => {
  const [response, setResponse] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const fetchData = useCallback(async (requestUrl: string) => {
    try {
      setIsLoading(true);
      setError("");

      const res = await axios.get(requestUrl);

      setResponse(res.data.results);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url, fetchData]);

  return {
    response,
    isLoading,
    error,
    fetchData,
  };
};

export default useAxios;