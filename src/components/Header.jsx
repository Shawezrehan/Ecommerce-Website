export function Header() {
  return (
    <>
      <header className="w-full flex items-center justify-between px-6 py-4 h-[80px] shadow-md bg-[#0c1c3a] text-yellow-400 relative z-50">
        <h1 className="text-2xl font-bold">E-commerce</h1>

        <ul className="flex gap-6 text-white font-medium">
          <li className="hover:text-yellow-400 cursor-pointer">Mens</li>
          <li className="hover:text-yellow-400 cursor-pointer">Womens</li>
          <li className="hover:text-yellow-400 cursor-pointer">Kids</li>
          <li className="hover:text-yellow-400 cursor-pointer">Winter</li>
          <li className="hover:text-yellow-400 cursor-pointer">Lifestyle</li>
        </ul>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 rounded-lg border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="flex items-center justify-center bg-yellow-400 text-black w-10 h-10 rounded-full hover:bg-black hover:text-yellow-400">
            <i className="fa-solid fa-user"></i>
          </button>
          <button className="flex items-center justify-center bg-yellow-400 text-black w-10 h-10 rounded-full hover:bg-black hover:text-yellow-400">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </header>
    </>
  );
}
