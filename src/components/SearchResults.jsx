import gritCalculation from "./gritCalculation";

export default function SearchResults({ knifeStyle, metalType }) {
  let stones = gritCalculation(knifeStyle, metalType);
  return stones[0] != 0 ? (
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
