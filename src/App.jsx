import Products from "./components/Products";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Hero Section */}
      <section className="snap-start relative h-screen w-full">
        {/* Header */}
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

        {/* Hero Text Section */}
        <div className="relative flex flex-col items-center justify-center text-white h-[calc(100vh-80px)]">
          <img
            src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-117919.jpg"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0c1c3a]/10"></div>
          <h1 className="relative text-5xl font-bold mb-4 text-[#0c1c3a]">
            Welcome to Our Store
          </h1>
          <p className="relative text-lg text-[#0c1c3a]">
            Discover the latest trends in fashion & lifestyle
          </p>
        </div>
      </section>

      {/* Women + Men + Baby Section */}
      <section className="snap-start min-h-screen flex items-center justify-center bg-[#FFFDF0] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] max-w-6xl">
          {/* Women’s Card */}
          <div className="relative rounded-xl overflow-hidden h-72 flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iOOVmH-3GUICHaj6Jywf5coKsegTJLLwsA&s"
              alt="Women Fashion"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 p-6 text-white">
              <h3 className="text-3xl font-bold mb-2">Collection For Women</h3>
              <p className="text-lg mb-3">
                Up To{" "}
                <span className="font-bold text-yellow-400">40% Off</span>
              </p>
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500">
                Shop Now
              </button>
            </div>
          </div>

          {/* Men’s Card */}
          <div className="relative rounded-xl overflow-hidden h-72 flex items-center">
            <img
              src="https://t3.ftcdn.net/jpg/02/68/77/20/360_F_268772018_c4jJBONUHzGqUF6m1lBOy44EMSEMb0e3.jpg"
              alt="Men Fashion"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 p-6 text-white">
              <h3 className="text-3xl font-bold mb-2">Collection For Men</h3>
              <p className="text-lg mb-3">
                Up To{" "}
                <span className="font-bold text-yellow-400">40% Off</span>
              </p>
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500">
                Shop Now
              </button>
            </div>
          </div>

          {/* Baby & Kids Card - alag row full width */}
          <div className="relative rounded-xl overflow-hidden h-[100%] md:h- flex items-left justify-left md:col-span-2">
            <img
              src="https://img.freepik.com/free-photo/shot-cute-baby-girl-looking-camera_329181-19580.jpg"
              alt="Baby Fashion"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/40"></div>
            <div className="relative z-10 text-right md:text-left p-6 pt-[100px]">
              <h3 className="text-[40px] font-bold mb-2 text-black">
                Baby & Kids Fashion
              </h3>
              <div className="bg-yellow-400 px-6 py-1 w-[50%] h-[35%] inline-block rounded-[50px] text-black">
                <p className="font-bold text-[24px]">SALE!</p>
                <span className="text-[12px] font-normal mb-2 ">
                  07 to 14 February
                </span>
              </div>
              <br />
              <button className="mt-4 bg-green-700 text-white px-7 py-2 rounded-full hover:bg-green-800">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="snap-start  flex flex-col items-center justify-center bg-[#FFFDF0] ">
        <Products />
      </section>

      {/* Top Brands + Newsletter + Footer Section */}
      <section className="snap-start min-h-screen flex flex-col items-center bg-[#FFFDF0] ">
        {/* Top Brands Card */}
        <div className="bg-[#0c1c3a] p-6 rounded-[20px] w-full max-w-4xl text-white mt-[3%] mb-12">
          <h3 className="text-[35px] font-bold text-center mb-1 ">Top Brands Deal</h3>
          <p className="text-center text-[15px] mb-6">
            Up To <span className="text-yellow-400 font-semibold">60% off</span> on brands
          </p>
          <div className="flex justify-center items-center flex-wrap gap-4 px-4 mb-10">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
              "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Levis-logo-quer.svg/250px-Levis-logo-quer.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Adidas_2022_logo.svg/250px-Adidas_2022_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Puma_complete_logo.svg/330px-Puma_complete_logo.svg.png",
            ].map((logo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md p-2 flex items-center justify-center h-14 w-24"
              >
                <img src={logo} alt="Brand Logo" className="h-8" />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription Box */}
        <div className="flex flex-col items-center text-center mb-12 mt-[4%]">
          <h3 className="text-xl font-bold text-[#0c1c3a] mb-1">Subscribe Newsletter</h3>
          <p className="text-sm text-black mb-6">
            Subscribe to our email and get updates right in your inbox
          </p>
          <div className="flex items-center bg-gray-100 rounded-full px-6 py-3 shadow-md w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500"
            />
            <button className="ml-4 bg-yellow-400 hover:bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center transition duration-300 shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9 4 9-9-9 13-3-4H3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer merged here */}
        <footer className="w-full text-center bg-black text-white py-3 mt-[72px] ">
          © 2025 E-commerce | All rights reserved
        </footer>
      </section>
    </div>
  );
}

export default App;
