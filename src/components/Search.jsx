import CurrentKnife from "./CurrentKnife";
import SearchResults from "./SearchResults";
import { useState, useEffect } from "react";

const Search = () => {
  const [searchRequest, setSearchRequest] = useState({
    knifeStyle: "",
    metalType: "",
    singleBevel: "",
    currentSharpness: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      knifeStyle: formData.get("knifeStyle") ?? "",
      metalType: formData.get("metalType") ?? "",
      singleBevel: formData.get("singleBevel") ?? "",
      currentSharpness: formData.get("currentSharpness") ?? "",
    };
    setSearchRequest(obj);
    // Perform clean up and a fetch?
  };

  useEffect(() => {
    console.log(searchRequest); // Just checking, will trigger after each component render
  });

  return (
    <div>
      <h1>Reactive Smart Stone</h1>
      <form onSubmit={handleSubmit} className="searchForm">
        <label htmlFor="knifeStyle">
          Knife Style
          <select id="knifeStyle" name="knifeStyle">
            <option />
            <option key="Chef Knife">Chef Knife</option>
            <option key="Butcher Knife">Butcher Knife</option>
            <option key="Slicing Knife">Slicing Knife</option>
          </select>
        </label>

        <label htmlFor="metalType">
          Metal Type
          <select id="metalType" name="metalType">
            <option />
            <option key="High Carbon">High Carbon</option>
            <option key="Stainless Steel">Stainless Steel</option>
            <option key="Damascus">Damascus</option>
          </select>
        </label>

        <label htmlFor="singleBevel">
          Single Bevel
          <select id="singleBevel" name="singleBevel">
            <option />
            <option key="Yes">Yes</option>
            <option key="No">No</option>
          </select>
        </label>

        <label htmlFor="currentSharpness">
          Current Sharpness
          <select id="currentSharpness" name="currentSharpness">
            <option />
            <option key="Very Dull">Very Dull</option>
            <option key="Dull">Dull</option>
            <option key="Almost Sharp">Almost Sharp</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>

      <CurrentKnife
        knifeStyle={searchRequest.knifeStyle}
        metalType={searchRequest.metalType}
        singleBevel={searchRequest.singleBevel}
        currentSharpness={searchRequest.currentSharpness}
      />

      <SearchResults
        knifeStyle={searchRequest.knifeStyle}
        metalType={searchRequest.metalType}
        singleBevel={searchRequest.singleBevel}
        currentSharpness={searchRequest.currentSharpness}
      />
    </div>
  );
};

export default Search;
