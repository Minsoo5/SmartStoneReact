import gritCalculation from "./gritCalculation";
import angleCalculation from "./angleCalculation";

export default function SearchResults({
  searchRequest: { knifeStyle, metalType, singleBevel, currentSharpness },
}) {
  console.log(knifeStyle); // defined

  let stones = gritCalculation(knifeStyle, metalType, currentSharpness);
  let angle = angleCalculation(knifeStyle, metalType, singleBevel);
  return stones[0] != 0 ? (
    <div>
      <h3>
        Stones to use with an angle of {angle - 1} - {angle + 1} degrees
      </h3>
      <h3>
        {singleBevel !== "" && singleBevel === "Yes"
          ? "On one side only"
          : singleBevel === "No"
          ? "On both sides"
          : null}
      </h3>
      <ul>
        {stones.map((stone) => (
          <li key={stones.indexOf(stone)}>Grit Level: {stone}</li> // Place holder key for the eslint error.
        ))}
      </ul>
      <h3>
        {currentSharpness !== "" && currentSharpness === "Very Dull"
          ? "Time to take off some metal!"
          : currentSharpness === "Dull"
          ? "You're gonna need some elbow grease!"
          : currentSharpness === "Almost Sharp"
          ? "Just a little touch up!"
          : null}
      </h3>
    </div>
  ) : null;
}
