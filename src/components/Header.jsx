import {  useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import useFetch from "../hooks/useFerch";
import SearchResultItem from "./SearchResultItem";

function Header() {
 const [query, setQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const debouncedQuery = useDebounce(query, 400);
  const { products: filtered } = useFetch(debouncedQuery, 1, 6);

  const closeSearch = () => {
    setQuery("");
    setMobileSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-10">
          <Link to="/main" className="text-3xl font-black tracking-wide">
            Dev<span className="text-indigo-600">Joint</span>
          </Link>

          <nav>
            <Link to="/main"  className="relative text-gray-700 font-semibold group">
              Home
              <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-indigo-600 duration-300 group-hover:w-full"></span>
            </Link>
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
                  <SearchResultItem item={item} key={item.id} onSelect={closeSearch} />
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
                  <SearchResultItem item={item} key={item.id} onSelect={closeSearch} />
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
