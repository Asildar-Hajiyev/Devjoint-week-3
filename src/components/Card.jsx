function Card({ item }) {
  return (
    <div className="w-full rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition duration-300 flex flex-col bg-white">
      <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-50 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-4"
        />
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <span className="text-xs sm:text-sm text-gray-500 capitalize">
          {item.category}
        </span>

        <h2 className="text-sm sm:text-lg font-semibold mt-1 sm:mt-2 line-clamp-2">
          {item.title.slice(0,22)}
        </h2>

        <p className="hidden sm:block text-gray-600 text-sm mt-2 line-clamp-2">
          {item.description.slice(0,100)}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 sm:pt-5">
          <span className="text-lg sm:text-2xl font-bold text-blue-600">
            ${item.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;