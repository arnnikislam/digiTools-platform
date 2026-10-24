import "./App.css";
import Banner from "./components/banner/Banner";
import NavBar from "./components/navbar/NavBar";
import StatsList from "./components/stats/StatList";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <StatsList></StatsList>
    </>
  );
}

export default App;
