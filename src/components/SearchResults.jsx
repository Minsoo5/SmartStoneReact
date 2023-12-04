import gritCalculation from "./gritCalculation";
import angleCalculation from "./angleCalculation";

export default function SearchResults({ knifeStyle, metalType, singleBevel }) {
  let stones = gritCalculation(knifeStyle, metalType);
  return stones[0] != 0 ? (
    <div>
      <h3>Use these stones in order</h3>
      <h3>
        With an angle of{" "}
        {angleCalculation(knifeStyle, metalType, singleBevel) - 1} -{" "}
        {angleCalculation(knifeStyle, metalType, singleBevel) + 1} degrees
      </h3>
      <h3>{singleBevel === "Yes" ? "On one side" : "On both sides"}</h3>
      <ul>
        {stones.map((stone) => (
          <li>Grit Level: {stone}</li>
        ))}
      </ul>
    </div>
  ) : null;
}
