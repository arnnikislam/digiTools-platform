import { use, useState } from "react";
import ProductList from "./products/ProductList";
import CartList from "./cart/CartList";
import BtnToggling from "./BtnToggling";

const MainSection = ({ productsDataRes, cartProducts, setCartProducts }) => {
  const productsData = use(productsDataRes);
  // for tab btn toggling
  const [activeBtn, setActiveBtn] = useState("Products");
  const tabs = ["Products", "Cart"];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col text-center justify-center items-center gap-4 my-8">
        <h2 className="font-bold text-2xl md:text-5xl">
          Premium Digital Tools
        </h2>
        <p className="text-lg text-[#627382] w-[85%] md:w-[35%] mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        {/* for btn toggling */}
        <div className="flex gap-2 text-black">
          {tabs.map((tab, index) => (
            <BtnToggling
              key={index}
              tab={tab}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              cartProducts={cartProducts}
            ></BtnToggling>
          ))}
        </div>
      </div>

      {/* products cards */}
      <div>
        {activeBtn === "Products" ? (
          <ProductList
            productsData={productsData}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          ></ProductList>
        ) : (
          <CartList
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          ></CartList>
        )}
      </div>
    </div>
  );
};

export default MainSection;
