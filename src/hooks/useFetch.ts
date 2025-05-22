import { useEffect, useState } from "react";

interface FetchLog {
  url: string;
  body: any;
  status: number | string;
  timestamp: string;
}

export function useFetch<T = any>(url: string, options: RequestInit = {}) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<number | string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestInit: RequestInit = {
          method: options.method || "GET",
          headers: {
            "Content-Type": "application/json",
            ...(options.headers || {})
          },
          body: options.body ? JSON.stringify(options.body) : undefined
        };

        const response = await fetch(url, requestInit);
        const result: T = await response.json();

        setStatus(response.status);
        setData(result);

        const log: FetchLog = {
          url,
          body: options.body || null,
          status: response.status,
          timestamp: new Date().toISOString()
        };

        localStorage.setItem("fetchLog", JSON.stringify(log));
      } catch (err: any) {
        setError(err.message);
        setStatus("failed");
      }
    };

    fetchData();
  }, [url]);

  return { data, status, error };
}
