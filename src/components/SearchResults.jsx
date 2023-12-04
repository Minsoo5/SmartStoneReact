import gritCalculation from "./gritCalculation";

export default function SearchResults({ knifeStyle, metalType, singleBevel }) {
  console.log("Inside Search Results");
  console.log(knifeStyle);
  let stones = gritCalculation(knifeStyle, metalType);
  console.log(stones);
  return stones[1] != 0 ? (
    <div>
      <h3>Use these stones in order:</h3>
      <ol>
        {stones.map((stone) => (
          <li>Stone with Grit Level: {stone}</li>
        ))}
      </ol>
    </div>
  ) : null;
}
