export default function gritCalculation(
  knifeStyle,
  metalType,
  currentSharpness
) {
  let maxGrit = 0;
  let minGrit = 0;

  switch (knifeStyle) {
    case "Chef Knife":
      maxGrit = 3.0;
      minGrit = 0.6;
      break;

    case "Butcher Knife":
      maxGrit = 1.5;
      minGrit = 0.5;
      break;

    case "Slicing Knife":
      maxGrit = 5.0;
      minGrit = 0.8;
      break;
  }

  switch (metalType) {
    case "High Carbon":
      maxGrit += 1.0;
      break;

    case "Stainless Steel":
      maxGrit += 0;
      break;

    case "Damascus":
      maxGrit += 1.0;
      break;
  }

  switch (currentSharpness) {
    case "Very Dull":
      minGrit += 0;
      break;

    case "Dull":
      minGrit = minGrit + minGrit / 2;
      break;

    case "Almost Sharp":
      minGrit = minGrit + minGrit;
      break;
  }

  let stoneGrits = [];

  // Multiplying by 1000 to get the grit
  // .toFixed(1) to round off the 1 decimal place. Math.round to achieve similar results.

  let minimum = parseFloat(minGrit.toFixed(1));
  let maximum = parseFloat(maxGrit.toFixed(1));

  stoneGrits.push(minimum * 1000);
  stoneGrits.push((Math.round(minimum + maximum) / 2) * 1000);
  stoneGrits.push(maximum * 1000);

  return stoneGrits;
}
