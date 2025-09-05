import { useEffect, useState } from "react";

function ProductOverview() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");

  // Live API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filtered =
    filter === "All"
      ? products
      : products.filter((p) =>
          p.category.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <section className="w-full py-6">
      {/* Heading Section */}
      <div className="w-[80%] max-w-6xl mx-auto text-center mb-4">
        <h2 className="text-2xl font-bold mb-1 text-[#0c1c3a]">Product Overview</h2>
        <p className="text-[#0c1c3a] text-sm">
          Check out most promising product bought by our buyers
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {["All", "Men", "Women", "Electronics", "Jewelery"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1 rounded-full border text-sm font-medium transition ${
              filter === cat
                ? "bg-yellow-400 text-black border-yellow-400"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] max-w-6xl mx-auto">
        {filtered.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow hover:shadow-md overflow-hidden group"
          >
            {/* Badge */}
            <span className="absolute top-2 left-2 bg-black text-yellow-400 text-xs font-bold px-3 py-0.5 rounded">
              SALE
            </span>

            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain bg-[#1E2A38] p-4"
            />

            {/* Hover Buttons */}
            <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition">
              <button className="bg-white p-1.5 rounded-full shadow hover:bg-yellow-400 hover:text-white text-sm">
                ❤
              </button>
              <button className="bg-white p-1.5 rounded-full shadow hover:bg-yellow-400 hover:text-white text-sm">
                🛒
              </button>
              <button className="bg-white p-1.5 rounded-full shadow hover:bg-yellow-400 hover:text-white text-sm">
                🔍
              </button>
            </div>

            {/* Details */}
            <div className="p-3 text-center bg-[#0c1c3a] "  >

              <h3 className="text-sm font-semibold text-white text-left mb-1 line-clamp-1">
                {product.title}
              </h3>

              <div className="flex justify-left items-left gap-2">
                <span className="text-green-600 font-bold text-[18px]">
                  ${product.price}
                </span>
                <span className="text-gray-400 line-through text-xs mt-[05px]">
                  ${(product.price + 50).toFixed(0)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductOverview;
