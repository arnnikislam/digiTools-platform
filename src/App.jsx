import "./App.css";
import Banner from "./components/banner/Banner";
import NavBar from "./components/navbar/NavBar";
import StatList from "./components/stats/StatList";
import MainSection from "./components/MainSection/MainSection";
import { Suspense } from "react";

// data fetching
const productsDataFetch = async () => {
  const res = await fetch("productsData.json");
  return res.json();
};

function App() {
  const productsDataRes = productsDataFetch();
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <StatList></StatList>

      <Suspense
        fallback={
          <div className="flex justify-center items-center my-4">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <MainSection productsDataRes={productsDataRes}></MainSection>
      </Suspense>
    </>
  );
}

export default App;
