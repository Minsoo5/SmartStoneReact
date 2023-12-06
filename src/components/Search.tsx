import CurrentKnife from "./CurrentKnife";
import SearchResults from "./SearchResults";
import { useState, useEffect, SyntheticEvent } from "react";
import { knifeObject } from "./objectTypes";

const Search = () => {
  const [searchRequest, setSearchRequest] = useState<knifeObject>({
    knifeStyle: "",
    metalType: "",
    singleBevel: "",
    currentSharpness: "",
  });

  const { knifeStyle, metalType, singleBevel, currentSharpness } =
    searchRequest;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const obj: knifeObject = {
      knifeStyle: (formData.get("knifeStyle") as string) ?? "",
      metalType: (formData.get("metalType") as string) ?? "",
      singleBevel: (formData.get("singleBevel") as string) ?? "",
      currentSharpness: (formData.get("currentSharpness") as string) ?? "",
    };
    setSearchRequest(obj);
    // Perform clean up and a fetch?
    // Grit hyperlink place holder
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
        <div>
          <button>Submit</button>
          <button
            type="reset"
            onClick={() => {
              setSearchRequest({
                knifeStyle: "",
                metalType: "",
                singleBevel: "",
                currentSharpness: "",
              });
            }}
          >
            Reset
          </button>
        </div>
      </form>

      <CurrentKnife {...searchRequest} />

      <SearchResults {...searchRequest} />
    </div>
  );
};

export default Search;
