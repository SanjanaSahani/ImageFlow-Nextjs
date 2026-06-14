"use client";

import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const useAxios = (url: string) => {
  const [response, setResponse] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = useCallback(async (requestUrl: string) => {
    try {
      setIsLoading(true);
      setError("");

      const res = await axios.get(requestUrl);
      setResponse(res.data.results || []);
      setTotalPages(res.data.total_pages || 0);
    } catch (err: any) {
      console.error("Axios Error:", err);

      setError(
        err.response?.data?.errors?.[0] ||
          err.message ||
          "Something went wrong"
      );
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
    totalPages,
    fetchData,
  };
};

export default useAxios;