import gritCalculation from "./gritCalculation";
import angleCalculation from "./angleCalculation";
import { knifeObject } from "./objectTypes";

const SearchResults = (props: knifeObject) => {
  let stones = gritCalculation(
    props.knifeStyle,
    props.metalType,
    props.singleBevel,
    props.currentSharpness
  );
  let angle = angleCalculation(
    props.knifeStyle,
    props.metalType,
    props.singleBevel,
    props.currentSharpness
  );
  return stones[0] != 0 ? (
    <div className="instructions">
      <h3>
        Stones to use with an angle of {angle - 1} - {angle + 1} degrees
      </h3>
      <h3>
        {props.singleBevel !== "" && props.singleBevel === "Yes"
          ? "On one side only"
          : props.singleBevel === "No"
          ? "On both sides"
          : null}
      </h3>
      <ul>
        {stones.map((stone: number) => (
          <li key={stones.indexOf(stone)}>
            Grit Level:{" "}
            <a
              href={`https://www.amazon.com/s?k=sharpening+stone+grit+${stone}&ref=nb_sb_noss`}
              target="_blank"
              rel="noreferrer"
            >
              {stone}
            </a>
          </li> // Place holder key for the eslint error.
        ))}
      </ul>
      <h3>
        {props.currentSharpness !== "" && props.currentSharpness === "Very Dull"
          ? "Time to take off some metal!"
          : props.currentSharpness === "Dull"
          ? "You're gonna need some elbow grease!"
          : props.currentSharpness === "Almost Sharp"
          ? "Just a little touch up!"
          : null}
      </h3>
    </div>
  ) : null;
};

export default SearchResults;
