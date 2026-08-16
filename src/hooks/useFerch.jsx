import { useState, useEffect } from "react";

const API_KEY = "445605a"; 
const BASE_URL = "https://www.omdbapi.com";

function useFetch(query, page, itemsPerPage = 8) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    if (!query.trim()) {
      setProducts([]);
      setTotal(0);
      setError(null);
      return;
    }

    const controller = new AbortController();
    const url = `${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`;

    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "False") {
          setProducts([]);
          setTotal(0);
          setError(data.Error || "Nəticə tapılmadı");
        } else {
          setProducts(data.Search);
          setTotal(Number(data.totalResults) || 0);
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError("Xəta baş verdi.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [query, page, itemsPerPage]);

  return { products, total, loading, error };
}

export default useFetch;