export default function gritCalculation(knifeStyle, metalType) {
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

  let stoneGrits = [];
  stoneGrits.push(minGrit * 1000);
  stoneGrits.push(Math.floor((maxGrit + minGrit) / 2) * 1000); // Multiplying by 100 now to keep everything rounded
  stoneGrits.push(maxGrit * 1000);

  console.log(stoneGrits);
  return stoneGrits;
}
