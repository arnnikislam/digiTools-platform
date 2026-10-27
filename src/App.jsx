import "./App.css";
import Banner from "./components/banner/Banner";
import NavBar from "./components/navbar/NavBar";
import StatList from "./components/stats/StatList";
import MainSection from "./components/MainSection/MainSection";
import { Suspense, useState } from "react";
import StepList from "./components/Steps/StepList";

// data fetching
const productsDataFetch = async () => {
  const res = await fetch("productsData.json");
  return res.json();
};
const productsDataRes = productsDataFetch();

function App() {
  // for adding product to cart
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <>
      <NavBar cartProducts={cartProducts}></NavBar>
      <Banner></Banner>
      <StatList></StatList>

      <Suspense
        fallback={
          <div className="flex justify-center items-center my-4">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <MainSection
          productsDataRes={productsDataRes}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        ></MainSection>
      </Suspense>

      <StepList></StepList>
    </>
  );
}

export default App;
