export function Category() {
  return (
    <>
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
              Up To <span className="font-bold text-yellow-400">40% Off</span>
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
              Up To <span className="font-bold text-yellow-400">40% Off</span>
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
    </>
  );
}
