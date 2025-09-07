export function Footer() {
  return (
    <>
      <div className="bg-[#0c1c3a] p-6 rounded-[20px] w-full max-w-4xl text-white mt-[3%] mb-12">
        <h3 className="text-[35px] font-bold text-center mb-1 ">
          Top Brands Deal
        </h3>
        <p className="text-center text-[15px] mb-6">
          Up To <span className="text-yellow-400 font-semibold">60% off</span>{" "}
          on brands
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
        <h3 className="text-xl font-bold text-[#0c1c3a] mb-1">
          Subscribe Newsletter
        </h3>
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10l9 4 9-9-9 13-3-4H3z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Footer merged here */}
      <footer className="w-full text-center bg-black text-white py-3 mt-[7.8%] ">
        © 2025 E-commerce | All rights reserved
      </footer>
    </>
  );
}
