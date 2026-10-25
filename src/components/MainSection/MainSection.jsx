import { use, useState } from "react";
import ProductList from "./products/ProductList";
import CartList from "./cart/CartList";
import BtnToggling from "./BtnToggling";

const MainSection = ({ productsDataRes }) => {
  const productsData = use(productsDataRes);
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
        <div className="flex gap-2 text-black">
          {tabs.map((tab, index) => (
            <BtnToggling
              key={index}
              tab={tab}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            ></BtnToggling>
          ))}
        </div>
      </div>

      {/* products cards */}
      <div>
        {activeBtn === "Products" ? (
          <ProductList productsData={productsData}></ProductList>
        ) : (
          <CartList></CartList>
        )}
      </div>
    </div>
  );
};

export default MainSection;
