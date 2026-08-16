import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_KEY = "445605a";
const BASE_URL = "https://www.omdbapi.com";

function ProductDetail() {
  const { id } = useParams(); // burada imdbID gələcək (məs. "tt3896198")
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProduct() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${BASE_URL}/?apikey=${API_KEY}&i=${id}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`Server xətası: ${res.status}`);
        const data = await res.json();

        if (data.Response === "False") {
          throw new Error(data.Error || "Film tapılmadı");
        }
        setProduct(data);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message || "Film yüklənərkən xəta baş verdi.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchProduct();
    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-2">⚠️ Film tapılmadı</h2>
          <p className="text-gray-600">{error || "Bu ID ilə film mövcud deyil."}</p>
          <Link to="/main" className="text-indigo-600 font-medium mt-4 inline-block">
            ← Əsas səhifəyə qayıt
          </Link>
        </div>
      </div>
    );
  }

  const poster = product.Poster && product.Poster !== "N/A" ? product.Poster : "";

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <div className="bg-gray-50 rounded-xl flex items-center justify-center p-8">
        <img src={poster} alt={product.Title} className="max-h-80 object-contain" />
      </div>
      <div>
        <Link to="/main" className="text-sm text-indigo-600">
          ← Əsas səhifəyə qayıt
        </Link>
        <span className="block text-sm text-gray-500 capitalize mt-3">
          {product.Type} · {product.Year} · {product.Genre}
        </span>
        <h1 className="text-2xl font-bold mt-1">{product.Title}</h1>
        <p className="text-gray-600 mt-4">{product.Plot}</p>

        <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
          <div>
            <span className="text-gray-400 block">Rejissor</span>
            <span className="text-gray-800 font-medium">{product.Director}</span>
          </div>
          <div>
            <span className="text-gray-400 block">IMDb reytinqi</span>
            <span className="text-gray-800 font-medium">⭐ {product.imdbRating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;