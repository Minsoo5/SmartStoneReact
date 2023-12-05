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
      <h3>Use these stones in order</h3>
      <h3>
        With an angle of {angle - 1} - {angle + 1} degrees
      </h3>
      <h3>{singleBevel === "Yes" ? "On one side only" : "On both sides"}</h3>
      <ul>
        {stones.map((stone) => (
          <li key={stones.indexOf(stone)}>Grit Level: {stone}</li> // Place holder key for the eslint error.
        ))}
      </ul>
    </div>
  ) : null;
}
