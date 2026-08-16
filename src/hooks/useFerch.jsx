import { useState, useEffect } from "react";

const BASE_URL = "https://dummyjson.com";

function useFetch(query, page, itemsPerPage = 8) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const skip = (page - 1) * itemsPerPage;
    const url = query.trim()
      ? `${BASE_URL}/products/search?q=${query}&limit=${itemsPerPage}&skip=${skip}`
      : `${BASE_URL}/products?limit=${itemsPerPage}&skip=${skip}`;

    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setTotal(data.total || 0);
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