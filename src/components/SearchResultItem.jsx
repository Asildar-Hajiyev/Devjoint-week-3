import { Link } from "react-router-dom";

function SearchResultItem({ item, onSelect }) {
  const poster = item.Poster && item.Poster !== "N/A" ? item.Poster : "";

  return (
    <li className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-150 cursor-pointer">
      <Link
        to={`/product/${item.imdbID}`}
        onClick={onSelect}
        className="flex items-center gap-3 flex-1 min-w-0"
      >
        <div className="w-14 h-14 shrink-0 rounded-md bg-gray-50 overflow-hidden flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            src={poster}
            alt={item.Title}
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-800 truncate leading-snug">
            {item.Title}
          </p>
          <span className="text-sm font-semibold text-gray-900">
            {item.Year}
          </span>
        </div>
      </Link>
    </li>
  );
}

export default SearchResultItem;