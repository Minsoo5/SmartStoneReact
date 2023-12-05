import reactLogo from "../assets/react.svg";
import "../App.css";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <>
      <img src={reactLogo} />
      <Search />
      <Footer />
    </>
  );
}

export default App;
