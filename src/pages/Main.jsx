import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { getAllUsers } from "../redux/dataSlice";

const ITEMS_PER_PAGE = 8;

function Main() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg font-medium text-gray-600">Məhsullar yüklənir...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-2">⚠️ Xəta baş verdi</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!loading && data.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center max-w-md">
          <div className="text-6xl mb-3">📦</div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Məhsul tapılmadı
          </h2>
          <p className="text-gray-500 mt-2">
            Hazırda göstəriləcək məhsul yoxdur.
          </p>
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {currentItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Main;