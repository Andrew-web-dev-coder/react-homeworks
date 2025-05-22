import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestInit = {
          method: options.method || "GET",
          headers: {
            "Content-Type": "application/json",
            ...options.headers
          },
          body: options.body ? JSON.stringify(options.body) : undefined
        };

        const response = await fetch(url, requestInit);
        const result = await response.json();

        setStatus(response.status);
        setData(result);

        localStorage.setItem("fetchLog", JSON.stringify({
          url,
          body: options.body || null,
          status: response.status,
          timestamp: new Date().toISOString()
        }));
      } catch (err) {
        setError(err.message);
        setStatus("failed");
      }
    };

    fetchData();
  }, [url]);

  return { data, status, error };

}

}

