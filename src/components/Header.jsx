import { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/dataSlice";
import SearchBar from "./SearchBar";


function Header() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1500);

    return () => clearTimeout(timer);
  }, [query]);

  const filtered = data.filter((item) =>
    item.title?.toLowerCase().includes(debouncedQuery.toLowerCase()),
  );

  const closeSearch = () => {
    setQuery("");
    setMobileSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-black tracking-wide">
            Dev<span className="text-indigo-600">Joint</span>
          </h1>

          <nav>
            <a href="#" className="relative text-gray-700 font-semibold group">
              Home
              <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-indigo-600 duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>

        {/* Search */}

        <div className="hidden md:flex w-[450px] relative">
          <div className="w-full h-12 rounded-full border border-gray-300 bg-gray-50 flex items-center px-5 transition-all focus-within:border-indigo-500 focus-within:ring-2 ring-indigo-200">
            <FaSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search task..."
              className="flex-1 bg-transparent outline-none px-4 text-gray-700"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {query && (
              <button onClick={() => setQuery("")} type="button">
                <FaTimes className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
          {query && (
            <div className="absolute top-14 left-0 w-full max-h-60 overflow-y-auto bg-white shadow-lg rounded-lg border border-gray-100 z-50">
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <SearchBar item={item} key={item.id} onSelect={closeSearch} />
                ))
              ) : (
                <p className="p-4 text-center text-sm text-gray-500">
                  Məhsul tapılmadı
                </p>
              )}
            </div>
          )}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Mobile search toggle */}
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="md:hidden w-11 h-11 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600"
          >
            <FaSearch />
          </button>

          {/* Cart */}
          <button className="relative w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 hover:scale-105 duration-300">
            <FaShoppingCart className="text-lg" />

            <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {mobileSearchOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-white z-50 border-b border-gray-200 shadow-lg">
          <div className="flex items-center gap-3 px-4 h-20">
            <div className="flex-1 h-12 rounded-full border border-gray-300 bg-gray-50 flex items-center px-5">
              <FaSearch className="text-gray-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search task..."
                className="flex-1 bg-transparent outline-none px-4 text-gray-700"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              {query && (
                <button onClick={() => setQuery("")} type="button">
                  <FaTimes className="text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            <button
              onClick={closeSearch}
              className="w-11 h-11 shrink-0 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600"
            >
              <FaTimes />
            </button>
          </div>

          {query && (
            <div className="max-h-60 overflow-y-auto px-2 pb-3">
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <SearchBar item={item} key={item.id} onSelect={closeSearch} />
                ))
              ) : (
                <p className="p-4 text-center text-sm text-gray-500">
                  Məhsul tapılmadı
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;