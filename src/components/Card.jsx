function Card({item}) {
  return (
    <div key={item.id} className="w-[280px] rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[220px] object-cover"
      />

      <div className="p-4">
        <span className="text-sm text-gray-500"> {item.category}</span>

        <h2 className="text-lg font-semibold mt-2 line-clamp-2">
          {item.title.slice(0,22)}
        </h2>

        <p className="text-gray-600 text-sm mt-2">
          {item.description.slice(0,100)}
        </p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold text-blue-600">${item.price}</span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;