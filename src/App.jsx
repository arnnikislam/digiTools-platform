import "./App.css";
import Banner from "./components/banner/Banner";
import NavBar from "./components/navbar/NavBar";
import StatList from "./components/stats/StatList";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <StatList></StatList>
      <MainSection></MainSection>
    </>
  );
}

export default App;
