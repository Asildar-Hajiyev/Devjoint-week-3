import { Link } from "react-router-dom";

function Card({ item, onSelect }) {
  const poster = item.Poster && item.Poster !== "N/A" ? item.Poster : "";

  return (
    <div className="w-full rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition duration-300 flex flex-col bg-white relative">
      <span className="absolute top-2 right-2 bg-gray-900/80 text-white text-xs font-semibold px-2 py-1 rounded">
        {item.Year}
      </span>

      <Link  to={`/product/${item.imdbID}`}
        onClick={onSelect} className="w-full h-40 sm:h-48 md:h-56 bg-gray-50 flex items-center justify-center">
        <img
          src={poster}
          alt={item.Title}
          className="w-full h-full object-cover"
        />
      </Link>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <span className="text-xs sm:text-sm text-gray-500 capitalize">
          {item.Type}
        </span>

        <h2 className="text-sm sm:text-lg font-semibold mt-1 sm:mt-2 line-clamp-2">
          {item.Title}
        </h2>
      </div>
    </div>
  );
}

export default Card;