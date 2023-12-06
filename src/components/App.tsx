import reactLogo from "../assets/react.svg";
import "../App.css";
import Search from "./Search";
import Footer from "./Footer";

// Getting error on the reactLogo import but not effecting the actual app....

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
