import { useState } from "react";

const MainSection = () => {
  // ========== btn toggling starts ================
  const [activeBtn, setActiveBtn] = useState("Products");
  const tabs = ["Products", "Cart"];
  // ========== btn toggling ends ==================
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
          {tabs.map((tab, index) => {
            return (
              // ========== btn toggling starts ================
              <button
                key={index}
                onClick={() => setActiveBtn(tab)}
                className={`btn border-none  rounded-full ${activeBtn === tab && "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"}`}
              >
                {tab === "Cart" ? `${tab} (0)` : `${tab}`}
              </button>
              // ========== btn toggling ends ==================
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
