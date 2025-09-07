import Products from "./components/Products";
import { Header } from "./components/Header";
import { Herosec } from "./components/Herosec";
import { Category } from "./components/Category";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Header Section */}
      <section className="snap-start relative h-screen w-full">
        <Header />

        {/* Herosec Section */}
        <div className="relative flex flex-col items-center justify-center text-white h-[calc(100vh-80px)]">
          <Herosec />
        </div>
      </section>

      {/* Category Section */}
      <section className="snap-start min-h-screen flex items-center justify-center bg-[#FFFDF0] ">
        <Category />
      </section>

      {/* Product Overview Section */}
      <section className="snap-start  flex flex-col items-center justify-center bg-[#FFFDF0] ">
        <Products />
      </section>

      {/* Top Brands + Newsletter + Footer Section */}
      <section className="snap-start min-h-screen flex flex-col items-center bg-[#FFFDF0] ">
        <Footer />
      </section>
    </div>
  );
}

export default App;
